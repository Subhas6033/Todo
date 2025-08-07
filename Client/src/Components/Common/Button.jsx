import React, { Children } from "react";

const Button = ({ className = "", children, ...prop }) => {
  return (
    <button
      className={`bg-slate-300 text-black rounded-md border hover:scale-105 transition duration-200 ease-in-out
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}`}
      {...prop}
    >
      {children}
    </button>
  );
};

export default Button;
