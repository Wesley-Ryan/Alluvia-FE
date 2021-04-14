/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Logo from "../assets/img/logo2.jpg";
import RegistrationForm from "./RegistrationForm";

const Homepage = () => {
  return (
    <div
      style={{ display: `flex`, justifyContent: `center`, flexWrap: `wrap` }}
    >
      <div
        css={css`
          height: 90vh;
          border-radius: 10px;
          font-family: "Source Sans Pro", sans-serif;
          width: 1200px;
          margin: 14px;
          display: flex;
          justify-content: center;
          -webkit-box-shadow: 3px 3px 5px 5px #ccc;
          -moz-box-shadow: 3px 3px 5px 5px #ccc;
        `}
      >
        <section
          css={css`
            width: 50%;
          `}
        >
          <img
            src={Logo}
            css={css`
              width: 50%;
            `}
          />
          <h2>Don't be caught in the dark...</h2>
          <article>
            <p>
              Alluvia is here to help keep track of your subscriptions, make
              payments on time, and show you the scary truth about how much you
              are really spending.
            </p>
            <ul>
              <li>Never miss a payment</li>
              <li>Track your spending</li>
              <li>Save time and money</li>
              <li>No more missed lunch on a forgotten free trial</li>
            </ul>
          </article>
        </section>
        <section
          css={css`
            width: 30%;
            margin: 0 50px;
          `}
        >
          <RegistrationForm />
        </section>
        <div>hello</div>
      </div>
    </div>
  );
};

export default Homepage;
