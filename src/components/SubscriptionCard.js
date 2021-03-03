import React from "react";

const SubscriptionCard = (props) => {
  const { subscription } = props;
  return (
    <>
      {console.log("HELLO AGAIN", subscription)}
      <div className="sub-card" style={{ background: `#F2848A` }}>
        <img
          alt="Subscription Logo"
          src="https://allears.net/wp-content/uploads/2021/01/Netflix-Logo.jpeg"
          id="card-img"
        />
        <section className="card-section">
          <h2 id="card-title">{subscription.name}</h2>
          <p>Due Date:{subscription.due_date}</p>
        </section>
        <section className="card-section">
          <h2>{subscription.cost}</h2>
          <p>{subscription.notes}</p>
        </section>
        <div className="counter">
          <h3>5</h3>
          <p>Days</p>
        </div>
      </div>
    </>
  );
};

export default SubscriptionCard;
