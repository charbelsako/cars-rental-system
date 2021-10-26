import React, { useState } from "react";
import "../assets/Card.css";
import { Link } from "react-router-dom";

const Card = props => {
  const {
    data: { image, title, description, NbrOfRent, id, brandName, categoryName },
  } = props;

  const [showRentals, setShowRentals] = useState(true);

  const toggleRentalNumber = () => {
    setShowRentals(prevState => !prevState);
  };

  console.log(props);

  return (
    <div className="row">
      <div className="col-12 mb-2">
        <Link
          className="btn btn-info m-2"
          to={{
            pathname: `/car/${id}`,
            state: {
              car: props.data,
            },
          }}>
          View Details
        </Link>
        <button onClick={toggleRentalNumber} className="btn btn-primary m-2">
          {showRentals ? "Hide" : "Show"} Rentals
        </button>
        {showRentals ? <p>Number of rentals until today: {NbrOfRent}</p> : null}
      </div>

      <div className="col-12">
        <img
          src="http://thewowstyle.com/wp-content/uploads/2015/02/Audi-cars-wallpaper.jpg"
          alt=""
          className="card-img-top image w-50"
        />
      </div>
      <div className="col-12">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
          <p className="card-text">Brand: {brandName}</p>
          <p className="card-text">Category: {categoryName}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
