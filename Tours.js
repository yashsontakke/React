import React from "react";
import Tour from "./Tour.js";
export default function Tours({ tours, removeTour }) {
  return (
    <>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </>
  );
}
