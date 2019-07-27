import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { H1, H1G } from "../../components/H1";

function FiftyfiftyBets( props ) {
  switch(props.tileId) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return(
        <Col border="white" size="md-2 sm-2" float="left" key={props.tileId + 54}>
          <H1G buttonStyle={props.buttonStyle} passedOnClick={props.clickTile} tileId={41} >1 to 18</H1G>
        </Col>
        );
    case 6:
    case 7:
    case 8:        
    case 9:
    case 10:
    case 11:
      return(
        <Col border="white" size="md-2 sm-2" float="left" key={props.tileId + 55}>
          <H1G buttonStyle={props.buttonStyle}  passedOnClick={props.clickTile} tileId={42} >Even</H1G>
        </Col>
        );
    case 12:
    case 13:
    case 14:  
    case 15:
    case 16:
    case 17:  
      return(
        <Col border="white" size="md-2 sm-2" float="left" key={props.tileId + 56}>
          <H1G buttonStyle={props.buttonStyle}  passedOnClick={props.clickTile} tileId={43} >Red</H1G>
        </Col>
      );
    case 18:
    case 19:
    case 20:  
    case 21:
    case 22:
    case 23:  
      return(
        <Col border="white" size="md-2 sm-2" float="left" key={props.tileId + 57}>
          <H1G buttonStyle={props.buttonStyle}  passedOnClick={props.clickTile} tileId={44} >Black</H1G>
        </Col>
      );
    case 24:
    case 25:
    case 26:  
    case 27:
    case 28:
    case 29:  
      return(
          <Col border="white" size="md-2 sm-2" float="left" key={props.tileId + 58}>
            <H1G buttonStyle={props.buttonStyle}  passedOnClick={props.clickTile} tileId={45} >Odd</H1G>
          </Col>
        );
    default:
      return(
        <Col border="white" size="md-2 sm-2" float="left" key={props.tileId + 59}>
          <H1G buttonStyle={props.buttonStyle}  passedOnClick={props.clickTile} tileId={46} >19 to 36</H1G>
        </Col>
        );
  }
}

//export function H1({ tileId, passedOnClick, children }) {
export function TableRow( props ) {
  let text = "1 in 12";
  let twelveId = props.tileId;

  if(props.tileId < 12) {
    text = "1st 12";
    twelveId = 46;
  } else if(props.tileId < 24) {
    text = "2nd 12";
    twelveId = 47;
  } else {
    text = "3rd 12";
    twelveId = 48;
  }

  return (
    <Row justifyContentCenter className="row-no-gutters">
        <FiftyfiftyBets buttonStyle={props.buttonStyle} clickTile={props.clickTile} tileId={props.tileId} />
        <Col border="white" size="md-2 sm-2" float="left" key={props.tileId + 60}>
          <H1G buttonStyle={props.buttonStyle} passedOnClick={props.clickTile} tileId={twelveId} >{text}</H1G>
        </Col>
        <Col size="md-2 sm-2" float="left" key={props.tileId}>
          <H1 buttonStyle={props.buttonStyle} passedOnClick={props.clickTile} tileId={props.tileId + 1} >{props.tileId + 1}</H1>
        </Col>
        <Col size="md-2 sm-2" float="left" key={props.tileId + 1}>
          <H1 buttonStyle={props.buttonStyle} passedOnClick={props.clickTile} tileId={props.tileId + 2} >{props.tileId + 2}</H1>
        </Col>
        <Col size="md-2 sm-2" float="left" key={props.tileId + 2}>
          <H1 buttonStyle={props.buttonStyle} passedOnClick={props.clickTile} tileId={props.tileId + 3} >{props.tileId + 3}</H1>
        </Col>        
    </Row>
    );
}

export function FinalTableRow( props ) {
  return (
  <Row justifyContentCenter className="row-no-gutters">
      <Col size="md-2 sm-2" float="left" key={props.tileId + 61}></Col>
      <Col size="md-2 sm-2" float="left" key={props.tileId + 62}></Col>
      <Col size="md-2 sm-2" float="left" key={props.tileId}>
        <H1G buttonStyle={props.buttonStyle} passedOnClick={props.clickTile} tileId={props.tileId + 1} >2 to 1</H1G>
      </Col>
      <Col size="md-2 sm-2" float="left" key={props.tileId + 1}>
        <H1G buttonStyle={props.buttonStyle} passedOnClick={props.clickTile} tileId={props.tileId + 2} >2 to 1</H1G>
      </Col>
      <Col size="md-2 sm-2" float="left" key={props.tileId + 2}>
        <H1G buttonStyle={props.buttonStyle} passedOnClick={props.clickTile} tileId={props.tileId + 3} >2 to 1</H1G>
      </Col>
  </Row>
  );
}
