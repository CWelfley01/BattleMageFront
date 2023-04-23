import React, { useState } from "react";
import axios from "axios";

import Banner from "../../static/assets/images/fire-banner.png";
import NavBar from "../components/NavBar";


import styles from "../style/lists.scss";

export default function addElement() {
  const [Combo, setCombo] = useState("");
  const [Result, setResult] = useState("");
  

  const clearState = () => {
    setCombo("");
    setResult("");
    
  };

  const postElement = (event) => {
    axios
      .post(
        "http://127.0.0.1:5000/add-element",
        {
          Combo: Combo,
          Result: Result,
          
        },
        {
          Headers: { "Access-Control-Allow-Origin": "*" },
        }
      )
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
    clearState();
    event.preventDefault();
  };

  

  return (
    <div className="add-spell">
      <img className="banner" src={Banner} />
      <div className="add-spell-page">
        <div>
          <h1 className="add-spell-title">Enter an elements data!</h1>
          <form className="add-spell-form" onSubmit={postElement}>
            <input
              value={Combo}
              className="add-spell-form-input"
              onChange={(event) => setCombo(event.target.value)}
              type="text"
              placeholder="First element/Second element"
            />
            <input
              value={Result}
              className="add-spell-form-input"
              onChange={(event) => setResult(event.target.value)}
              type="text"
              placeholder="Result"
            />
            
            <button className="add-spell-form-button">Add element!</button>
          </form>
        </div>
      </div>
      
    </div>
  );
}
