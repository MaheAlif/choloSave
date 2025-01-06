import { Outlet, NavLink } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";
import Navbar3 from "./Navbar3";
import { useContext } from "react";
import ContextProvider, { userContext } from "./Provider/ContextProvider";

export default function Dashboard() {
  const {user} = useContext(userContext)
  console.log("User in dashboard : ",user);
  return (
    <div>
      {user && <Navbar />}
      {!user && <Navbar2 />}
      
      {/* <Navbar2></Navbar2> */}
      {/* <Navbar3></Navbar3> */}
      <Outlet />
      <Footer></Footer>
    </div>
  );
}
