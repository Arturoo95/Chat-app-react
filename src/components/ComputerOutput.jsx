import React from "react";

export default function ComputerOutput({ data }) {
  return (
    <>
      <textarea
        value={data}
        className="computer-output-part"
        readOnly
      ></textarea>
    </>
  );
}
