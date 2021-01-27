import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

const Register = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
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
