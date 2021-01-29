import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Logo from "../assets/img/logo2.jpg";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
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
            placeholder="Email"
            name="Email"
            ref={register({ required: true, max: 255, pattern: /^\S+@\S+$/i })}
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword" className="login-container">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            name="password"
            ref={register({ required: true, max: 255 })}
          />
        </Form.Group>
        <Button id="register" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
