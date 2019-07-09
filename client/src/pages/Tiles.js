import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

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
    tiles: [],
    currentTiles: [],
    highScore: 0,
    currentScore: 0
  };

  componentDidMount() {
    this.loadTiles();
  }

  loadTiles = () => {
    let tiles = [];
    this.state.currentScore = 0;
    this.state.currentTiles = [];
    this.state.tiles = [];

    for(let i = 0; i < 12; i++) {
      tiles.push({ id: i, title: `tile${i}`, clicked: false, image: defaultImages[i] });
    }

    this.setState({ tiles: tiles, currentTiles: tiles, currentScore: 0 });

    console.log(`this.state.tiles: ${JSON.stringify(this.state.tiles, null, 2)}`);
    console.log(`this.state.currentTiles: ${JSON.stringify(this.state.currentTiles, null, 2)}`);
  };

  clickTile = id => {
    console.log(`this.state.tiles: ${JSON.stringify(this.state.tiles, null, 2)}`)
    for(let i = 0; i < this.state.tiles.length; i++ ) {
      if(this.state.tiles[i].image == this.state.currentTiles[id].image) {
        console.log(`this.state.tiles[i].image: ${this.state.tiles[i].image}`);
        console.log(`this.state.currentTiles[id].image: ${this.state.currentTiles[id].image}`);
        if(this.state.tiles[i].clicked === false) {
          this.state.tiles[i].clicked = true;
          this.state.currentScore++;
    
          if(this.state.currentScore > this.state.highScore) {
            this.state.highScore = this.state.currentScore;
          }
    
          this.shuffleTiles();
          break;
        } else {
          this.loadTiles();
          break;
        }    
      }
    }
  };

  shuffleTiles = () => {
    let evalGameTiles = JSON.parse(JSON.stringify(defaultImages));
    this.state.currentTiles = []
    let loopCount = evalGameTiles.length;

    for(let i = 0; i < loopCount; i++) {
      let randNum = Math.floor((Math.random() * evalGameTiles.length));
      let tile = evalGameTiles.splice(randNum, 1);
      this.state.currentTiles.push({ id: i, title: `tile${i}`, image: tile });
    }
    this.setState(this.state);

    console.log(JSON.stringify(this.state.currentTiles, null, 2));
  }

  render() {
    return (
      <Container fluid>
        <h1>Current Score: {this.state.currentScore}</h1>
        <h1>High Score: {this.state.highScore}</h1>
        { this.state.currentTiles.length ? (
          <Row>
            {this.state.currentTiles.map(tile => 
              (
                <Col size="md-3 sm-3" float="left" key={tile.id}>
                  <img style={{width : "100px", height: "100px", margin: "5px 5px 5px 5px"}} onClick={() => this.clickTile(tile.id)} src={tile.image} ></img>
                </Col>
              )
            )}
          </Row>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </Container>
    );
  }
}

export default Tiles;
