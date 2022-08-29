import "./styles.css";
import React, { useCallback, useEffect, useState } from "react";
import Tours from "./Tours.js";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";
export default function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  };

  const fetchTours = useCallback(async () => {
    setLoading(true);
    try {
      let response = await fetch(url);
      let tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  if (tours.length === 0) {
    return <button onClick={() => fetchTours()}>refresh Toures</button>;
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}
