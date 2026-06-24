import React from "react";

const conditional = () => {
  const isLoading = true;
  const isError = false;

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <h1>error loaded</h1>;
  }
  return <div>Conditional</div>;
};

export default conditional;
