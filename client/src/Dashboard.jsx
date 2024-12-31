import { Outlet, NavLink } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";

export default function Dashboard() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Navbar2></Navbar2>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}
