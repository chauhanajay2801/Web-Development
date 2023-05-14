import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("Initial");

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input type="email" placeholder="Email" />
      </form>
      <button onClick={() => console.log(name)}>pressed</button>
      <p>{name}</p>
    </div>
  );
};

export default Contact;
