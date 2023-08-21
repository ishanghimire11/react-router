import React from "react";
import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div>
      404
      <Link
        className="block px-4 py-2 mx-auto mt-8 text-white rounded-md bg-slate-700 w-fit"
        to={".."}
      >
        Go to home page
      </Link>
    </div>
  );
};

export default NotFound404;
