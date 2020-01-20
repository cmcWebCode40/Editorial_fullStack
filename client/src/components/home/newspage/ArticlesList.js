import React from "react";

import image from "./slide2.jpg";

const ArticlesList = props => {
     return (
          <div className=" trend-box container mx-auto my-4 center main ">
               <div className=" mb-4 mt-3 bg-white">
                    <article className={"trending-news"}>
                         <h4>Trending News.</h4>
                         <div>
                              <div className={"trending"}>
                                   <img
                                        height="30"
                                        width="30"
                                        className={""}
                                        src={image}
                                        alt="news"
                                   />
                                   <h5>Cras justo odio</h5>
                              </div>
                         </div>
                         <div>
                              <div>
                                   <div className={"trending"}>
                                        <img
                                             height="30"
                                             width="30"
                                             className={""}
                                             src={image}
                                             alt="news"
                                        />
                                        <h5>Cras justo odio</h5>
                                   </div>
                              </div>
                              <div className={"trending"}>
                                   <img
                                        height="30"
                                        width="30"
                                        className={""}
                                        src={image}
                                        alt="news"
                                   />
                                   <h5>Cras justo odio</h5>
                              </div>
                         </div>
                         <div>
                              <div className={"trending"}>
                                   <img
                                        height="30"
                                        width="30"
                                        className={""}
                                        src={image}
                                        alt="news"
                                   />
                                   <h5>Cras justo odio</h5>
                              </div>
                         </div>
                         <div>
                              <div className={"trending"}>
                                   <img
                                        height="30"
                                        width="30"
                                        className={""}
                                        src={image}
                                        alt="news"
                                   />
                                   <h5>Cras justo odio</h5>
                              </div>
                         </div>
                    </article>
               </div>
               <div className={"articles mb-5 "}>
                    <article>
                         <h3>About Nigeria</h3>
                         <p className={""}>
                              The history of Nigeria can be traced to
                              prehistoric settlers (Nigerians) living in the
                              area as early as 1100 BC.
                              <br /> Numerous ancient African civilizations
                              settled in the region that is today Nigeria.
                              <br />
                         </p>
                         <a
                              href="https://en.wikipedia.org/wiki/History_of_Nigeria"
                              target="_blanck"
                              className={"btn-primary mt-5  ml-3   py-1 px-3"}
                         >
                              read more
                         </a>
                    </article>
               </div>
          </div>
     );
};

export default ArticlesList;
