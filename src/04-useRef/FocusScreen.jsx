import { useRef } from "react";

export const FocusScreen = () => {
  
    const inputRef = useRef();
    

    const onClick = () => {
    // document.querySelector("input").select();
        inputRef.current.select();
  };
  return (
    <>
      <h1>Focus Screen</h1>

      <hr />

      <input
        type="text"
        name="name"
        placeholder="Ingrese su nombre"
        className="form-control"
        ref={inputRef}
      />
      <input
        type="text"
        name="name"
        placeholder="Ingrese su nombre"
        className="form-control"
      />
      <input
        type="text"
        name="name"
        placeholder="Ingrese su nombre"
        className="form-control"
      />
      <input
        type="text"
        name="name"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <button className="btn btn-primary mt-2" onClick={onClick}>
        {" "}
        Set Focus{" "}
      </button>
    </>
  );
};
