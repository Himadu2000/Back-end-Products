import React, { useState } from "react";
import { MDBBtn, MDBIcon, MDBContainer, MDBCol, MDBRow } from "mdbreact";
import "./SecondSideNav.css";

const SecondSideNav = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [sideNavOpenIcon, setSideNavOpenIcon] = useState("angle-double-right");
  const [openCloseStyle, setOpenCloseStyle] = useState("close");
  function sideNavOpenEvent() {
    if (sideNavOpen) {
      setOpenCloseStyle("close");
      setSideNavOpenIcon("angle-double-left");
      setSideNavOpen(false);
    } else {
      setOpenCloseStyle("open");
      setSideNavOpenIcon("angle-double-right");
      setSideNavOpen(true);
    }
  }
  return (
    <>
      <div className="secondSidenav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </div>
    </>
  );
};

export default SecondSideNav;
