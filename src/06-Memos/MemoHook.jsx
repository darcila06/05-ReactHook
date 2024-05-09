import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuf = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahí Vamos...");
  }

  return `${iterationNumber} iteraciones realizadas `;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setshow] = useState(true);
  const memorizedValue = useMemo(() => heavyStuf(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small> {counter}</small>
      </h1>
      <hr />

      <h4>{memorizedValue}</h4>

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button className="btn btn-primary" onClick={() => setshow(!show)}>
        Show/hide {JSON.stringify(show)}
      </button>
    </>
  );
};
