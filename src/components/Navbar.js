import React from "react";

export const Navbar = ({ setPage }) => {
  return (
    <nav className="row d-flex justify-content-center">
      <button
        className="btn btn-outline-primary mx-2 px-sm-3 px-md-5"
        onClick={() => setPage("planets")}
      >
        Planets
      </button>
      <button
        className="btn btn-outline-primary mx-2 px-sm-3 px-md-5"
        onClick={() => setPage("peoples")}
      >
        People
      </button>
    </nav>
  );
};
