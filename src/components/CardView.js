import React, { useState } from "react";
import Card from "./Card";

const CardView = props => {
  const [showRentals, setRentals] = useState(true);
  return (
    <React.Fragment>
      <div className="text-center">
        <button
          className="btn btn-primary m-3 "
          style={{ border: "1px solid black" }}
          onClick={() => setRentals(!showRentals)}>
          {showRentals ? "Hide" : "Show"} Rentals
        </button>
      </div>
      <div className="row justify-content-center">
        {props.cars.map(car => (
          <Card data={car} showRentals={showRentals} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default CardView;
