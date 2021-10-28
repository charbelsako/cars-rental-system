import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";

const CarDetails = () => {
  const showUsersFrom = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;

    setShownUsers(users.slice(offset, offset + perPage));
    setCurrentPage(e.selected);
  };

  // const { id } = useParams();
  const {
    state: {
      car: { title, image, price, rentalNumber, model, description, users },
    },
  } = useLocation();

  const [, setCurrentPage] = useState(1);
  const [perPage] = useState(2);
  const [pageCount] = useState(Math.ceil(users.length / perPage));
  const [shownUsers, setShownUsers] = useState(users.slice(0, perPage));

  return (
    <div className="container">
      {/* <p>{id}</p> */}
      <p>Name of the car: {title}</p>
      <p>Rental Price: {price}</p>
      <p>Rental Number: {rentalNumber}</p>
      <p>Year made: {model}</p>
      <p>Description: {description}</p>
      <img src={image} alt="the car" width="300" />
      <h3 className="mt-5">Previous Renters:</h3>
      {shownUsers.map((user, index) => (
        <React.Fragment key={index}>
          <p>USERNAME: {user.name}</p>
        </React.Fragment>
      ))}
      <div className="row justify-content-center">
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={showUsersFrom}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default CarDetails;
