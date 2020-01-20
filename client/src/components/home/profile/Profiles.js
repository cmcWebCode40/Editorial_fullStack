import React from "react";
import {
     Card,
     CardImg,
     CardText,
     CardBody,
     CardTitle,
     CardSubtitle,
     Button
} from "reactstrap";
import image from "./slide3.jpg";


const Profiles = props => {
     return (
          <div className={"profile"}>
               <div className={"clip-path"}></div>
               <div className={"profile-info"}>
                    <h2 className={"primary mx-auto"}>Our Leaders</h2>
                    <div className={"event-grid"}>
                         <div className={"card m-5"}>
                              <div className={"card__body  p-2"}>
                                   <div className={"card__body-img "}>
                                        <img
                                             className={"img-rounded"}
                                             src={image}
                                             alt=""
                                        />
                                   </div>
                              </div>
                              <div className={"card__body-title"}>
                                   <h3>Mr Atere I.O</h3>
                              </div>
                              <div className={"card__body-text mt-1 p-3"}>
                                   <p>
                                        <strong>
                                             Saki-West Local government
                                             Inspector
                                             <br />
                                             (LGI)
                                        </strong>
                                   </p>
                              </div>

                              <div className={"card__body-footer"}>
                                   <p>
                                        <a href="/">
                                             <i
                                                  className={
                                                       "fab fa-facebook-f 2x"
                                                  }
                                             ></i>
                                        </a>
                                        <a href="#">
                                             <i
                                                  className={
                                                       "fab fa-twitter 2x"
                                                  }
                                             ></i>
                                        </a>
                                        <a href="/">
                                             <i
                                                  className={
                                                       "fab fa-instagram 2x"
                                                  }
                                             ></i>
                                        </a>
                                   </p>
                              </div>
                         </div>
                         <div className={"card m-5 "}>
                              <div className={"card__body  p-2"}>
                                   <div className={"card__body-img "}>
                                        <img
                                             className={"img-rounded"}
                                             src={image}
                                             alt=""
                                        />
                                   </div>
                              </div>
                              <div className={"card__body-title"}>
                                   <h3>Mr Atere I.O</h3>
                              </div>
                              <div className={"card__body-text mt-1 p-3"}>
                                   <p>
                                        <strong>
                                             Saki-West Local government
                                             Inspector
                                             <br />
                                             (LGI)
                                        </strong>
                                   </p>
                              </div>

                              <div className={"card__body-footer"}>
                                   <p>
                                        <a href="/">
                                             <i
                                                  className={
                                                       "fab fa-facebook-f 2x"
                                                  }
                                             ></i>
                                        </a>
                                        <a href="#">
                                             <i
                                                  className={
                                                       "fab fa-twitter 2x"
                                                  }
                                             ></i>
                                        </a>
                                        <a href="/">
                                             <i
                                                  className={
                                                       "fab fa-instagram 2x"
                                                  }
                                             ></i>
                                        </a>
                                   </p>
                              </div>
                         </div>
                         <div className={"card m-5 "}>
                              <div className={"card__body  p-2"}>
                                   <div className={"card__body-img "}>
                                        <img
                                             className={"img-rounded"}
                                             src={image}
                                             alt=""
                                        />
                                   </div>
                              </div>
                              <div className={"card__body-title"}>
                                   <h3>Mr Atere I.O</h3>
                              </div>
                              <div className={"card__body-text mt-1 p-3"}>
                                   <p>
                                        <strong>
                                             Saki-West Local government
                                             Inspector
                                             <br />
                                             (LGI)
                                        </strong>
                                   </p>
                              </div>

                              <div className={"card__body-footer"}>
                                   <p>
                                        <a href="/">
                                             <i
                                                  className={
                                                       "fab fa-facebook-f 2x"
                                                  }
                                             ></i>
                                        </a>
                                        <a href="#">
                                             <i
                                                  className={
                                                       "fab fa-twitter 2x"
                                                  }
                                             ></i>
                                        </a>
                                        <a href="/">
                                             <i
                                                  className={
                                                       "fab fa-instagram 2x"
                                                  }
                                             ></i>
                                        </a>
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Profiles;
