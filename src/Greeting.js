import React, { useState } from "react";

const Greeting = () => {
  const [name, setName] = useState("");

  return (
    <>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
      </div>
      <h2>Hello {name}</h2>
    </>
  );
};

export default Greeting;
