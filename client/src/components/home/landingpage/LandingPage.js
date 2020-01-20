import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import slideOne from '../../../images/slide1.jpg;
// import slideTwo from '../../../images/slide2.jpg
// import slideThree from '../../../images/slide3.jpg'

const LandingPage = props => {
     return (
          <section className={"section-a"}>
               <div className={"page "}>
                    <h1 className={"mb-3"}>
                         Welcome To Editoral And Publicity
                         <br /> CDS Group Saki-West Zone
                    </h1>
                    <div className={"pb-5"}>
                         <div className={"search-btn"}>
                              <input
                                   type="text"
                                   placeholder="Seacrh your favorite news here..."
                              />
                              <FontAwesomeIcon
                                   style={{ marginRight: "1rem" ,marginTop: ".4rem"}}
                                   icon="search"
                                   size="2x"
                                   color="#008736"
                              />
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default LandingPage;
