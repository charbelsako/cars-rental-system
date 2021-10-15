import React, { useState } from "react";
import CardView from "./components/CardView";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AuthContext from "./context/auth";

function App() {
  const cars = [
    {
      title: "Honda",
      description: "really cool",
      image:
        "https://s3.caradvice.com.au/wp-content/uploads/2013/12/honda-city.jpg",
      rentalNumber: 100,
    },
    {
      title: "Hyundai",
      description: "really cool",
      image:
        "http://www.zastavki.com/pictures/originals/2014/Auto___Hyundai__new_car_Hyundai_IX35__060506_.jpg",
      rentalNumber: 108,
    },
    {
      title: "Kia",
      description: "really cool",
      image:
        "https://wallpapershome.com/images/wallpapers/kia-proceed-5120x2880-electric-car-5k-15722.jpg",
      rentalNumber: 200,
    },
    {
      title: "Range Rover",
      description: "really cool",
      image:
        "https://media.autoexpress.co.uk/image/private/s--opXUk01t--/v1594728857/autoexpress/2020/07/Range%20Rover%20Sport%202021%20model%20year%20updates-8.jpg",
      rentalNumber: 100,
    },
    {
      title: "Hummer",
      description: "really cool",
      image: "https://wallpapercave.com/wp/wc1754622.jpg",
      rentalNumber: 100,
    },
    {
      title: "Mitsubishi",
      description: "really cool",
      image:
        "http://2.bp.blogspot.com/-VDnGW0s3Bps/T9dP7TqTsuI/AAAAAAAAEEg/GmayAp-CBFA/s1600/car-Mitsubishi-wallpapers.jpg",
      rentalNumber: 100,
    },
    {
      title: "Mercedes",
      description: "really cool",
      image:
        "https://www.publicdomainpictures.net/pictures/260000/velka/mercedes-benz-sports-car.jpg",
      rentalNumber: 100,
    },
    {
      title: "BMW",
      description: "really cool",
      image:
        "https://hdwallpaperim.com/wp-content/uploads/2017/08/23/472083-BMW-car.jpg",
      rentalNumber: 100,
    },
  ];

  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="App text-center">
      <Router>
        <AuthContext.Provider
          value={{
            setAuthenticated: setAuthenticated,
            authenticated: authenticated,
          }}
        >
          <Header />
          <div className="container">
            <Switch>
              <Route path="/dashboard">
                <CardView cars={cars} />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
            </Switch>
          </div>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
