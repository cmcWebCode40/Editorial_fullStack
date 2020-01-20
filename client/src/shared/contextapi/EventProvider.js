import React, { useState, createContext } from "react";

export const EventContext = createContext("");

const EventProvider = ({ children }) => {
     const [newsItem, setNewsItem] = useState([
          {
               id: 1,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 2,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          },
          {
               id: 3,
               title: " News update",
               text:
                    "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
               img: "https://source.unsplash.com/user/erondu/1600x900"
          }
     ]);

     return (
          <EventContext.Provider value={[newsItem, setNewsItem]}>
               {children}
          </EventContext.Provider>
     );
};

export default EventProvider;
