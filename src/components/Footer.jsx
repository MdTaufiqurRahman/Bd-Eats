import React from "react";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";

export const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-5"
        style={{ width: "90%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <p className="d-flex align-items-center p-0 text-dark">
              <span className="h5 font-weight-bold"> BD Eats</span>
            </p>
            <p className="my-3" style={{ width: "250px" }}>
              We are creating High Quality Foods for you Help us in serving you
              better.
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="google" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              About Us
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <p>Resources</p>
              <p>About Us</p>
              <p>Contact</p>
              <p>Blog</p>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Store Locator
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <p>Dhaka</p>
              <p>Chittagong</p>
              <a className="no-underline text-black" href="tel:+8801718003362">+8801718003362</a>
              
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Order Now
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <p className="">Pizzas</p>
              <p className="">Pasta</p>
              <p className="">Burgers</p>
              <a className='no-underline text-black' href="tel:+8801521416033">+8801521416033</a>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <p
          className="text-center mt-5"
          href="mailto:taufiqur.anik.bd@gmail.com"
        >
          &copy; BD Eats, 2022. All rights reserved.
        </p>
      </CDBBox>
    </CDBFooter>
  );
};
export default Footer;
