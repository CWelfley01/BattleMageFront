import React, { useState } from "react";
import axios from "axios";

import Banner from "../../static/assets/images/emptySpellForm.png";

export default function addSpell() {
  const [spellname, setSpellName] = useState("");
  const [attackmod, setAttackMod] = useState("");
  const [defencemod, setDefenceMod] = useState("");
  const [specialeffect, setSpecialEffect] = useState("");
  const [description, setDescription] = useState("");

  const clearState = () => {
    setSpellName("");
    setAttackMod("");
    setDefenceMod("");
    setSpecialEffect("");
    setDescription("");
  };

  const postSpell = (event) => {
    axios
      .post(
        "https://battlemage.herokuapp.com/:5000/add-spell",
        {
          spellname: spellname,
          attackmod: attackmod,
          defencemod: defencemod,
          specialeffect: specialeffect,
          description: description,
        },
        {
          headers: { "Access-Control-Allow-Origin": "*" },
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
        <h1 className="add-spell-title">Enter a books data!</h1>
        <form className="add-spell-form" onSubmit={postSpell}>
          <input
            value={spellname}
            className="add-spell-form-input"
            onChange={(event) => setSpellName(event.target.value)}
            type="text"
            placeholder="spellname"
          />
          <input
            value={attackmod}
            className="add-spell-form-input"
            onChange={(event) => setAttackMod(event.target.value)}
            type="number"
            placeholder="Attack Modifier"
          />
          <input
            value={defencemod}
            className="add-spell-form-input"
            onChange={(event) => setDefenceMod(event.target.value)}
            type="number"
            placeholder="Defence Modifier"
          />
          <input
            value={specialeffect}
            className="add-spell-form-input"
            onChange={(event) => setSpecialEffect(event.target.value)}
            type="text"
            placeholder="Special Effect"
          />
          <textarea
            value={description}
            className="add-spell-form-textarea"
            onChange={(event) => setDescription(event.target.value)}
            type="text"
            placeholder="description"
          />
          <button className="add-spell-form-button">Add spell!</button>
        </form>
      </div>
    </div>
  );
}
