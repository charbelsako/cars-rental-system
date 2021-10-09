import { useState } from "react";
import CardView from "./components/CardView";

function App() {
  const [cars] = useState([
    {
      title: "Honda",
      description: "really cool",
      image: "https://s3.caradvice.com.au/wp-content/uploads/2013/12/honda-city.jpg",
    },
    {
      title: "Hyundai",
      description: "really cool",
      image:
        "http://www.zastavki.com/pictures/originals/2014/Auto___Hyundai__new_car_Hyundai_IX35__060506_.jpg",
    },
    {
      title: "Kia",
      description: "really cool",
      image:
        "https://wallpapershome.com/images/wallpapers/kia-proceed-5120x2880-electric-car-5k-15722.jpg",
    },
    {
      title: "Range Rover",
      description: "really cool",
      image:
        "https://media.autoexpress.co.uk/image/private/s--opXUk01t--/v1594728857/autoexpress/2020/07/Range%20Rover%20Sport%202021%20model%20year%20updates-8.jpg",
    },
    {
      title: "Hummer",
      description: "really cool",
      image: "https://wallpapercave.com/wp/wc1754622.jpg",
    },
    {
      title: "Mitsubishi",
      description: "really cool",
      image:
        "http://2.bp.blogspot.com/-VDnGW0s3Bps/T9dP7TqTsuI/AAAAAAAAEEg/GmayAp-CBFA/s1600/car-Mitsubishi-wallpapers.jpg",
    },
    {
      title: "Mercedes",
      description: "really cool",
      image:
        "https://www.publicdomainpictures.net/pictures/260000/velka/mercedes-benz-sports-car.jpg",
    },
    {
      title: "BMW",
      description: "really cool",
      image:
        "https://hdwallpaperim.com/wp-content/uploads/2017/08/23/472083-BMW-car.jpg",
    },
  ]);

  const [showRentals, setShowRentals] = useState(true);
  const [rentalNumber, setRentalNumber] = useState(182);

  const toggleRentalNumber = () => {
    setShowRentals(!showRentals);
  };

  return (
    <div className="App text-center">
      <button onClick={toggleRentalNumber} className="btn btn-primary m-3">
        {showRentals ? "Hide" : "Show"} Rentals
      </button>
      {showRentals ? <p>Number of rentals until today: {rentalNumber}</p> : null}
      <CardView cars={cars} />
    </div>
  );
}

export default App;
