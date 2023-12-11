import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour, refresh }) => {
  return (
    <section>
      {tours.length === 0 ? (
        <div className="title">
          <h2>No tours left</h2>
          <div className="title-underline"></div>
          <button
            style={{ marginTop: "2rem" }}
            type="button"
            onClick={() => refresh()}
            className="btn"
          >
            refresh
          </button>
        </div>
      ) : (
        <div className="title">
          <h2>Our tours</h2>
          <div className="title-underline"></div>
        </div>
      )}
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
