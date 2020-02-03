import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import EventProvider from "./shared/contextapi/EventProvider";
import {
     faEnvelope,
     faKey,
     faHome,
     faPlusCircle,
     faTrash,
     faEdit,
     faUser,
     faAddressCard,
     faTimesCircle,
     faServer,
     faSpinner,
     faInfoCircle,
     faSearch,
     faThumbsUp,
     faComment,
     faShare,
     faHeart,
     faPager
} from "@fortawesome/free-solid-svg-icons";

import Layouts from "./layouts/Layouts";
import "./sass/custom.scss";

library.add(
     faEnvelope,
     faKey,
     faHome,
     faPlusCircle,
     faTrash,
     faEdit,
     faUser,
     faAddressCard,
     faTimesCircle,
     faServer,
     faSpinner,
     faInfoCircle,
     faSearch,
     faThumbsUp,
     faComment,
     faHeart,
     faShare,
     faPager
);

const App = () => {
     return (
          <>
               <EventProvider>
                    <Layouts />
               </EventProvider>
          </>
     );
};

export default App;
