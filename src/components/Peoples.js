import React, { useState, useCallback } from "react";
import { usePaginatedQuery } from "react-query";
import { PeopleItem } from "./PeopleItem";
import { Paginate } from "./Paginate";

const fetchPeoples = async (key, page) => {
  const resJson = await fetch(`https://swapi.dev/api/people?page=${page}`);
  return resJson.json();
};

export const Peoples = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, status } = usePaginatedQuery(["peoples", page], fetchPeoples, {
    // staleTime: 0,
    // cacheTime: 1000,
    // onSuccess: (e) => console.log("Data cargada sin error"),
  });

  const handleClickPage = useCallback((pag) => {
    setPage(pag);
    // console.log(latestData);
  }, []);

  return (
    <div className="mx-auto my-3">
      {/* <p>{status}</p> */}

      {status === "loading" && <div>Loading data...</div>}

      {status === "error" && <div>Error fething data...</div>}

      {status === "success" && (
        <>
          <div className="row d-flex justify-content-center">
            <Paginate
              activepage={page}
              itemxpage={10}
              totalitem={resolvedData.count}
              handlePage={handleClickPage}
            />
          </div>

          <div className="row my-2">
            {resolvedData.results.map((planet) => (
              <PeopleItem key={planet.name} {...planet} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
