import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { H1 } from "../components/H1";
import { TableRow } from "../components/TableRow";

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
    this.state.currentTiles = [];

    for(let i = 0; i < 12; i++) {
      rows.push({ id: i*3, clicked: false, image: "defaultImages[i]", clickTile: this.clickTile });
    }

    this.setState({ currentTiles: rows });
  };

  clickTile = id => {
    console.log(`clickTile currentTile: ${id}`)

    this.state.currentTiles[id].hilited = !this.state.currentTiles[id].hilited;

    console.log(`hilited: ${this.state.currentTiles[id].hilited}`);

  };

  render() {
    return (
      <Container fluid>
        {this.state.currentTiles.map(tile => 
          (
          <TableRow key={tile.id} clickTile={tile.clickTile} tileId={tile.id}></TableRow>
          )
        )}

      </Container>
    );
  }
}

export default Tiles;
