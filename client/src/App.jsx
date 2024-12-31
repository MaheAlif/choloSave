import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Vision from "./Vision";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <Home></Home>
      <Vision></Vision>
    </>
  );
}

export default App;
