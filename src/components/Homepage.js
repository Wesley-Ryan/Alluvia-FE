import { Card, Button } from "react-bootstrap";
import Logo from "../assets/img/logo2.jpg";
import AppImg from "../assets/img/alluivaIphone.jpg";
import Register from "./Register";
const Homepage = () => {
  return (
    <Card id="home-content" className="shadow-lg">
      <Card.Body className="home-seperation">
        <section className="home-right">
          <Card.Title>
            <img src={Logo} alt="Alluvia Company Logo" />
          </Card.Title>
          <Card.Text className="homepage-text">
            <h3>Don't be caught in the dark...</h3>
            <p>
              Alluvia is here to help track you subscriptions, make payments
              ontime, and show you the scary truth of how much you are really
              paying...
            </p>
            <ul>
              <li>Never miss a payment</li>
              <li>Track you spending</li>
              <li>Save time and money</li>
              <li>no more forgotten free trials</li>
            </ul>
          </Card.Text>
          <div className="homepage-img-container"></div>
        </section>

        <section className="home-left">
          <Register />
        </section>
      </Card.Body>

      <Card.Header className="home-foot">Footer Content</Card.Header>
    </Card>
  );
};

export default Homepage;
