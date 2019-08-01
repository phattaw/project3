import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import { TableRow, FinalTableRow } from "../components/TableRow";
import { ZerosRow } from "../components/ZerosRow";
import { conglomerate } from "../rollsGenerator1";
// import RouletteBoard from "../components/RouletteBoard";
import Area from "../components/Area";

class Board extends Component {
  state = {
    currentTiles: [],
    buttonStyles: {},
    touchableRects: []
  };

  componentDidMount() {
    this.loadTiles();
  }

  generateTouchableRects() {
    let touchableRects = []

    let left = 140;
    let top = 35;
    let right = 190;
    let bottom = 110;
    let id = 0;

    // All numbers and row 1/3rd bets
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 12; i++) {
        let coordinates = ""
        coordinates = (left + 80 * i) + "," + (top + j * 115) + "," + (right + 80 * i) + "," + (bottom + j * 115);
        id++;
        let coordinate = {
          coordinates: coordinates,
          numCoordinates: { left: left+ 15 + 82 * i, top: top + 58 + j * 115, right: right + 15 + 82 * i, bottom: bottom + 58 + j * 115 },
          id: id,
          type: "numbers"
        }
        touchableRects.push(coordinate);
      }
    }

    // // Colum bets (end of number row)
    for(let j = 0; j < 3; j++) {
      let coordinates = ""
      coordinates = (left + 80 * 11) + "," + (top + j * 115) + "," + (right + 80 * 11) + "," + (bottom + j * 115);
      id++;
      let coordinate = {
        coordinates: coordinates,
        numCoordinates: { left: left + 15 + 81 * 12, top: top + 58 + j * 115, right: right +15 + 81 * 12, bottom: bottom + 58 + j * 115 },
        id: id,
        type: "columnBet"
      }
      touchableRects.push(coordinate);

    }

    // // 1/3rd bets
    for(let i = 0; i < 3; i++) {
      let coordinates = ""
      coordinates = (150 + 325 * i) + "," + 370 + "," + (420 + 325 * i) + "," + 425;
      id++;
      let coordinate = {
        coordinates: coordinates,
        numCoordinates: { left: 150 + 135 + 325 * i, top: 370 + 58 , right: 420 + 135 + 325 * i, bottom: 425 + 58 },
        id: id,
        type: "oneThird"
      }

      touchableRects.push(coordinate);
    }

    // // 50/50 bets
    for(let i = 0; i < 6; i++) {
      let coordinates = ""
      coordinates = (150 + 160 * i) + "," + 475 + "," + (270 + 160 * i) + "," + 545;
      id++;
      let coordinate = {
        coordinates: coordinates,
        numCoordinates: { left: 150 + 50 + 162 * i, top: 475 + 58, right: 270 + 50 + 162 * i, bottom: 545 + 58 },
        id: id,
        type: "fiftyfifty"
      }

      touchableRects.push(coordinate);
    }

    // // Zero
    let zeroCoordinates = ""
    zeroCoordinates = "50,50,100,320";
    id++;
    let zeroCoordinate = {
      coordinates: zeroCoordinates,
      numCoordinates: { left: 75, top: 180, right: 100, bottom: 320 },
      id: id,
      type: "zero"
    }

    touchableRects.push(zeroCoordinate);

    // // Left/Right Split locations
    for(let j = 0; j < 3; j++) {
      for(let i = 0; i < 11; i++) {
        let splitCoordinates = (200 + 80 * i) + "," + (50 + 100*j) + "," + (220 + 80 * i) + "," + (100 + 100*j);
        id++;
        let splitCoordinate = {
          coordinates: splitCoordinates,
          numCoordinates: { left: 200 + 81 * i, top: 50 + 56 + 102*j, right: 220 + 81 * i, bottom: 100 + 56 + 102*j },
          id: id,
          type: "split"
        }

        touchableRects.push(splitCoordinate);      
      }
    }

    // // // Top/Bottom Split locations 125 to 210
    for(let j = 0; j < 2; j++) {
      for(let i = 0; i < 12; i++) {
        let splitCoordinates = (150 + 85 * i) + "," + (110 + 105*j) + "," + (185 + 85 * i) + "," + (130 + 105*j);
        id++;
        let splitCoordinate = {
          coordinates: splitCoordinates,
          numCoordinates: { left: 160 + 81.5 * i, top: 110 + 50 + 105*j, right: 160 + 100 * i, bottom: 130 + 50 + 102*j },
          id: id,
          type: "split"
        }

        touchableRects.push(splitCoordinate);      
      }
    }
    
    // // Square bet locations
    for(let j = 0; j < 2; j++) {
      for(let i = 0; i < 11; i++) {
        let squareCoordinates = (200 + 81 * i) + "," + (115 + 110*j) + "," + (220 + 81 * i) + "," + (135 + 110*j);
        id++;
        let squareCoordinate = {
          coordinates: squareCoordinates,
          numCoordinates: { left: 200 + 81 * i, top: 155 + 110*j, right: 220 + 81 * i, bottom: 135 + 110*j },
          id: id,
          type: "square"
        }

        touchableRects.push(squareCoordinate);
      }
    }
    
    return(touchableRects);
  }

  loadTiles = () => {
    let rows = [];
    let status = [];
    let buttonStyle = {};

    for (let i = 0; i < 12; i++) {
      rows.push({ id: i * 3, clickTile: this.clickTile });
    }

    for (let i = 0; i < 50; i++) {
      status.push({ clicked: false });
      buttonStyle[i] = { borderColor: "white" };
    }

    let touchableRects = this.generateTouchableRects();

    conglomerate();
    // let test_results = results();
    // console.log(`test_results: ${JSON.stringify(test_results, null, 2)}`);

    this.setState({ currentTiles: rows, status: status, buttonStyles: buttonStyle, touchableRects: touchableRects });
  };

  clickTile = id => {
    this.state.status[id - 1].clicked = !this.state.status[id - 1].clicked;

    let spinResults = conglomerate();
    // console.log(`clickTile spinResults: ${JSON.stringify(spinResults, null, 2)}`);

    let buttonStyles = this.generateButtonStyles(spinResults);
    let touchableRects = this.generateTouchableRects();

    this.setState({ status: this.state.status, buttonStyles: buttonStyles, touchableRects: touchableRects });

  };

  generateButtonStyles = (results) => {
    let buttonStyle = {};

    for (let i = 0; i < this.state.status.length; i++) {
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

    for (let i = 0; i < this.state.status.length; i++) {
      for (let j = 0; j < results.nateNumbers.length; j++) {
        if (parseInt(results.nateNumbers[j].numberH) === i) {
          console.log(`results.nateNumbers: ${JSON.stringify(results.nateNumbers[j].numberH, null, 2)}`);
          buttonStyle[i].borderColor = "orange";
          // buttonStyle[i].boxShadow = "0 6px 6px -2px purple, 0 8px 8px -4px yellow";
          // Bottom right
          // buttonStyle[i].boxShadow = "2px 2px 2px blue, 5px 5px 5px orange";
          // top right
          buttonStyle[i].boxShadow = "2px -2px 2px blue, 5px -5px 5px orange";
          // Left top right
          // buttonStyle[i].boxShadow = "0px -2px 0px 2px blue, 0px -5px 0px 4px orange";
          // left right bottom
          // buttonStyle[i].boxShadow = "0px 2px 0px 2px blue, 0px 5px 0px 4px orange";
        }
      }
    }

    for (let i = 0; i < this.state.status.length; i++) {
      for (let j = 0; j < results.lucyLosers.length; j++) {

        if (parseInt(results.lucyLosers[j].numberH) === i) {
          console.log(`results.lucyLosers: ${JSON.stringify(results.lucyLosers[j].numberH, null, 2)}`);

          buttonStyle[i].borderColor = "blue";
          // top left
          // buttonStyle[i].boxShadow = "-2px -2px 2px pink, -5px -5px 5px blue";
          // bottom left
          buttonStyle[i].boxShadow = "-2px 2px 2px pink, -5px 5px 5px blue";
          // left top bottom
          // buttonStyle[i].boxShadow = "-2px 0px 0px 2px pink, -5px 0px 0px 4px blue";
          // top right bottom
          // buttonStyle[i].boxShadow = "2px 0px 0px 2px pink, 5px 0px 0px 4px blue";
        }
      }
    }

    return (buttonStyle);
  }

  render() {
    return (
      <Container fluid>
        <img src="../../../images/rouletteLayout.png" alt="Planets" useMap="#rouletteMap"></img>
        <map name="rouletteMap">
          {
            this.state.touchableRects.map(touchable =>
              (
                <Area key={touchable.id} coords={touchable.coordinates} numCoords={touchable.numCoordinates}></Area>
              )
          )}
        </map>
      </Container>
    );
  }
}

export default Board;
