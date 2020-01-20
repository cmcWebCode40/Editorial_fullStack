import React,{useState} from 'react';
import EventList from './EventList';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';


const Events = props => {
     const [newsItem, setNewsItem] = useState([
         { 
          id: 1,
          title : " News update",
          text: "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international non-governmental organisation. The bill, which focuses on effective management solutions for overfishing, passed its first assessment by the",
          img: "https://source.unsplash.com/user/erondu/1600x900"
          },
         { 
                    id: 2,
          title : " News update",
          text: "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international non-governmental organisation. The bill, which focuses on effective management solutions for overfishing, passed its first assessment by the",
          img: "https://source.unsplash.com/user/erondu/1600x900"
          },

         { 
                    id: 3,
          title : " News update",
          text: "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international non-governmental organisation. The bill, which focuses on effective management solutions for overfishing, passed its first assessment by the",
          img: "https://source.unsplash.com/user/erondu/1600x900"
          }
     ]);



     return (
          <div>
                <div className="event-title" >
                    <div>
                         <span/><h3>EVENTS</h3><span/>
                    </div>
                </div> 
               <div className="container mx-auto event-grid">
                        
                    {
                         newsItem.map( news => (
                         <EventList key={news.id} title={news.title} image={news.img} text={news.text}/>
                         ))
                    }
               </div>
          </div>
     )
}


export default Events
