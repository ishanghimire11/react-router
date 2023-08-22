import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();

    return (
    <div>
      <h1>Error Occured. <p>{error.message}- {error.status} error</p></h1>
    </div>
  );
};

export default Error;
