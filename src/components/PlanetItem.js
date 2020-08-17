import React from "react";

export const PlanetItem = ({ name, population, terrain }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card mb-1">
        <div className="card-body">
          <h3 className="card-title text-warning">{name}</h3>
          <p className="card-text text-muted">Poblacion:&nbsp;&nbsp;{population}</p>
          <p className="card-text text-muted">Terreno:&nbsp;&nbsp;{terrain}</p>
        </div>
      </div>
    </div>
  );
};
