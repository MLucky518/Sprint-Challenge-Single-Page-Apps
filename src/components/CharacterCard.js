import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from "react-router-dom";
import {characterPics} from "../data";


 function CharacterCard(props) {
   console.log(props.id);
  return( <div className = "charCard">
    
            <Card>

              <CardBody>
                <img  src={characterPics[props.id]} alt="Card image cap"></img>
                <CardTitle>{props.name}</CardTitle>
                <CardSubtitle>{props.species}</CardSubtitle>
                <CardSubtitle>{props.gender}</CardSubtitle>
                <CardSubtitle><span>{props.status}</span></CardSubtitle>
                <br/>
                
              </CardBody>

            </Card>


          </div>
  );
}


export default CharacterCard;
