import React, { useContext } from "react";
import { UserContext } from "../utils/userContext";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/img/logo2.jpg";

const Login = (props) => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    const user = {
      email: data.Email,
      password: data.password,
    };
    axios
      .post("http://localhost:3990/account/login", user)
      .then((response) => {
        setLoggedInUser(response.data);
        console.log(response);
      })
      .then((response) => {
        console.log("MY CONTEXT", loggedInUser); // update userContext, set token
      })
      .catch((error) => {
        console.log("Incorrect Password", error.message);
      });
  };
  console.log("ERRORS =>", errors);

  return (
    <div>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="register-container shadow"
      >
        <img src={Logo} alt="Alluvia Company Logo" />
        <h2>Login</h2>
        <Form.Group controlId="formGroupEmail" className="login-container">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            isInvalid={errors.Email ? true : false}
            placeholder="Email"
            name="Email"
            ref={register({ required: true, max: 255, pattern: /^\S+@\S+$/i })}
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword" className="login-container">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            isInvalid={errors.password ? true : false}
            placeholder="password"
            name="password"
            ref={register({ required: true, max: 255 })}
          />
        </Form.Group>
        <p style={{ fontSize: "12px", fontWeight: "bold" }}>
          <Link to={"/account/login"}>Forgot Password</Link>
        </p>
        <Button id="register" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
