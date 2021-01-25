import Login from "./Login";
const HomePage = () => {
  return (
    <section className="home-content">
      <div className="home-seperation">
        <section className="home-right">
          <div className="top-content">
            <h1>ALLUVIA</h1>
            <h3>Keep track and something with savings</h3>
            <p>
              Alluvia is here to track you subscriptions, payments ontime and
              show you how much you are really spending...
            </p>
          </div>
          <section className="home-body">
            <ul>
              <li>Never miss a payment</li>
              <li>Track you spending...</li>
              <li>Save time and money</li>
              <li>no more forgotten free trials</li>
            </ul>
          </section>
          <div className="home-img">
            <img src="homeimgage.jpg" />
          </div>
        </section>
        <section className="home-left">
          <Login />
        </section>
      </div>
      <section className="home-foot">
        <footer>Content</footer>
      </section>
    </section>
  );
};

export default HomePage;
