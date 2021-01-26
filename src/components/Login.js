import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

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
        <h2>Login</h2>

        <Form.Control
          type="text"
          placeholder="Email"
          name="Email"
          ref={register({ required: true, max: 255, pattern: /^\S+@\S+$/i })}
        />
        <Form.Control
          type="password"
          placeholder="password"
          name="password"
          ref={register({ required: true, max: 255 })}
        />

        <Button id="register" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
