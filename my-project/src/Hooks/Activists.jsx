import React from "react";
import useFetch from "./useFetch";
export default function Activists() {
  const url = "https://example-data.draftbit.com/activists?_limit=10";
  const { isLoading, data, error } = useFetch(url);
  console.log(data);
  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (error) {
    console.log(error);
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {data.map((data) => {
        return (
          <div key={data.id}>
            <h1>{data.person}</h1>
            <p>{data.description}</p>
            <p>{data.dateOfBirth}</p>
          </div>
        );
      })}
    </div>
  );
}
