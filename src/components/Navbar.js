import React from "react";

export const Navbar = ({ setPage }) => {
  return (
    <nav className="row d-flex justify-content-center">
      <button className="btn btn-outline-primary mx-2" onClick={() => setPage("planets")}>
        Planets
      </button>
      <button className="btn btn-outline-primary mx-2" onClick={() => setPage("peoples")}>
        People
      </button>
    </nav>
  );
};
