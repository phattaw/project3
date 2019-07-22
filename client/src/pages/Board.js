import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import { TableRow, FinalTableRow } from "../components/TableRow";
import { ZerosRow } from "../components/ZerosRow";

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

    for(let i = 0; i < 12; i++) {
      rows.push({ id: i*3, clickTile: this.clickTile });
    }

    for(let i = 0; i < 200; i++) {
      status.push({ clicked: false });
    }

    this.setState({ currentTiles: rows, status: status });
  };

  clickTile = id => {
    this.state.status[id - 1].clicked = !this.state.status[id - 1].clicked;
  };

  render() {
    return (
      <Container fluid  >
        <div style={{ lineHeight: "2.5" }} >
        <ZerosRow key={0} clickTile={this.clickTile} tileId={36}></ZerosRow>
        {this.state.currentTiles.map(tile => 
          (
          <TableRow key={tile.id} clickTile={tile.clickTile} tileId={tile.id}></TableRow>
          )
        )}
        <FinalTableRow clickTile={this.clickTile} tileId={38}></FinalTableRow>
        </div>
      </Container>
    );
  }
}

export default Tiles;
