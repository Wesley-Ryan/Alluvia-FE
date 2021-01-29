import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onBlur",
  });

  const password = useRef({});
  password.current = watch("password", "");

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
          isInvalid={errors.first_name ? true : false}
          placeholder="First Name"
          name="first_name"
          ref={register({ required: true, max: 255, maxLength: 80 })}
        />
        <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
        <Form.Control
          type="text"
          isInvalid={errors.last_name ? true : false}
          placeholder="Last Name"
          name="last_name"
          ref={register({ required: true, max: 255, maxLength: 100 })}
        />
        <Form.Control
          type="text"
          isInvalid={errors.Email ? true : false}
          placeholder="Email"
          name="Email"
          ref={register({ required: true, max: 255, pattern: /^\S+@\S+$/i })}
        />

        <Form.Control
          type="password"
          isInvalid={errors.password ? true : false}
          placeholder="Password"
          name="password"
          aria-describedby="passwordHelpBlock"
          ref={register({ required: "Password is required.", max: 255 })}
        />
        <Form.Text id="passwordHelpBlock" muted style={{ width: "80%" }}>
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emojis.
        </Form.Text>
        <Form.Control
          type="password"
          isInvalid={errors.confirmPassword ? true : false}
          placeholder="Confirm Password"
          name="confirmPassword"
          ref={register({
            validate: (value) =>
              value === password.current ||
              "The password does not match, please correct your password.",
          })}
        />
        <Form.Text muted>
          {errors.confirmPassword ? errors.confirmPassword.message : ""}
        </Form.Text>
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
        <p>
          Already registerd?<Link to={"/account/login"}>login here</Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
