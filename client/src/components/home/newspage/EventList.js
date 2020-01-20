import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, 
} from 'reactstrap';



const EventList = ({title, text,image}) => {

     return (
          <div className="my-3 mx-5">
               <Card>
                    <CardImg top width="100%" src={image} alt="Card image cap" />
                    <CardBody className="">
                         <CardTitle><h2> {title}</h2></CardTitle>
                         <CardSubtitle className="my-3">Card subtitle</CardSubtitle>
                         <CardText className="">{text}.... </CardText>
                    </CardBody>
               </Card>
          </div>
     )
}


export default EventList;
