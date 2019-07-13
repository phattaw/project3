import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { H1 } from "../components/H1";

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
    let tiles = [];
    this.state.currentTiles = [];

    for(let i = 1; i < 37; i++) {
      tiles.push({ id: i, title: `tile${i}`, clicked: false, image: "defaultImages[i]", clickTile: this.clickTile });
    }

    this.setState({ currentTiles: tiles });
  };

  clickTile = id => {
    console.log(`clickTile currentTile: ${id}`)

    this.state.currentTiles[id].hilited = !this.state.currentTiles[id].hilited;

    console.log(`hilited: ${this.state.currentTiles[id].hilited}`);

  };

  render() {
    return (
      <Container fluid>
        <Row justifyContentCenter>
          {this.state.currentTiles.slice(0, 3).map(tile => 
            (
              <Col size="md-2 sm-2" float="left" key={tile.id}>
                <H1 passedOnClick={tile.clickTile} tileId={tile.id} >{tile.id}</H1>
              </Col>
            )
          )}
        </Row>
        <Row justifyContentCenter>
          {this.state.currentTiles.slice(3, 6).map(tile => 
            (
              <Col size="md-2 sm-2" float="left" key={tile.id}>
                <H1 passedOnClick={tile.clickTile} tileId={tile.id} >{tile.id}</H1>
              </Col>
            )
          )}
        </Row>
        <Row justifyContentCenter>
          {this.state.currentTiles.slice(6, 9).map(tile => 
            (
              <Col size="md-2 sm-2" float="left" key={tile.id}>
                <H1 passedOnClick={tile.clickTile} tileId={tile.id} >{tile.id}</H1>
              </Col>
            )
          )}
        </Row>
        <Row justifyContentCenter>
          {this.state.currentTiles.slice(9, 12).map(tile => 
            (
              <Col size="md-2 sm-2" float="left" key={tile.id}>
                <H1 passedOnClick={tile.clickTile} tileId={tile.id} >{tile.id}</H1>
              </Col>
            )
          )}
        </Row>
        <Row justifyContentCenter>
          {this.state.currentTiles.slice(12, 15).map(tile => 
            (
              <Col size="md-2 sm-2" float="left" key={tile.id}>
                <H1 passedOnClick={tile.clickTile} tileId={tile.id} >{tile.id}</H1>
              </Col>
            )
          )}
        </Row>
        <Row justifyContentCenter>
          {this.state.currentTiles.slice(15, 18).map(tile => 
            (
              <Col size="md-2 sm-2" float="left" key={tile.id}>
                <H1 passedOnClick={tile.clickTile} tileId={tile.id} >{tile.id}</H1>
              </Col>
            )
          )}
        </Row>
        <Row justifyContentCenter>
          {this.state.currentTiles.slice(18, 21).map(tile => 
            (
              <Col size="md-2 sm-2" float="left" key={tile.id}>
                <H1 passedOnClick={tile.clickTile} tileId={tile.id} >{tile.id}</H1>
              </Col>
            )
          )}
        </Row>
        <Row justifyContentCenter>
          {this.state.currentTiles.slice(21, 24).map(tile => 
            (
              <Col size="md-2 sm-2" float="left" key={tile.id}>
                <H1 passedOnClick={tile.clickTile} tileId={tile.id} >{tile.id}</H1>
              </Col>
            )
          )}
        </Row>
        <Row justifyContentCenter>
          {this.state.currentTiles.slice(24, 27).map(tile => 
            (
              <Col size="md-2 sm-2" float="left" key={tile.id}>
                <H1 passedOnClick={tile.clickTile} tileId={tile.id} >{tile.id}</H1>
              </Col>
            )
          )}
        </Row>
        <Row justifyContentCenter>
          {this.state.currentTiles.slice(27, 30).map(tile => 
            (
              <Col size="md-2 sm-2" float="left" key={tile.id}>
                <H1 passedOnClick={tile.clickTile} tileId={tile.id} >{tile.id}</H1>
              </Col>
            )
          )}
        </Row>
        <Row justifyContentCenter>
          {this.state.currentTiles.slice(30, 33).map(tile => 
            (
              <Col size="md-2 sm-2" float="left" key={tile.id}>
                <H1 passedOnClick={tile.clickTile} tileId={tile.id} >{tile.id}</H1>
              </Col>
            )
          )}
        </Row>
        <Row justifyContentCenter>
          {this.state.currentTiles.slice(33, 36).map(tile => 
            (
              <Col size="md-2 sm-2" float="left" key={tile.id}>
                <H1 passedOnClick={tile.clickTile} tileId={tile.id} >{tile.id}</H1>
              </Col>
            )
          )}
        </Row>

      </Container>
    );
  }
}

export default Tiles;
