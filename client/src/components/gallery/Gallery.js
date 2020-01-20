import React, { useState } from "react";

const Gallery = () => {
     const [eventPictures, setEventPictures] = useState([
          {
               id: 1,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the countryfor which the countryfor which the country "
          },
          {
               id: 2,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the countryfor which the countryfor which the country "
          },

          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the countryfor which the countryfor which the country "
          }
     ]);
     const [pastLeaders, setPastleaders] = useState([
          {
               id: 1,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the countryfor which the countryfor which the country "
          },
          {
               id: 2,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the countryfor which the countryfor which the country "
          },

          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the countryfor which the countryfor which the country "
          }
     ]);

     return (
          <div className="gallery-container">
               <div className="gallery">
                    <h1 className="primary mb-5 mt-3 text-center">Gallery</h1>
                    <div className="box">
                         <div className="events-pictures p-3 mt-2 mx-auto">
                              <h3>All Events</h3>
                              <div className="flex-pics">
                                   {eventPictures.length ? (
                                        eventPictures.map(event => (
                                             <div
                                                  className="event-box m-2 "
                                                  key={event.id}
                                             >
                                                  <div className="picture">
                                                       {event.text}
                                                  </div>
                                                  <div className="title">
                                                       <span>
                                                            {event.title}
                                                       </span>
                                                  </div>
                                             </div>
                                        ))
                                   ) : (
                                        <p> Oops no Gallery </p>
                                   )}
                              </div>
                         </div>
                         <div className="events-pictures p-3 mt-2 mx-auto">
                              <h3>Past Leaders</h3>
                              <div className="flex-pics">
                                   {pastLeaders.length ? (
                                        pastLeaders.map(past => (
                                             <div
                                                  className="event-box m-2 p-1"
                                                  key={past.id}
                                             >
                                                  <div className="picture">
                                                       {past.text}
                                                  </div>
                                                  <div className="title">
                                                       <span>{past.title}</span>
                                                  </div>
                                             </div>
                                        ))
                                   ) : (
                                        <p> Oops no Past Leader </p>
                                   )}
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Gallery;
