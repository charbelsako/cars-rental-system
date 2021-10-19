import React, { useContext } from "react";
import CarsContext from "../context/cars";

const Filter = () => {
  const { setCars, cars, brands } = useContext(CarsContext);

  const filterCars = ({ target: { value } }) => {
    for (let i = 0; i < cars.length; i++) {
      if (value !== cars[i].title && value !== "") {
        console.log("do not show");
        cars[i].visible = false;
      } else {
        cars[i].visible = true;
      }
    }
    setCars([...cars]);
  };

  const searchCars = searchText => {
    for (let i = 0; i < cars.length; i++) {
      if (searchText !== cars[i].title && searchText !== "") {
        cars[i].visible = false;
      } else {
        cars[i].visible = true;
      }
    }
    const visibleCars = cars.filter(car => car.visible);
    if (visibleCars.length === 0) {
      const allCars = cars.map(car => {
        car.visible = true;
        return car;
      });
      setCars([...allCars]);
      return 0;
    }

    setCars([...cars]);
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
