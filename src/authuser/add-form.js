import React, { useState } from "react";
import axios from "axios";

import Banner from "../../static/assets/images/air-banner.png";
import styles from "../style/lists.scss";
import NavBar from "../components/NavBar";

export default function addFormElement() {
  const [Combine, setCombine] = useState("");
  const [End, setEnd] = useState("");
  
  

  const clearState = () => {
    setCombine("");
    setEnd("");
    
    
  };

  const postFormElement = (event) => {
    axios
      .post("https://caw-capstone.herokuapp.com/add-Form", {
        Combine: Combine,
        End: End,
        
        
      },{
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
    clearState();
    event.preventDefault();
  };

  return (
    <div className="add-spell">
      <img className="banner" src={Banner} />
      <h1 className="add-spell-title">Enter an forms data!</h1>
      <form className="add-spell-form" onSubmit={postFormElement}>
      <input
          value={Combine}
          className="add-spell-form-input"
          onChange={(event) => setCombine(event.target.value)}
          type="text"
          placeholder="Element/Form"
        />
        <input
          value={End}
          className="add-spell-form-input"
          onChange={(event) => setEnd(event.target.value)}
          type="text"
          placeholder="End"
        />
        
        <button className="add-spell-form-button">Add Form!</button>
      </form>
    </div>
  );
}
