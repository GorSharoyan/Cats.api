import React from "react";

export default function Button({ buttonHandler, buttonText }) {
  return (
    <div>
      <button onClick={buttonHandler}>{buttonText}</button>
    </div>
  );
}
