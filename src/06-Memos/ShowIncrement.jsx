import { memo } from "react";

// eslint-disable-next-line react/display-name
export const ShowIncrement = memo(({ increment }) => {
  console.log("Me dibuje");
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment();
      }}
    >
      Incrementar
    </button>
  );
})