import React from "react";

const SubscriptionCard = () => {
  return (
    <>
      <div className="sub-card">
        <div className="title-container">
          <img src="https://via.placeholder.com/150" id="card-img" />{" "}
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
        </div>
      </div>
    </>
  );
};

export default SubscriptionCard;
