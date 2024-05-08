import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: "strider",
    email: "danniel@google.com",
  });

  const { username, email } = formState;
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({ ...formState, [name]: value });
  };

//   useEffect(() => console.log("UseEffect"), []);

//   useEffect(() => console.log("FormState change"), [formState]);

  useEffect(() => console.log("Email change"), [email]);

  return (
    <>
      <h1>Formulario Simple</h1>

      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="example@example.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "strader" && <Message />}
    </>
  );
};
