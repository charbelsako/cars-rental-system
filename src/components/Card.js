import React from "react";

const Card = props => {
  return (
    <div className="card col-3 m-2 ">
      <img src={props.data.image} alt="" className="card-img-top" />
      <div className="card-body">
        <h4>{props.data.title}</h4>
        {props.showRentals ? <p>{props.data.rentalsNumber}</p> : null}
      </div>
    </div>
  );
};

export default Card;
