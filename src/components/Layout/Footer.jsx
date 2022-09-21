/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../Layout/Header.css";
function Footer() {
  return (
    <>
      <div className="bg-footer">
        <div className="font-Roboto container mx-auto mt-32 items-center  pt-[161px] pb-[71px] p-5">
          <div className="flex lg:flex-row flex-col justify-between items-center text-center lg:text-start text-white gap-10">
            <div>
              <p className="text-3xl font-medium">About Us</p>
              <p className="lg:max-w-xl max-w-xl my-5 text-lg font-medium">
                Myself Artist Shailesh Tandel from Surat City,Gujarat,India.
                Born in Rajpipla [1969] Gujarat.
              </p>
            </div>
            <div>
              <div className="text-3xl">Newsletter</div>
              <p className="my-3 text-xl">Stay update with our latest</p>
              <div className="flex justify-center">
                <input
                  type="text"
                  name=""
                  placeholder="Enter Email"
                  className="text-sm px-8 py-1 outline-none text-black rounded-l-lg w-44 md:w-fit"
                />
                <i className="fa-sharp  fa-solid fa-arrow-right bg-[#374C9F] px-4 py-[4.8px] text-2xl"></i>
              </div>
            </div>
          </div>
          <p className="text-xl text-center text-white mt-10">
            Copyright ©2022 All rights reserved | This template is made with by
            Colorlib
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
