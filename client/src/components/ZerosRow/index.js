import React from "react";
import { Col, Row } from "../../components/Grid";
import { H1G } from "../../components/H1";

export function ZerosRow( props ) {
    return (
    <Row justifyContentCenter>
        <Col size="md-2 sm-2" float="left" key={props.tileId + 4}></Col>
        <Col size="md-2 sm-2" float="left" key={props.tileId + 5}></Col>

        <Col size="md-1 sm-1" float="left" key={props.tileId}></Col>
        <Col size="md-2 sm-2" float="left" key={props.tileId + 1}>
          <H1G buttonStyle={props.buttonStyle} passedOnClick={props.clickTile} tileId={props.tileId + 1} style={""} >0</H1G>
        </Col>
        <Col size="md-2 sm-2" float="left" key={props.tileId + 2}>
          <H1G buttonStyle={props.buttonStyle} passedOnClick={props.clickTile} tileId={props.tileId + 2} >00</H1G>
        </Col>
        <Col size="md-1 sm-1" float="left" key={props.tileId + 3}></Col>
    </Row>
    );
}
