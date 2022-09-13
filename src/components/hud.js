import React, { Component } from "react";
import styles from "../style/hud.scss";
import axios from "axios";

import Scroll from "../../static/assets/images/emptySpellForm.png";
import PoweredScroll from "../../static/assets/images/poweredSpellForm.png";

import Fire from "../../static/assets/images/fireicon.png";
import Water from "../../static/assets/images/watericon.png";
import Air from "../../static/assets/images/airicon.png";
import Earth from "../../static/assets/images/earthicon.png";
import Fireball from "../../static/assets/images/fireball.png";
import Flamethrower from "../../static/assets/images/flamethrower.png";
import RingofFire from "../../static/assets/images/ringoffire.png";
import shot from "../../static/assets/images/shot.png";
import beam from "../../static/assets/images/beam.png";
import wall from "../../static/assets/images/wall.png";
import clear from "../../static/assets/images/clear.png";

export default class Hud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      element1: "blank",
      element2: "blank",
      combinedElement: "blank",
      form: "blank",
      spell: "blank",
    };

    this.setFireMana = this.setFireMana.bind(this);
    this.setWaterMana = this.setWaterMana.bind(this);
    this.setAirMana = this.setAirMana.bind(this);
    this.setEarthMana = this.setEarthMana.bind(this);
    this.setShotForm = this.setShotForm.bind(this);
    this.setBeamForm = this.setBeamForm.bind(this);
    this.setWallForm = this.setWallForm.bind(this);
    this.combineElements = this.combineElements.bind(this);
    this.createASpell = this.createASpell.bind(this);
    this.createBSpell = this.createBSpell.bind(this);
  }

  setFireMana = () => {
    if (this.state.element1 == "blank") {
      this.setState({ element1: "Fire" });
    } else {
      this.setState({ element2: "Fire" });
    }
  };

  setWaterMana = () => {
    if (this.state.element1 == "blank") {
      this.setState({ element1: "Water" });
    } else {
      this.setState({ element2: "Water" });
    }
  };

  setAirMana = () => {
    if (this.state.element1 == "blank") {
      this.setState({ element1: "Air" });
    } else {
      this.setState({ element2: "Air" });
    }
  };

  setEarthMana = () => {
    if (this.state.element1 == "blank") {
      this.setState({ element1: "Earth" });
    } else {
      this.setState({ element2: "Earth" });
    }
  };

  setShotForm = () => {
    this.setState({ form: "Shot" });
  };

  setBeamForm = () => {
    this.setState({ form: "Beam" });
  };

  setWallForm = () => {
    this.setState({ form: "Wall" });
  };

  combineElements = () => {
    const element1 = this.state.element1;
    const element2 = this.state.element2;
    axios.get(`https://caw-capstone.herokuapp.com/Element`).then((response) => {
      this.setState({
        combinedElement: response.data
          .filter((item) =>
            item.Combo.includes(`${this.state.element1}/${this.state.element2}`)
          )
          .map((filteredItem) => filteredItem.Result),
      });
    });
  };

  createBSpell = () => {
    const element1 = this.state.element1;
    const form = this.state.form;
    const spell = this.state.spell;

    axios.get(`https://caw-capstone.herokuapp.com/Form`).then((response) => {
      this.setState({
        spell: response.data
          .filter((item) =>
            item.Combine.includes(`${this.state.element1}/${this.state.form}`)
          )
          .map((filteredItem) => filteredItem.End),
      });
    });
  };

  createASpell = () => {
    const combinedElement = this.state.combinedElement;
    const form = this.state.form;
    const spell = this.state.spell;

    axios.get(`https://caw-capstone.herokuapp.com/Form`).then((response) => {
      this.setState({
        spell: response.data
          .filter((item) =>
            item.Combine.includes(
              `${this.state.combinedElement}/${this.state.form}`
            )
          )
          .map((filteredItem) => filteredItem.End),
      });
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.element1 !== "blank") {
      if (prevState.element2 !== this.state.element2) {
        this.combineElements();
      }
      if (prevState.form !== this.state.form) {
        if (this.state.combinedElement !== "blank") {
          this.createASpell();
        } else {
          this.createBSpell();
        }
      }
    }
  }

  clearSpellForm = () => {
    {
      this.setState({ element1: "blank" });
    }
    {
      this.setState({ element2: "blank" });
    }
    {
      this.setState({ combinedElement: "blank" });
    }
    {
      this.setState({ form: "blank" });
    }
    {
      this.setState({ spell: "blank" });
    }
  };

  render() {
    return (
      <div className="content-wrapper">
        <div className="spellform">
          <div className="background">
            <img src={Scroll} className="dead" />
            {/* <img src={PoweredScroll} className="live" /> */}
          </div>
          <div className="foreground">
            <div className="dead">{this.state.element1}</div>
            <div className="dead">{this.state.element2}</div>
            <div className="dead">{this.state.combinedElement}</div>
            <div className="dead">{this.state.form}</div>
            <div className="live">{this.state.spell}</div>
          </div>
        </div>
        <div className="hud">
          <div className="mana">
            <button onClick={this.setFireMana}>
              <img src={Fire} />
            </button>
            <button onClick={this.setWaterMana}>
              <img src={Water} />
            </button>
            <button onClick={this.setAirMana}>
              <img src={Air} />
            </button>
            <button onClick={this.setEarthMana}>
              <img src={Earth} />
            </button>
          </div>
          <div className="form">
            <button onClick={this.setShotForm}>
              <img src={shot} />
            </button>
            <button onClick={this.setBeamForm}>
              <img src={beam} />
            </button>
            <button onClick={this.setWallForm}>
              <img src={wall} />
            </button>
            <button onClick={this.clearSpellForm}>
              <img src={clear} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
