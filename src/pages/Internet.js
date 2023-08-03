import React, { useEffect, useState } from "react";
import { api } from "./../config/api";

export default function Internet() {
  const [searchFor, setSearchFor] = useState("");
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getData = () => {
    setIsLoading(true);
    api
      .get("/", {
        params: {
          name: searchFor,
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        setIsLoading(false);
        alert(err.message);
      });
  };

  return (
    <div className="px-5">
      <div className="card px-3 d-flex justify-content-between mx-5">
        <h1>Nationality Search</h1>

        <div class="form-inline d-flex gap-3" >
          <input
            onChange={(e) => {
              setSearchFor(e.target.value);
            }}
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            // onChange={() => searchItems()}
          />
          <button class="btn btn-outline-success my-2 my-sm-0" onClick={()=> getData()}>
            Search
          </button>
        </div>

        {isLoading?<h2>Loading...</h2>:
        <>
        <p>Searched for: {searchFor}</p>
        <p>Total Search Results: {data?.count}</p>
        <div className="d-flex row">
          <h2>Countries:</h2>
          <ul className="nav row">
            {data?.country.map((item) => (
              <li key={item.country_id} className="mx-3 p-2 ">
                {item.country_id + ": " + item.probability}
              </li>
            ))}
          </ul>
        </div>
        </>}
      </div>
    </div>
  );
}
