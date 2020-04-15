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
      <div className="secondsidenav">
        <div className={openCloseStyle}>
          <MDBContainer>
            <MDBBtn className="Button" color="dark">
              <MDBRow>
                <MDBCol sm="2">
                  <MDBIcon icon={sideNavOpenIcon} />
                </MDBCol>
                <MDBCol sm="8">This is a cat</MDBCol>
              </MDBRow>
            </MDBBtn>
            <MDBBtn className="Button" color="dark">
              <MDBRow>
                <MDBCol sm="2">
                  <MDBIcon icon={sideNavOpenIcon} />
                </MDBCol>
                <MDBCol sm="8">This is a cat</MDBCol>
              </MDBRow>
            </MDBBtn>

            <MDBBtn onClick={sideNavOpenEvent} className="Button" color="dark">
              <MDBRow>
                <MDBCol sm="2">
                  <MDBIcon icon={sideNavOpenIcon} />
                </MDBCol>
                <MDBCol sm="8">Close</MDBCol>
              </MDBRow>
            </MDBBtn>
          </MDBContainer>
        </div>
      </div>
    </>
  );
};

export default SecondSideNav;
