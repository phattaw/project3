import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import { TableRow, FinalTableRow } from "../components/TableRow";
import { ZerosRow } from "../components/ZerosRow";

class Board extends Component {
  state = {
    currentTiles: [],
    buttonStyles: {}
  };

  componentDidMount() {
    this.loadTiles();
  }

  loadTiles = () => {
    let rows = [];
    let status = [];
    let buttonStyle = {};

    for(let i = 0; i < 12; i++) {
      rows.push({ id: i*3, clickTile: this.clickTile });
    }

    for(let i = 0; i < 50; i++) {
      status.push({ clicked: false });
      buttonStyle[i] = { borderColor: "white" };
    }

    this.setState({ currentTiles: rows, status: status, buttonStyles: buttonStyle });
  };

  clickTile = id => {
    this.state.status[id - 1].clicked = !this.state.status[id - 1].clicked;

    let buttonStyles = this.generateButtonStyles();

    this.setState({ status: this.state.status, buttonStyles: buttonStyles });

  };

  generateButtonStyles = () => {
    let buttonStyle = {};
    let winningSingles = [];
    let losingSingles = [];
    let winningDoubles = [];
    let winningQuads = [];

    for(let i = 0; i < 5; i++) {
      winningSingles.push(Math.floor((Math.random() * 38) + 1));
    }
    for(let i = 0; i < 5; i++) {
      losingSingles.push(Math.floor((Math.random() * 38) + 1));
    }

    for(let i = 0; i < this.state.status.length; i++) {
      buttonStyle[i] = { borderColor: "white", boxShadow: "none" };
    }

        // switch(props.buttonStyle) {
    //     case "topLeft":
    //         curStyle.borderRight = "none";
    //         curStyle.borderBottom = "none";    
    //         break;
    //     case "topRight":
    //         curStyle.borderLeft = "none";
    //         curStyle.borderBottom = "none";
    //         break;
    //     case "bottomLeft":
    //         curStyle.borderTop = "none";
    //         curStyle.borderRight = "none";
    //         break;
    //     case "bottomRight":
    //         curStyle.borderLeft = "none";
    //         curStyle.borderTop = "none";
    //         break;
    //     case "single":
    //         break;
    //     case "topDouble":
    //         curStyle.borderBottom = "none";
    //         break;
    //     case "bottomDouble":
    //         curStyle.borderTop = "none";
    //         break;
    //     default:
    //         break;
    // }

    for(let i = 0; i < this.state.status.length; i++) {
      for(let j = 0; j < winningSingles.length; j++) {
        if(winningSingles[j] === i) {
          buttonStyle[i].borderColor = "orange";
          // buttonStyle[i].boxShadow = "0 6px 6px -2px purple, 0 8px 8px -4px yellow";
          // Bottom right
          // buttonStyle[i].boxShadow = "2px 2px 2px blue, 5px 5px 5px orange";
          // top right
          // buttonStyle[i].boxShadow = "2px -2px 2px blue, 5px -5px 5px orange";
          // Left top right
          // buttonStyle[i].boxShadow = "0px -2px 0px 2px blue, 0px -5px 0px 4px orange";
          // left right bottom
          buttonStyle[i].boxShadow = "0px 2px 0px 2px blue, 0px 5px 0px 4px orange";
        } 
      }
    }

    for(let i = 0; i < this.state.status.length; i++) {
      for(let j = 0; j < losingSingles.length; j++) {
        if(losingSingles[j] === i) {
          buttonStyle[i].borderColor = "blue";
          // top left
          // buttonStyle[i].boxShadow = "-2px -2px 2px pink, -5px -5px 5px blue";
          // bottom left
          // buttonStyle[i].boxShadow = "-2px 2px 2px pink, -5px 5px 5px blue";
          // left top bottom
          // buttonStyle[i].boxShadow = "-2px 0px 0px 2px pink, -5px 0px 0px 4px blue";
          // top right bottom
          buttonStyle[i].boxShadow = "2px 0px 0px 2px pink, 5px 0px 0px 4px blue";
        } 
      }
    }

    return(buttonStyle);
  }

  render() {
    return (
      <Container fluid>
        <div style={{ lineHeight: "2.5" }} >
          <ZerosRow key={0} buttonStyle={this.state.buttonStyles} clickTile={this.clickTile} tileId={36}></ZerosRow>
          {this.state.currentTiles.map(tile =>
            (
            <TableRow key={tile.id} buttonStyle={this.state.buttonStyles} clickTile={tile.clickTile} tileId={tile.id}></TableRow>
            )
          )}
          <FinalTableRow buttonStyle={this.state.buttonStyles} clickTile={this.clickTile} tileId={38}></FinalTableRow>
        </div>
      </Container>
    );
  }
}

export default Board;
