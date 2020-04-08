import React, { Component } from "react";
import { Route } from "react-router-dom";
import Game from "./Game";
import "./App.css";
import Axios from "axios";

class Creategame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] ,num : 0,count : 4};
    this.postgame = this.postgame.bind(this);
    this.add = this.add.bind(this);
  }

   postgame() {
    fetch("http://localhost:8080/api/stage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer: this.state.list }),
    }).then(async (response) => {
      const data = await response.json();
      this.props.history.push(`/Game/${data.id}`);
    });
  }

  add(char) {
    if (this.state.num <= 3) {
      this.setState({list: this.state.list.concat(char), num: this.state.num+1, count: this.state.count - 1})
    }
  }

  render() {
    return (
      <div>
        <h1>Create Guessing Game</h1>
        <p>Please Choose A or B or C or D to be answer ({this.state.count} characters) </p>
        <p className="answer">
          Answer is : {this.state.list[0] != null ? this.state.list[0] : ""}{" "}
          {this.state.list[1] != null ? this.state.list[1] : ""}{" "}
          {this.state.list[2] != null ? this.state.list[2] : ""}{" "}
          {this.state.list[3] != null ? this.state.list[3] : ""}{" "}
        </p>
        <p className="Choose" style={{ display: "inline-block" }}>
          Choose:{""}
        </p>
        <button onClick={() => this.add("A")}>A</button>
        <button onClick={() => this.add("B")}>B</button>
        <button onClick={() => this.add("C")}>C</button>
        <button onClick={() => this.add("D")}>D</button>
        <p> Create</p>
        <button onClick={() => this.postgame()}>Submit</button>
      </div>
    );
  }
}

export default Creategame;
