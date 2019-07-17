import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { H1 } from "../../components/H1";

//export function H1({ tileId, passedOnClick, children }) {
export function TableRow( props ) {
    return (
    <Row justifyContentCenter>
        <Col size="md-2 sm-2" float="left" key={props.tileId}>
          <H1 passedOnClick={props.clickTile} tileId={props.tileId + 1} >{props.tileId + 1}</H1>
        </Col>
        <Col size="md-2 sm-2" float="left" key={props.tileId + 1}>
          <H1 passedOnClick={props.clickTile} tileId={props.tileId + 2} >{props.tileId + 2}</H1>
        </Col>
        <Col size="md-2 sm-2" float="left" key={props.tileId + 2}>
          <H1 passedOnClick={props.clickTile} tileId={props.tileId + 3} >{props.tileId + 3}</H1>
        </Col>
    </Row>
    );
}
