import React from "react";

export const PeopleItem = ({ name, gender, birth_year }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card mb-1">
        <div className="card-body">
          <h3 className="card-title text-warning">{name}</h3>
          <p className="card-text text-muted">Genero:&nbsp;&nbsp;{gender}</p>
          <p className="card-text text-muted">
            Nacimiento / Creacion:&nbsp;&nbsp;{birth_year}
          </p>
        </div>
      </div>
    </div>
  );
};
