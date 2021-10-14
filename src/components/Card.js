import React, { useState } from "react";
import "../assets/Card.css";

const Card = (props) => {
  const {
    data: { image, title, description, rentalNumber },
  } = props;

  const [showRentals, setShowRentals] = useState(true);

  const toggleRentalNumber = () => {
    setShowRentals((prevState) => !prevState);
  };

  return (
    <div className="">
      <button onClick={toggleRentalNumber} className="btn btn-primary m-3">
        {showRentals ? "Hide" : "Show"} Rentals
      </button>
      {showRentals ? (
        <p>Number of rentals until today: {rentalNumber}</p>
      ) : null}

      <img src={image} alt="" className="card-img-top image" />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
