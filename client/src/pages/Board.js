import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import { TableRow, FinalTableRow } from "../components/TableRow";
import { ZerosRow } from "../components/ZerosRow";

const defaultImages = [
  "../../images/lightning.jpg",
  "../../images/dirtsquare.jpg",
  "../../images/redPanda.jpg",
  "../../images/redFox.jpg",
  "../../images/waryDog.jpg",
  "../../images/stitch.jpg",
  "../../images/rastaHomer.png",
  "../../images/sadSpongeBob.jpg",
  "../../images/falloutBoy.png",
  "../../images/heart.png",
  "../../images/fedex.jpg",
  "../../images/oxford.jpg"  
]

class Tiles extends Component {
  state = {
    currentTiles: []
  };

  componentDidMount() {
    this.loadTiles();
  }

  loadTiles = () => {
    let rows = [];
    let status = [];

    // this.state.initInfo = [];
    // this.state.currentTiles = [];

    for(let i = 0; i < 12; i++) {
      rows.push({ id: i*3, image: "defaultImages[i]", clickTile: this.clickTile });
    }

    for(let i = 0; i < 200; i++) {
      status.push({ clicked: false });
    }

    // this.setState({ initInfo: rows, currentTiles: currentTiles });
    this.setState({ currentTiles: rows, status: status });
  };

  clickTile = id => {
    this.state.status[id - 1].clicked = !this.state.status[id - 1].clicked;
  };

  render() {
    return (
      <Container fluid>
        <ZerosRow key={0} clickTile={this.clickTile} tileId={36}></ZerosRow>
        {this.state.currentTiles.map(tile => 
          (
          <TableRow key={tile.id} clickTile={tile.clickTile} tileId={tile.id}></TableRow>
          )
        )}
        <FinalTableRow tileId={38}></FinalTableRow>
      </Container>
    );
  }
}

export default Tiles;
