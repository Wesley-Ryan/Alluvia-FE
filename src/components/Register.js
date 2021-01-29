import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const Register = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });

  const createAccount = (user) => {
    console.log("SEE", user);
    axios
      .post("http://localhost:3990/account/signup", user)
      .then((response) => {
        alert(`Registration Successful, please login.`);
        console.log(response);
      })
      .catch((error) => {
        console.log("There was an error creating the user", error);
      });
  };

  const onSubmit = (data) => {
    const user = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.Email,
      password: data.password,
      role: 5,
    };
    console.log("MYUSER", user);
    axios
      .post("http://localhost:3990/account/signup", user)
      .then((response) => {
        alert(`Registration Successful, please login.`);
        console.log(response);
      })
      .catch((error) => {
        console.log("There was an error creating the userDD", error);
      });
  };

  console.log("ERRORS =>", errors);

  return (
    <div>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="register-container shadow"
      >
        <h2>Sign Up</h2>
        <Form.Control
          type="text"
          placeholder="First Name"
          name="first_name"
          ref={register({ required: true, max: 255, maxLength: 80 })}
        />
        <Form.Control
          type="text"
          placeholder="Last Name"
          name="last_name"
          ref={register({ required: true, max: 255, maxLength: 100 })}
        />
        <Form.Control
          type="text"
          placeholder="Email"
          name="Email"
          ref={register({ required: true, max: 255, pattern: /^\S+@\S+$/i })}
        />
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          ref={register({ required: true, max: 255 })}
        />
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          name="confirm password"
          ref={register({ required: true, max: 255 })}
        />
        <div className="homepage-tos">
          <input
            type="checkbox"
            name="terms"
            ref={register({
              required: true,
            })}
          />
          <p>I agree to the terms of service</p>
        </div>
        <Button id="register" type="submit">
          Create Account
        </Button>
        <p>Already registerd?(LINK)login here</p>
      </Form>
    </div>
  );
};

export default Register;
