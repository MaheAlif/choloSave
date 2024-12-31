import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app";
import "./index.css";
import Dashboard from "./Dashboard.jsx";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<Dashboard />}>
        <Route path="" element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register></Register>} />
      </Route>
    </Routes>
  </BrowserRouter>
);