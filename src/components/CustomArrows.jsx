import React from "react";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="custom-next-arrow text-dark dark:text-light"
      onClick={onClick}
    >
      <svg
        className="w-full h-full"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
      </svg>
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="custom-prev-arrow text-dark dark:text-light"
      onClick={onClick}
    >
      <svg
        className="w-full h-full"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.41 7.41L10.83 12l4.58 4.59L14 18l-6-6 6-6z" />
      </svg>
    </div>
  );
};

export { NextArrow, PrevArrow };


