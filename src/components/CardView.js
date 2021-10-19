import React, { useContext } from "react";
import Card from "./Card";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Redirect } from "react-router";
import AuthContext from "../context/auth";
import CarsContext from "../context/cars";

const CardView = () => {
  const { authenticated } = useContext(AuthContext);
  const { cars } = useContext(CarsContext);

  if (!authenticated) {
    return <Redirect to="login" />;
  }

  const carsElements = cars.filter(
    car => car.visible
    // return <Card data={car} key={index} />;
  );

  console.log(carsElements);

  return (
    <Carousel>
      {carsElements.map((car, index) => (
        <Card data={car} key={index} />
      ))}
    </Carousel>
  );
};

export default CardView;
