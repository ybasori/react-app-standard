import React, { useState } from "react";

import Navbar from "@/Components/Organisms/Navbar/Navbar";

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <h1>Home</h1>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </>
  );
};

export default Home;
