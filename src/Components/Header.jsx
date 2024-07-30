import React, { useContext } from "react";
import indigo from "../assets/indigo.jpg";
import "../Header.css";
import { Outlet, Link } from "react-router-dom";
import { Store } from "../store/store";

function Header() {
  const store = useContext(Store);
  return (
    <>
      <nav className="imp navbar sticky-top">
        <div className="container-fluid">
          <Link to="/">
            <img
              className="ms-4"
              src={indigo}
              alt="logo"
              width="125"
              height="40"
            />
          </Link>
          <div className="float-end">
            <Link className="note mx-4" to="/notification">
              <span className="text-light fs-4 ">
                Notification ({store.note})
              </span>
            </Link>
            {/* <span className=" text-light fs-4">Admin Login</span> */}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Header;
