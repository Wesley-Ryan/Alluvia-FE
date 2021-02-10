import { Card } from "react-bootstrap";
import Logo from "../assets/img/logo2.jpg";
import TabbedLogin from "./TabbedLogin";
const Homepage = () => {
  return (
    <>
      <Card id="home-content" className="shadow-lg">
        <Card.Body className="home-seperation">
          <section className="home-right">
            <Card.Title>
              <img src={Logo} alt="Alluvia Company Logo" />
            </Card.Title>
            <Card.Text className="homepage-text">
              <span className="h3-title">Don't be caught in the dark...</span>
              Alluvia is here to help track you subscriptions, make payments
              ontime, and show you the scary truth of how much you are really
              paying...
              <li>Never miss a payment</li>
              <li>Track you spending</li>
              <li>Save time and money</li>
              <li>no more forgotten free trials</li>
            </Card.Text>
            <div className="homepage-img-container"></div>
          </section>

          <section className="home-left">
            <TabbedLogin className="burger" />
          </section>
        </Card.Body>

        <Card.Header className="home-foot">Footer Content</Card.Header>
      </Card>
    </>
  );
};

export default Homepage;
