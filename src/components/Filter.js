import React, { useContext } from "react";
import CarsContext from "../context/cars";

const Filter = () => {
  const { cars, brands, setCarsSearch } = useContext(CarsContext);

  const filterCars = ({ target: { value } }) => {
    if (value === "") {
      setCarsSearch([...cars]);
    } else {
      setCarsSearch([...cars.filter((car) => car.title === value)]);
    }
  };

  const searchCars = (searchText) => {
    console.log(searchText);
    if (searchText === "") {
      setCarsSearch([...cars]);
    } else {
      setCarsSearch([...cars.filter((value) => value.title === searchText)]);
    }
  };

  // render a filter dropdown or something of the like
  return (
    <div className="mb-3 row justify-content-center">
      <div className="col-12 col-md-6 m-1">
        <select onChange={filterCars} className="w-100">
          <option value="">All</option>
          {brands.map((brand) => (
            <option
              type="checkbox"
              className="d-inline brands"
              id="brands"
              value={brand}
            >
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
          onChange={(e) => searchCars(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Filter;
