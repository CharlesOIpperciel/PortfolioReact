import React from "react";

function Title({ children, id }) {
  return (
    <h1
      id={id && id}
      className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 texts-stone-900"
    >
      {children}
    </h1>
  );
}

export default Title;
