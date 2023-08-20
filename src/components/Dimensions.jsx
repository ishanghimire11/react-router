import React from "react";
import { useOutletContext } from "react-router-dom";

const Dimensions = () => {
  const [details] = useOutletContext();

  return (
    <div>
      {details && (
        <div>
          <p>Weight: {details.weight}</p>

          <p>Height: {details.height}</p>
        </div>
      )}
    </div>
  );
};

export default Dimensions;
