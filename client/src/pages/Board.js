import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import { TableRow, FinalTableRow } from "../components/TableRow";
import { ZerosRow } from "../components/ZerosRow";
import { conglomerate } from "../rollsGenerator1";
import Area from "../components/Area";

let splitIndexes = {};
let cornerIndexes = {};

function generateCornerIndexes() {
  let startIndex = 107;
  for(let j = 3; j > 1; j--) {
    for(let i = 1; i < 12; i++) {
      let firstNum = (j + (3 * (i - 1)));
      let secondNum = firstNum + 3;
      let thirdNum = firstNum - 1;
      let fourthNum = secondNum - 1;
  
      cornerIndexes["corner" + thirdNum + firstNum + fourthNum + secondNum] = startIndex++;
    }
  }
}

generateCornerIndexes();

function generateSplitIndexes() {
  let startIndex = 50;
  for(let j = 3; j > 0; j--) {
    for(let i = 1; i < 12; i++) {
      let firstNum = (j + (3 * (i-1)));
      let secondNum = firstNum + 3;
  
      splitIndexes["split" + firstNum + secondNum] = startIndex++;
    }
  }
  
  for(let j = 3; j > 1; j--) {
    for(let i = 1; i < 13; i++) {
      let firstNum = (j + (3 * (i-1)));
      let secondNum = firstNum - 1;
  
      splitIndexes["split" + secondNum + firstNum] = startIndex++;
    }
  }
}

generateSplitIndexes();

