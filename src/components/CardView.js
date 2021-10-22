import React, { useContext, useEffect } from "react";
import Card from "./Card";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CarsContext from "../context/cars";
import { animated, useSpring, config } from "react-spring";

const CardView = () => {
  const { cars, setCars, loading, setLoading } = useContext(CarsContext);

  const timeout = setTimeout(function () {
    setCars([
      {
        id: 0,
        model: 2000,
        price: 100,
        title: "Honda",
        description: "really cool",
        image:
          "https://s3.caradvice.com.au/wp-content/uploads/2013/12/honda-city.jpg",
        rentalNumber: 100,
        visible: true,
      },
      {
        id: 1,
        model: 2001,
        price: 110,
        title: "Hyundai",
        description: "really cool",
        image:
          "http://www.zastavki.com/pictures/originals/2014/Auto___Hyundai__new_car_Hyundai_IX35__060506_.jpg",
        rentalNumber: 108,
        visible: true,
      },
      {
        id: 2,
        model: 2002,
        price: 200,
        title: "Kia",
        description: "really cool",
        image:
          "https://wallpapershome.com/images/wallpapers/kia-proceed-5120x2880-electric-car-5k-15722.jpg",
        rentalNumber: 200,
        visible: true,
      },
      {
        id: 3,
        model: 2003,
        price: 220,
        title: "Range Rover",
        description: "really cool",
        image:
          "https://media.autoexpress.co.uk/image/private/s--opXUk01t--/v1594728857/autoexpress/2020/07/Range%20Rover%20Sport%202021%20model%20year%20updates-8.jpg",
        rentalNumber: 100,
        visible: true,
      },
      {
        id: 4,
        model: 2004,
        price: 300,
        title: "Hummer",
        description: "really cool",
        image: "https://wallpapercave.com/wp/wc1754622.jpg",
        rentalNumber: 100,
        visible: true,
      },
      {
        id: 5,
        model: 2005,
        price: 330,
        title: "Mitsubishi",
        description: "really cool",
        image:
          "http://2.bp.blogspot.com/-VDnGW0s3Bps/T9dP7TqTsuI/AAAAAAAAEEg/GmayAp-CBFA/s1600/car-Mitsubishi-wallpapers.jpg",
        rentalNumber: 100,
        visible: true,
      },
      {
        id: 6,
        model: 2006,
        price: 400,
        title: "Mercedes",
        description: "really cool",
        image:
          "https://www.publicdomainpictures.net/pictures/260000/velka/mercedes-benz-sports-car.jpg",
        rentalNumber: 100,
        visible: true,
      },
      {
        id: 7,
        model: 2007,
        price: 440,
        title: "BMW",
        description: "really cool",
        image:
          "https://hdwallpaperim.com/wp-content/uploads/2017/08/23/472083-BMW-car.jpg",
        rentalNumber: 100,
        visible: true,
      },
    ]);
    setLoading(false);
  }, 10000);

  useEffect(() => () => clearTimeout(timeout), [timeout]);

  const carsElements = cars.filter(car => car.visible);

  const { x } = useSpring({
    loop: true,
    from: { x: 0 },
    x: 100,
    config: config.molasses,
  });

  if (loading) {
    return (
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <animated.div
            style={{
              left: x
                .to({
                  range: [0, 25, 50, 75, 100],
                  output: [0, 50, 80, 50, 0],
                })
                .to(x => `${x}%`),
            }}
            className="loading"></animated.div>
        </div>
      </div>
    );
  } else {
    return (
      <Carousel>
        {carsElements.map((car, index) => (
          <Card data={car} key={index} />
        ))}
      </Carousel>
    );
  }
};

export default CardView;
