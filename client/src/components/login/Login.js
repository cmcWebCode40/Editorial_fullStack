import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Cookie from "js-cookie";

// NOTE:
// 1. FOR THE LOGIN, USE THE DEFAULT adminPassword AND adminStateCode FROM THE config.js
// 2. When the login button is clicked  a 'res.headers["x-auth-token"]' response containing a token will be sent to you,
//   store the token in a cookie;
// 3. TO store in a cookie check js-cookie

const Login = props => {
     const [setToken] = useState();
     const [error, setError] = useState();
     const [loading, setLoading] = useState();

     const loginHandler = async e => {
          const { stateCode, password } = e.target.elements;
          e.preventDefault();
          setLoading(true);
          try {
               let res = await axios.post("/api/user/login", {
                    stateCode: stateCode.value,
                    password: password.value
               });
               console.log(res);

               setToken(res.headers["x-auth-token"]);
               setLoading(false);
          } catch (e) {
               //* set ur error flash message here
               setError(e.response.data);
               setLoading(false);
          }
     };

     return (
          <div className=" form-top mb-5">
               <h2 className="primary text-center mt-5">Login</h2>
               <div className="form-container ">
                    <div className="form-wrapper">
                         <p className="error-message">{error && error}</p>
                         <form className="mt-5 " onSubmit={loginHandler}>
                              <div className="form-div">
                                   <label htmlFor="name">
                                        State Code <span>*</span>
                                   </label>
                                   <input
                                        type="text"
                                        placeholder="state code"
                                        name="stateCode"
                                   />
                              </div>
                              <div className="form-div">
                                   <label htmlFor="name">
                                        Password<span>*</span>
                                   </label>
                                   <input
                                        type="password"
                                        placeholder="password"
                                        name="password"
                                   />
                              </div>
                              <div className="form-div">
                                   <button className="submit-btn" type="submit">
                                        {loading ? (
                                             <FontAwesomeIcon
                                                  style={{
                                                       marginRight: "1rem",
                                                       marginTop: ".4rem"
                                                  }}
                                                  icon="spinner"
                                                  size="1x"
                                                  color="#fffb00f6"
                                                  spin
                                             />
                                        ) : (
                                             "Login"
                                        )}
                                   </button>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Login;
