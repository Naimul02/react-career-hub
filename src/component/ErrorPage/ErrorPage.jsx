import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Opps!!!</h2>
      <Link to="/" className="text-blue-600 underline">
        Back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
