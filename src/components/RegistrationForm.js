/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
const Input = styled.input`
  height: 40px;
  width: 75%;
  font-size: 14px;
  margin: 8px;
  border-radius: 5px;
  align-self: center;
`;

const InputErrorMessage = styled.p`
  margin: 0 auto;
  color: red;
`;

const RegistrationForm = () => {
  const { register, handleSubmit, errors, watch, reset } = useForm({
    mode: "onBlur",
  });
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    const user = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      password: data.password,
      role: 5,
    };
    console.log("MYUSER", user);
    axios
      .post("http://localhost:3990/account/signup", user)
      .then((response) => {
        alert(`Registration Successful, please login.`);
        reset();
      })
      .catch((error) => {
        console.log("There was an error creating the userDD", error);
      });
  };

  return (
    <div
      css={css`
        height: 500px;
        width: 350px;
        margin-top: 80px;
        display: flex;
        justify-content: center;
      `}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        css={css`
          width: 100%;
          background-color: white;
          display: flex;
          justify-content: center;
          flex-direction: column;
          -webkit-box-shadow: 3px 3px 5px 5px #ccc;
          -moz-box-shadow: 3px 3px 5px 5px #ccc;
          box-shadow: 3px 3px 5px 5px #ccc;
        `}
      >
        <h2
          css={css`
            margin: 0 auto;
            font-size: 30px;
          `}
        >
          Sign Up
        </h2>
        <Input
          style={{
            border: errors.firstName ? "1px solid red" : "1px solid grey",
          }}
          type="text"
          placeholder="First Name"
          name="firstName"
          ref={register({
            required: true,
            max: 255,
            maxLength: 80,
          })}
        />
        {errors.firstName && (
          <InputErrorMessage>First name is required</InputErrorMessage>
        )}
        <Input
          style={{
            border: errors.lastName ? "1px solid red" : "1px solid grey",
          }}
          type="text"
          placeholder="Last name"
          name="lastName"
          ref={register({
            required: true,
            max: 255,
            maxLength: 80,
          })}
        />
        {errors.lastName && (
          <InputErrorMessage>Last name is required</InputErrorMessage>
        )}
        <Input
          style={{
            border: errors.email ? "1px solid red" : "1px solid grey",
          }}
          type="text"
          placeholder="Email"
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <InputErrorMessage>Valid Email is required</InputErrorMessage>
        )}
        <Input
          style={{
            border: errors.password ? "1px solid red" : "1px solid grey",
          }}
          type="password"
          placeholder="Password"
          name="password"
          ref={register({ max: 128, min: 8, maxLength: 128 })}
        />

        <Input
          style={{
            border: errors.passwordConfirmation
              ? "1px solid red"
              : "1px solid grey",
          }}
          type="password"
          placeholder="Confirm Password"
          name="passwordConfirmation"
          ref={register({
            validate: (value) => value === password.current,
          })}
        />
        {errors.passwordConfirmation && (
          <InputErrorMessage>
            Confirmation Password does not match.
          </InputErrorMessage>
        )}
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <input
            css={css`
              align-self: center;
              margin: 8px;
            `}
            type="checkbox"
            name="terms"
            ref={register({
              required: true,
            })}
          />
          <p
            css={css`
              font-size: 13px;
            `}
          >
            I agree to the terms of service
          </p>
        </div>
        {errors.terms && (
          <InputErrorMessage>
            You must accept terms of service to proceed.
          </InputErrorMessage>
        )}
        <button
          css={css`
            width: 175px;
            align-self: center;
            padding: 12px;
            background-color: #b150e2;
            font-size: 20px;
            border-radius: 4px;
            border: none;
            color: white;
            font-weight: bold;
            &:hover {
              color: white;
            }
          `}
          type="submit"
        >
          Create Account
        </button>
        <p
          css={css`
            align-self: center;
          `}
        >
          Already registerd? <Link to={"/account/login"}>login here!</Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
