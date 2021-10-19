import React, { useState } from "react";
import CardView from "./components/CardView";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AuthContext from "./context/auth";
import CarDetails from "./components/CarDetails";
import CarsContext from "./context/cars";
import Filter from "./components/Filter";
import { getUniqueBrands } from "./components/utils";

function App() {
  const [cars, setCars] = useState([
    {
      id: 0,
      model: 2000,
      price: 100,
      title: "Honda",
      description: "really cool",
      image: "https://s3.caradvice.com.au/wp-content/uploads/2013/12/honda-city.jpg",
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

  const [authenticated, setAuthenticated] = useState(false);
  const [name, setName] = useState("");

  return (
    <div className="App text-center">
      <Router>
        <AuthContext.Provider
          value={{
            setAuthenticated: setAuthenticated,
            authenticated: authenticated,
            setName: setName,
            name: name,
          }}>
          <Header />
          <div className="container">
            <Switch>
              <Route path="/" exact>
                <CarsContext.Provider
                  value={{
                    cars: cars,
                    setCars: setCars,
                    brands: getUniqueBrands(cars),
                  }}>
                  <Filter />
                  <CardView cars={cars} />
                </CarsContext.Provider>
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/car/:id">
                <CarDetails />
              </Route>
            </Switch>
          </div>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
