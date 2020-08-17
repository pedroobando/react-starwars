import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Peoples } from "./components/Peoples";
import { Planets } from "./components/Planets";

export const App = () => {
  const [page, setPage] = useState("planets");
  return (
    <div className="App container">
      <h1 className="text-warning text-center">Star Wars Info</h1>
      <Navbar setPage={setPage} className="d-flex center-container" />
      <div className="content">{page === "planets" ? <Planets /> : <Peoples />}</div>
    </div>
  );
};
