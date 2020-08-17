import React from "react";
import { useQuery } from "react-query";
import { PlanetItem } from "./PlanetItem";

const fetchPlanets = async () => {
  const resJson = await fetch("https://swapi.dev/api/planets");
  return resJson.json();
};

export const Planets = () => {
  const { data, status } = useQuery("planets", fetchPlanets);
  console.log(data);

  return (
    <div className="mx-auto my-3">
      {/* <p>{status}</p> */}

      {status === "loading" && <div>Loading data...</div>}

      {status === "error" && <div>Error fething data...</div>}

      {status === "success" && (
        <div className="row my-2">
          {data.results.map((planet) => (
            <PlanetItem key={planet.name} {...planet} />
          ))}
        </div>
      )}
    </div>
  );
};
