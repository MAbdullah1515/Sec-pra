import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Driver from "./pages/Driver";
import Warehouse from "./pages/Warehouse";
import Charge from "./pages/Charge";
import Earning from "./pages/Earning";
import Incomingpack from "./pages/Incomepack";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/customer" element={<Customer />} />
            <Route exact path="/driver" element={<Driver />} />
            <Route exact path="/warehouse" element={<Warehouse />} />
            <Route exact path="/charge" element={<Charge />} />
            <Route exact path="/earning" element={<Earning />} />
            <Route exact path="/income" element={<Incomingpack />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
