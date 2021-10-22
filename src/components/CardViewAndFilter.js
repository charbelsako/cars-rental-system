import React, { useState } from "react";
import Filter from "./Filter";
import CardView from "./CardView";
import CarsContext from "../context/cars";
import { getUniqueBrands } from "./utils";

const CardViewAndFilter = () => {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);

  return (
    <CarsContext.Provider
      value={{
        cars: cars,
        setCars: setCars,
        brands: getUniqueBrands(cars),
        loading: loading,
        setLoading: setLoading,
      }}>
      <Filter />
      <CardView />
    </CarsContext.Provider>
  );
};

export default CardViewAndFilter;
