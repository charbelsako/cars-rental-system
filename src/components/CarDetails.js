import React from "react";
import { useParams, useLocation } from "react-router-dom";

const CarDetails = () => {
  const { id } = useParams();
  const {
    state: {
      car: { title, image, price, rentalNumber, model, description },
    },
  } = useLocation();

  return (
    <div>
      <p>{id}</p>
      <p>Name of the car: {title}</p>
      <p>Rental Price: {price}</p>
      <p>Rental Number: {rentalNumber}</p>
      <p>Year made: {model}</p>
      <p>Description: {description}</p>
      <img src={image} alt="the car" width="300" />
    </div>
  );
};

export default CarDetails;
