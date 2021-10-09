import { useState } from "react";
import CardView from "./components/CardView";

function App() {
  const [cars, setCars] = useState([
    {
      title: "Honda",
      description: "really cool",
      rentalsNumber: 1,
      image: "https://s3.caradvice.com.au/wp-content/uploads/2013/12/honda-city.jpg",
    },
    {
      title: "Hyundai",
      description: "really cool",
      rentalsNumber: 1,
      image:
        "http://www.zastavki.com/pictures/originals/2014/Auto___Hyundai__new_car_Hyundai_IX35__060506_.jpg",
    },
    {
      title: "Kia",
      description: "really cool",
      rentalsNumber: 1,
      image:
        "https://wallpapershome.com/images/wallpapers/kia-proceed-5120x2880-electric-car-5k-15722.jpg",
    },
    {
      title: "Range Rover",
      description: "really cool",
      rentalsNumber: 1,
      image:
        "https://media.autoexpress.co.uk/image/private/s--opXUk01t--/v1594728857/autoexpress/2020/07/Range%20Rover%20Sport%202021%20model%20year%20updates-8.jpg",
    },
    {
      title: "Hummer",
      description: "really cool",
      rentalsNumber: 1,
      image: "https://wallpapercave.com/wp/wc1754622.jpg",
    },
    {
      title: "Mitsubishi",
      description: "really cool",
      rentalsNumber: 1,
      image:
        "http://2.bp.blogspot.com/-VDnGW0s3Bps/T9dP7TqTsuI/AAAAAAAAEEg/GmayAp-CBFA/s1600/car-Mitsubishi-wallpapers.jpg",
    },
    {
      title: "Mercedes",
      description: "really cool",
      rentalsNumber: 1,
      image:
        "https://www.publicdomainpictures.net/pictures/260000/velka/mercedes-benz-sports-car.jpg",
    },
    {
      title: "BMW",
      description: "really cool",
      rentalsNumber: 1,
      image:
        "https://hdwallpaperim.com/wp-content/uploads/2017/08/23/472083-BMW-car.jpg",
    },
  ]);

  return (
    <div className="App">
      <CardView cars={cars} />
    </div>
  );
}

export default App;