class Board extends Component {
  state = {
    currentTiles: [],
    buttonStyles: {},
    touchableRects: [],
    status: []
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
    let status = [];

    // All numbers
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
        status.push({ clicked: false });
      }
    }

    // Zero
    let zeroCoordinates = ""
    zeroCoordinates = "75,180,100,320";;
    id++;
    let zeroCoordinate = {
      coordinates: zeroCoordinates,
      numCoordinates: { left: 75, top: 230, right: 100, bottom: 320 },
      id: id,
      type: "zero"
    }

    touchableRects.push(zeroCoordinate);
    status.push({ clicked: false });

    // Double Zero
    let doubleZeroCoordinates = ""
    // doubleZeroCoordinates = "75,180,100,320";
    doubleZeroCoordinates = "50,50,100,160";
    id++;
    let doubleZeroCoordinate = {
      coordinates: doubleZeroCoordinates,
      numCoordinates: { left: 75, top: 180, right: 100, bottom: 320 },
      id: id,
      type: "double zero"
    }

    touchableRects.push(doubleZeroCoordinate);
    status.push({ clicked: false });
    
    // Column bets (end of number row)
    for(let j = 0; j < 3; j++) {
      let coordinates = ""
      coordinates = (left + 80 * 12) + "," + (top + j * 115) + "," + (right + 80 * 12) + "," + (bottom + j * 115);
      id++;
      let coordinate = {
        coordinates: coordinates,
        numCoordinates: { left: left + 15 + 81 * 12, top: top + 58 + j * 115, right: right +15 + 81 * 12, bottom: bottom + 58 + j * 115 },
        id: id,
        type: "columnBet"
      }
      touchableRects.push(coordinate);
      status.push({ clicked: false });
    }

    // 1/3rd bets
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
      status.push({ clicked: false });
    }

    // 50/50 bets
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
      status.push({ clicked: false });
    }

    // Left/Right Split locations
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
        status.push({ clicked: false });
      }
    }

    // // Zero
    // let zeroCoordinates = ""
    // zeroCoordinates = "50,50,100,320";
    // id++;
    // let zeroCoordinate = {
    //   coordinates: zeroCoordinates,
    //   numCoordinates: { left: 50, top: 50, right: 100, bottom: 320 },
    //   id: id,
    //   type: "zero"
    // }

    // Top/Bottom Split locations 125 to 210
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
        status.push({ clicked: false });
      }
    }

    // // Top/Bottom Split locations 125 to 210
    // for(let j = 0; j < 2; j++) {
    //   for(let i = 0; i < 11; i++) {
    //     let splitCoordinates = (150 + 85 * i) + "," + (110 + 105*j) + "," + (185 + 85 * i) + "," + (130 + 105*j);
    //     id++;
    //     let splitCoordinate = {
    //       coordinates: splitCoordinates,
    //       numCoordinates: { left: 150 + 85 * i, top: 110 + 105*j, right: 185 + 85 * i, bottom: 130 + 105*j },
    //       id: id,
    //       type: "split"
    //     }

    //     touchableRects.push(splitCoordinate);      
    //     status.push({ clicked: false });    
    //   }
    // }
    
    // Square bet locations
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
        status.push({ clicked: false });
      }
    }
    this.setState({ status: status, touchableRects: touchableRects });

    return(touchableRects);
  }

  loadTiles = () => {
    let spinResults = conglomerate();
    let touchableRects = this.generateTouchableRects();
    let buttonStyles = this.generateButtonStyles(spinResults);
    
    this.setState({ buttonStyles: buttonStyles, touchableRects: touchableRects });
  };

  clickTile = id => {
    console.log(`id: ${id - 1}`);

    this.state.status[id - 1].clicked = !this.state.status[id - 1].clicked;

    let spinResults = conglomerate();
    let buttonStyles = this.generateButtonStyles(spinResults);
    let touchableRects = this.generateTouchableRects();

    this.setState({ status: this.state.status, buttonStyles: buttonStyles, touchableRects: touchableRects });

  };

  generateButtonStyles = (results) => {
    let buttonStyle = {};

    for (let i = 0; i < this.state.status.length; i++) {
      buttonStyle[i] = { chipColor: "../../../images/torquoisePokerChip.png", visible: false };
    }

    for (let i = 0; i < this.state.status.length; i++) {
      for (let j = 0; j < results.fiveBestNumbers.length; j++) {
        if (parseInt(results.fiveBestNumbers[j].numberH) === i) {
          buttonStyle[i].chipColor = "../../../images/orangePokerChip.png";
          buttonStyle[i].visible = true;
        }
      }
    }

    for (let i = 0; i < this.state.status.length; i++) {
      for (let j = 0; j < results.fiveWorstNumbers.length; j++) {

        if (parseInt(results.fiveWorstNumbers[j].numberH) === i) {
          buttonStyle[i].chipColor = "../../../images/pokerChip.png";
          buttonStyle[i].visible = true;
        }
      }
    }

    const RED_INDEX = 46;
    const BLACK_INDEX = 47;
    if(buttonStyle[RED_INDEX] && results.redBlackWinsArray[0].hits > 50 && ( results.redBlackWinsArray[0].hits > (results.redBlackWinsArray[1].hits + 5 ) ) ) {
      buttonStyle[RED_INDEX].visible = true;
      buttonStyle[RED_INDEX].chipColor = "../../../images/redPokerChip.png";

      buttonStyle[BLACK_INDEX].visible = true;
      buttonStyle[BLACK_INDEX].chipColor = "../../../images/purplePokerChip.png";
    } else if(buttonStyle[RED_INDEX] && results.redBlackWinsArray[1].hits > 50 && ( results.redBlackWinsArray[1].hits > (results.redBlackWinsArray[0].hits + 5 ) ) ){
      buttonStyle[BLACK_INDEX].visible = true;
      buttonStyle[BLACK_INDEX].chipColor = "../../../images/redPokerChip.png";

      buttonStyle[RED_INDEX].visible = true;
      buttonStyle[RED_INDEX].chipColor = "../../../images/purplePokerChip.png";

    }

    const EVEN_INDEX = 45;
    const ODD_INDEX = 48;
    if(buttonStyle[EVEN_INDEX] && results.oddEvenWinsArray[1].hits > 50 && ( results.oddEvenWinsArray[1].hits > (results.oddEvenWinsArray[0].hits + 5 ) ) ) {
      buttonStyle[EVEN_INDEX].visible = true;
      buttonStyle[EVEN_INDEX].chipColor = "../../../images/redPokerChip.png";

      buttonStyle[ODD_INDEX].visible = true;
      buttonStyle[ODD_INDEX].chipColor = "../../../images/purplePokerChip.png";
    } else if(buttonStyle[RED_INDEX] && results.oddEvenWinsArray[0].hits > 50 && ( results.oddEvenWinsArray[0].hits > (results.oddEvenWinsArray[1].hits + 5 ) ) ){
      buttonStyle[ODD_INDEX].visible = true;
      buttonStyle[ODD_INDEX].chipColor = "../../../images/redPokerChip.png";

      buttonStyle[EVEN_INDEX].visible = true;
      buttonStyle[EVEN_INDEX].chipColor = "../../../images/purplePokerChip.png";
    }

    for(let i = 0; i < 3; i++) {
      let splitIndex = splitIndexes[results.splitWinsArray[i].name];
      // console.log(`name: ${results.splitWinsArray[i].name} num: ${results.splitWinsArray[i].nums}`)

      // console.log(`winners splitIndex: ${splitIndex}`)
      // console.log(`winners: ${results.splitWinsArray[i].name}`)

      if(buttonStyle[splitIndex]) {
        buttonStyle[splitIndex].visible = true;
        buttonStyle[splitIndex].chipColor = "../../../images/redPokerChip.png";  
      }
    }

    // console.log(`length: ${results.splitWinsArray.length}`);
    for(let i = results.splitWinsArray.length - 1; i > results.splitWinsArray.length - 4; i--) {
      let splitIndex = splitIndexes[results.splitWinsArray[i].name];
      // console.log(`losers splitIndex: ${splitIndex}`)
      // console.log(`losers: ${results.splitWinsArray[i].name}`)

      if(buttonStyle[splitIndex]) {
        buttonStyle[splitIndex].visible = true;
        buttonStyle[splitIndex].chipColor = "../../../images/purplePokerChip.png";  
      }
    }

    for(let i = 0; i < 3; i++) {
      let splitIndex = cornerIndexes[results.cornerWinsArray[i].name];
      console.log(`winner: ${results.cornerWinsArray[i].name} num: ${results.cornerWinsArray[i].nums}`)

      // console.log(`winners splitIndex: ${splitIndex}`)
      // console.log(`winners: ${results.splitWinsArray[i].name}`)

      if(buttonStyle[splitIndex]) {
        buttonStyle[splitIndex].visible = true;
        buttonStyle[splitIndex].chipColor = "../../../images/redPokerChip.png";  
      }
    }

    // console.log(`length: ${results.splitWinsArray.length}`);
    for(let i = results.cornerWinsArray.length - 1; i > results.cornerWinsArray.length - 4; i--) {
      let splitIndex = cornerIndexes[results.cornerWinsArray[i].name];
      // console.log(`losers splitIndex: ${splitIndex}`)
      console.log(`losers: ${results.cornerWinsArray[i].name}`)

      if(buttonStyle[splitIndex]) {
        buttonStyle[splitIndex].visible = true;
        buttonStyle[splitIndex].chipColor = "../../../images/purplePokerChip.png";  
      }
    }
    
 

    // console.log(`splitWinsArray: ${JSON.stringify(results.splitWinsArray, null, 2)}`);
    return (buttonStyle);
  }

  render() {
    // console.log(`this.state.status[touchable.id].clicked: ${this.state.status}`);

    if(this.state.status.length > 0) {
      return (
        <Container fluid>
          <img src="../../../images/rouletteLayout2.png" width="1200px" height="576px" alt="Planets" useMap="#rouletteMap"></img>
          <map name="rouletteMap">
            {
              this.state.touchableRects.map(touchable =>
                (
                  <Area visible={this.state.status[touchable.id - 1].clicked} 
                        key={touchable.id} 
                        chipVisible={false} 
                        id={touchable.id} 
                        coords={touchable.coordinates} 
                        numCoords={touchable.numCoordinates} 
                        passedOnClick={this.clickTile}
                        buttonStyle={this.state.buttonStyles} 
                        >
                  </Area>
                )
            )}
          </map>
        </Container>
      );  
    } else {
      return (
        <Container fluid>

        </Container>
      );
    }
  }
}

export default Board;
