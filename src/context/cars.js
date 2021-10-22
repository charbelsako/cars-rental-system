import React from "react";

const CarsContext = React.createContext({
  setCars: cars => {},
  cars: [],
  brands: [],
  loading: true,
  setLoading: () => {},
});

export default CarsContext;
