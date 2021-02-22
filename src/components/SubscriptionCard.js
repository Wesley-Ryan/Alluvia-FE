import React from "react";

const SubscriptionCard = () => {
  return (
    <>
      <div className="sub-card" style={{ background: `#F2848A` }}>
        <img
          src="https://allears.net/wp-content/uploads/2021/01/Netflix-Logo.jpeg"
          id="card-img"
        />
        <section className="card-section">
          <h2 id="card-title">NETFLIX</h2>
          <p>Due Date: 03/01/2021</p>
        </section>
        <section className="card-section">
          <h2>$11.99</h2>
          <p>Netflix standard family plan</p>
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
{
  /* <div className="title-container">
{" "}
<h2 className="title">Netflix</h2>
<div className="due-date">
  <h4>6</h4>
  <h4>Days</h4>
</div>
</div>
<div className="cost-container">
<h4 className="due-date">Due Date: 02/18/2021</h4>
<h4 className="cost">Cost: $14.99</h4>
<p>Netflix Standard plan started 09/18/2020</p>
</div> */
}
