import React from "react";
import image from "../images/errorpage.svg";

const ErrorPage = props => {
     return (
          <div className="error">
               <div className="error-page container">
                    <main>
                         <div>
                              <a href="/" className="btn-primary btn mt-5">
                                   Go back to Home
                              </a>
                              <img
                                   src={image}
                                   className="img-fluid"
                                   alt=""
                                   height="500"
                                   width="350"
                              />
                              <h2 className="primary text-center">
                                   Oops page not found
                              </h2>
                         </div>
                    </main>
               </div>
          </div>
     );
};

export default ErrorPage;
