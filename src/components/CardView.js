import React, { useContext, useEffect } from "react";
import Card from "./Card";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CarsContext from "../context/cars";
import Loading from "./Loading";
import axios from "./myAxios";

const CardView = () => {
  const { cars, setCars, loading, setLoading } = useContext(CarsContext);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      try {
        const carsResult = await axios.get("/showCarBrand");
        console.log(carsResult.data.cars);
        setCars(carsResult.data.cars);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
    // return () => {
    // unmount
    // };
  }, [setCars, setLoading]);

  // const carsElements = cars.filter(car => car.visible);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Carousel>
        {cars.map((car, index) => (
          <Card data={car} key={index} />
        ))}
      </Carousel>
    );
  }
};

export default CardView;
