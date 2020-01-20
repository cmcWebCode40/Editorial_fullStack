import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavbarMain from "../shared/header/navbar/NavbarMain";
import EventProvider from "../shared/contextapi/EventProvider";
import Footer from "../shared/footer/Footer";
import Home from "../components/home/Home";
import Gallery from "../components/gallery/Gallery";
import ErrorPage from "./ErrorPage";

const Layouts = () => {
     return (
          <EventProvider>
               <div>
                    <NavbarMain />
                    <Router>
                         <Switch>
                              <Route path="/" exact component={Home} />
                              <Route
                                   path="/gallery"
                                   exact
                                   component={Gallery}
                              />
                              <Route component={ErrorPage} />
                         </Switch>
                    </Router>
                    <Footer />
               </div>
          </EventProvider>
     );
};

export default Layouts;
