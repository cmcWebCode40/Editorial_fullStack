import React from "react";
import LandingPage from "./landingpage/LandingPage";
import Events from "./newspage/Events";
import Articles from "./newspage/ArticlesList";
import Profile from "./profile/Profiles";

export const Home = () => {
     return (
          <>
               <LandingPage />
               <main className={"bg-primary container-fluid"}>
                    <Events />
                    <Articles />
               </main>
               <Profile />
          </>
     );
};

export default Home;
