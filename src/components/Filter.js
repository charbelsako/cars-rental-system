import React, { useContext, useState } from "react";
import CarsContext from "../context/cars";

const Filter = () => {
  const { setCars, cars, brands } = useContext(CarsContext);

  const [carsSearch, setCarsSearch] = useState([...cars]);

  const filterCars = ({ target: { value } }) => {
    setCars([...cars.filter(value => value.title === value)]);
    console.log(cars);
  };

  const searchCars = searchText => {
    setCars([...cars.filter(value => value.title === value)]);
    console.log(cars);
  };

  // render a filter dropdown or something of the like
  return (
    <div className="mb-3 row justify-content-center">
      <div className="col-12 col-md-6 m-1">
        <select onChange={filterCars} className="w-100">
          <option value="">All</option>
          {brands.map(brand => (
            <option
              type="checkbox"
              className="d-inline brands"
              id="brands"
              value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div className="col-12 col-md-6 m-1">
        <input
          type="search"
          className="form-control"
          name="search"
          id="search"
          placeholder="Search for your perfect car"
          onChange={e => searchCars(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Filter;
