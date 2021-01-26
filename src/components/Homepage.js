import { Card, Button } from "react-bootstrap";

import Register from "./Register";
const Homepage = () => {
  return (
    <Card id="home-content" className="shadow-lg">
      <Card.Body className="home-seperation">
        <div className="top-content">
          <section className="home-right">
            <Card.Title>
              <h1>ALLUVIA</h1>
            </Card.Title>
            <Card.Text>
              <h3>Keep track and something with savings</h3>
              <p>
                Alluvia is here to track you subscriptions, payments ontime and
                show you how much you are really spending...
              </p>
              <ul>
                <li>Never miss a payment</li>
                <li>Track you spending...</li>
                <li>Save time and money</li>
                <li>no more forgotten free trials</li>
              </ul>
            </Card.Text>
          </section>
        </div>
        <div className="home-img">
          <img src="homeimgage.jpg" alt="homepage image content" />
        </div>
        <section className="home-left">
          <Register />
        </section>
      </Card.Body>
      <Card.Header className="home-foot">Footer Content</Card.Header>
    </Card>
  );
};

export default Homepage;
