/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Logo from "../assets/img/logo2.jpg";

const Homepage = () => {
  return (
    <div style={{ display: `flex`, justifyContent: `center` }}>
      <div
        css={css`
          border: 1px solid grey;
          height: 90vh;
          border-radius: 10px;
          font-family: "Source Sans Pro", sans-serif;
          width: 1200px;
          margin: 14px;
          display: flex;
          justify-content: center;
        `}
      >
        <section
          css={css`
            width: 45%;
          `}
        >
          <img src={Logo} />
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
            width: 45%;
          `}
        >
          <RegistrationForm />
        </section>
      </div>
    </div>
  );
};

export default Homepage;
