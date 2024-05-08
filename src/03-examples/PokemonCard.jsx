import { useLayoutEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
export const PokemonCard = ({ id, name, sprites = [] }) => {
  const nameRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = nameRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, []);

  return (
    // <section style={{ display: 200 }}>
    <section style={{ display: "flex" }}>
      <h2 className="text-capitalize" ref={nameRef}>
        #{id} - {name}
      </h2>
      {/* imagenes */}
      <div>
        {sprites.map((image) => (
          <img key={image} src={image} alt={name}></img>
        ))}
      </div>

      <code> {JSON.stringify(boxSize)}</code>
    </section>
  );
};
