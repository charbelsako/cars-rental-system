import React, { useContext } from "react";
import Card from "./Card";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Redirect } from "react-router";
import AuthContext from "../context/auth";

const CardView = (props) => {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated) {
    return <Redirect to="login" />;
  }
  return (
    <Carousel>
      {props.cars.map((car, index) => (
        <Card data={car} key={index} />
      ))}
    </Carousel>
  );
};

export default CardView;
