import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app";
import "./index.css";
import Dashboard from "./Dashboard.jsx";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register.jsx";
import CreateGroup from "./Group/CreateGroup.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import MyGroups from "./Group/MyGroups.jsx";
import JoinedGroups from "./Group/JoinedGroups.jsx";
import GroupDashboard from "./Group/ViewGroupData/GroupDashboard.jsx";
import ContextProvider from "./Provider/ContextProvider.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <ThemeProvider>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Dashboard />}>
            <Route path="" element={<App />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register></Register>} />
            <Route path="createGroup" element={<CreateGroup></CreateGroup>} />
            <Route path="myGroups" element={<MyGroups></MyGroups>} />
            <Route path="joinedGroups" element={<JoinedGroups></JoinedGroups>} />
            <Route path="/groupDashboard/:id" element={<GroupDashboard></GroupDashboard>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </ThemeProvider>
);
