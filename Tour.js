import React from "react";

export default function Touch({ id, name, info, image, price, removeTour }) {
  return (
    <>
      <h1>{name}</h1>
      <p>{info}</p>
      <img src={image} alt="not found"></img>
      <h3>{price}</h3>
      <button onClick={() => removeTour(id)}>not intrested</button>
    </>
  );
}
