import React from "react";

const CarsContext = React.createContext({
  setCars: cars => {},
  cars: [],
  brands: [],
});

export default CarsContext;
