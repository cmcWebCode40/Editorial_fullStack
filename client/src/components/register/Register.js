import React, { useState } from "react";
import { Form, Input } from "reactstrap";
import axios from "axios";

const Register = props => {
     const [error, setError] = useState();

     const registrationHandler = async e => {
          e.preventDefault();
          try {
               let res = await axios.post("/api/user/register", {
                    stateCode: e.target.stateCode.value,
                    password: e.target.password.value,
                    confirmPassword: e.target.confirmPassword.value
               });
               console.log("Registration was successful");
          } catch (e) {
               setError(e.response.data);
               console.log(e.response.data);
          }
     };

     return (
          <div>
               <Form onSubmit={registrationHandler}>
                    <Input placeholder="state code" name="stateCode" />
                    <Input
                         type="password"
                         placeholder="password"
                         name="password"
                    />
                    <Input
                         type="password"
                         placeholder="password"
                         name="confirmPassword"
                    />
                    <Input type="submit" value="Register" />
               </Form>
          </div>
     );
};

export default Register;
