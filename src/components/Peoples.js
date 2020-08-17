import React from "react";
import { useQuery } from "react-query";
import { PeopleItem } from "./PeopleItem";

const fetchPeoples = async () => {
  const resJson = await fetch("https://swapi.dev/api/people");
  return resJson.json();
};

export const Peoples = () => {
  const { data, status } = useQuery("peoples", fetchPeoples);
  console.log(data);

  return (
    <div className="mx-auto my-3">
      {/* <p>{status}</p> */}

      {status === "loading" && <div>Loading data...</div>}

      {status === "error" && <div>Error fething data...</div>}

      {status === "success" && (
        <div className="row my-2">
          {data.results.map((people) => (
            <PeopleItem key={people.name} {...people} />
          ))}
        </div>
      )}
    </div>
  );
};
