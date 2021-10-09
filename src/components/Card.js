import React from "react";

const Card = props => {
  return (
    <div className="">
      <img
        src={props.data.image}
        alt=""
        className="card-img-top"
        style={{ width: "300px", margin: "0px auto" }}
      />
      <div className="card-body">
        <h4 className="card-title">{props.data.title}</h4>
        <p className="card-text">{props.data.description}</p>
      </div>
    </div>
  );
};

export default Card;
