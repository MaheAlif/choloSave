import React from "react";
import CholoSaveLogo from "/CholoSaveLogo4.png";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
          <img className="max-w-36" src={CholoSaveLogo} alt="" />
          <p>
            <span className="text-xl font-semibold text-gray-500 text-center">CholoSave</span>
            <br />
            Empowering groups to save, invest, and achieve <br />shared financial goals seamlessly <br />
            <br />
            <span className="text-sm font-bold">Copyright © 2020 Landify UI Kit. <br />
            All rights reserved</span>
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
