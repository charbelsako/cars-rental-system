import React from "react";
import Card from "./Card";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const CardView = (props) => {
  return (
    <Carousel>
      {props.cars.map((car) => (
        <Card data={car} />
      ))}
    </Carousel>
  );
};

export default CardView;
