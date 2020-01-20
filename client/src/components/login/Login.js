import React, { useState } from "react";
import { Form, Input } from "reactstrap";
import axios from "axios";
// import Cookie from "js-cookie";

const Login = props => {
    const [token, setToken] = useState();
    const [error, setError] = useState();

    const loginHandler = async e => {
        e.preventDefault();
        try {
            let res = await axios.post("/api/user/login", {
                stateCode: e.target.stateCode.value,
                password: e.target.password.value
            });
            setToken(res.headers[("token", "x-auth-token")]);
        } catch (e) {
            if (e.response.status === 500) console.log(e);
            else setError(e.response.data);
        }
    };

    return (
        <div>
            <Form onSubmit={loginHandler}>
                <Input placeholder="state code" name="stateCode" />
                <Input type="password" placeholder="password" name="password" />
                <Input type="submit" value="Login" />
            </Form>
        </div>
    );
};

export default Login;