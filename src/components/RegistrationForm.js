/** @jsxImportSource @emotion/react */

import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Input = styled.input`
  height: 40px;
  width: 75%;
  font-size: 14px;
  margin: 8px;
  border-radius: 5px;
  border: 1px solid grey;
  align-self: center;
`;

const RegistrationForm = () => {
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
          type="text"
          placeholder="First name"
          {...register("First name", { required: true, maxLength: 80 })}
        />
        <Input
          type="text"
          placeholder="Last name"
          {...register("Last name", { required: true, maxLength: 100 })}
        />
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
        <Input
          type="text"
          placeholder="Confirm Password"
          {...register("Confirm Password", {
            required: true,
            max: 128,
            min: 8,
            maxLength: 128,
          })}
        />
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
