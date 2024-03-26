import InputAndConfirm from "./InputAndConfirm";
import React, { useState } from "react";
import psychologicalReplies from "./data";

export default function ConfirmButton({ handleSubmit }) {
  return (
    <>
      <button onClick={handleSubmit} className="submit-button" type="button">
        Share
      </button>
    </>
  );
}
