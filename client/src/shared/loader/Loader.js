import React from "react";
import { Spinner } from "reactstrap";

const Loader = props => {
     return (
          <div>
               <Spinner type="grow" color="warning" />
               <Spinner type="grow" color="secondary" />
               <Spinner type="grow" color="warning" />
               <Spinner type="grow" color="secondary" />
               <Spinner type="grow" color="warning" />
               <Spinner type="grow" color="secondary" />
               <Spinner type="grow" color="warning" />
               <Spinner type="grow" color="secondary" />
          </div>
     );
};

export default Loader;
