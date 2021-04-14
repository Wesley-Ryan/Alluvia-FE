/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Logo from "../assets/img/logo2.jpg";

const Input = styled.input`
  height: 40px;
  width: 75%;
  font-size: 14px;
  margin: 8px;
  border-radius: 5px;
  border: 1px solid grey;
  align-self: center;
`;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div
      css={css`
        height: 500px;
        width: 350px;
        margin: 0 auto;
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
        <img
          src={Logo}
          alt="Alluvia Logo"
          css={css`
            width: 75%;
            margin: 0 auto;
          `}
        />
        <h2
          css={css`
            margin: 0 auto;
            margin-top: 20px;
            font-size: 30px;
          `}
        >
          Login
        </h2>
        <Input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <Input
          type="text"
          placeholder="Password"
          {...register("Password", { max: 128, min: 8, maxLength: 128 })}
        />

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
            margin-top: 20px;
          `}
          type="submit"
        >
          Login
        </button>
        <p
          css={css`
            align-self: center;
          `}
        >
          Still New? <Link to={"/"}>Sign Up Here!</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
