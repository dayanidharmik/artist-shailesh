/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";
import { useState } from "react";
import logo from "../../image/Vector.png";
import artst from "../../image/artst.png";
import "../Layout/Header.css";
import { Link, NavLink, useLocation } from "react-router-dom";
function Header() {
  const [active, setactive] = useState(1);
  const [toggle, settoggle] = useState(false);
  const loction = useLocation();
  const { pathname } = loction;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <nav
        className={` ${
          pathname === "/nft"
            ? "bg-NFT"
            : pathname === "/aboutUs"
            ? "bg_About_Us"
            : pathname === "/testimonial"
            ? "bg_testimonial"
            : pathname === "/gallery"
            ? "bg_Gallery"
            : "bg-home"
        }`}
      >
        {pathname === "/" && (
          <div>
            <div className="ag-sherlock-block">
              <div className="ag-format-container">
                <div className="ag-sherlock">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    viewBox="0 0 270 340"
                    className="ag-sherlock_smoke"
                  >
                    <mask
                      id="smokeBlick1"
                      x={0}
                      y={0}
                      width="100%"
                      height="100%"
                    >
                      <image
                        id="blickSmoke1"
                        mask="url(#smokeBlick1)"
                        xlinkHref="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/sherlock-smoking/images/smoke-1.png"
                        width={168}
                        height={238}
                        x={58}
                        y={92}
                        // onAnimationStart={10}
                      />
                    </mask>
                    <mask
                      id="smokeBlick2"
                      x={0}
                      y={0}
                      width="100%"
                      height="100%"
                    >
                      <image
                        id="blickSmoke1"
                        mask="url(#smokeBlick1)"
                        xlinkHref="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/sherlock-smoking/images/smoke-3.png"
                        width={124}
                        height={246}
                        x={69}
                        y={79}
                        dur="5s"
                        begin="0s"
                      />
                    </mask>
                    <image
                      id="blickSmoke1"
                      mask="url(#smokeBlick1)"
                      xlinkHref="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/sherlock-smoking/images/smoke-2.png"
                      width={143}
                      height={397}
                      x={83}
                      y="112.564"
                      style={{ opacity: "0.5" }}
                    >
                      <animate
                        attributeName="y"
                        attributeType="XML"
                        from={200}
                        to={100}
                        dur="10s"
                        begin="0s"
                        repeatCount="indefinite"
                      />
                    </image>
                    <image
                      id="blickSmoke1"
                      mask="url(#smokeBlick1)"
                      xlinkHref="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/sherlock-smoking/images/smoke-2.png"
                      width={143}
                      height={397}
                      x={83}
                      y="112.564"
                      style={{ opacity: "0.5" }}
                    >
                      <animate
                        attributeName="y"
                        attributeType="XML"
                        from={200}
                        to={-100}
                        dur="10s"
                        begin="0s"
                        repeatCount="indefinite"
                      />
                    </image>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    viewBox="0 0 270 340"
                    className="ag-sherlock_smoke2"
                  >
                    <mask
                      id="smokeBlick1"
                      x={0}
                      y={0}
                      width="100%"
                      height="100%"
                    >
                      <image
                        id="blickSmoke1"
                        mask="url(#smokeBlick1)"
                        xlinkHref="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/sherlock-smoking/images/smoke-1.png"
                        width={168}
                        height={238}
                        x={58}
                        y={92}
                        // onAnimationStart={10}
                      />
                    </mask>
                    <mask
                      id="smokeBlick2"
                      x={0}
                      y={0}
                      width="100%"
                      height="100%"
                    >
                      <image
                        id="blickSmoke1"
                        mask="url(#smokeBlick1)"
                        xlinkHref="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/sherlock-smoking/images/smoke-3.png"
                        width={124}
                        height={246}
                        x={69}
                        y={79}
                        dur="5s"
                        begin="0s"
                      />
                    </mask>
                    <image
                      id="blickSmoke1"
                      mask="url(#smokeBlick1)"
                      xlinkHref="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/sherlock-smoking/images/smoke-2.png"
                      width={143}
                      height={397}
                      x={83}
                      y="112.564"
                      style={{ opacity: "0.5" }}
                    >
                      <animate
                        attributeName="y"
                        attributeType="XML"
                        from={200}
                        to={100}
                        dur="10s"
                        begin="0s"
                        repeatCount="indefinite"
                      />
                    </image>
                    <image
                      id="blickSmoke1"
                      mask="url(#smokeBlick1)"
                      xlinkHref="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/sherlock-smoking/images/smoke-2.png"
                      width={143}
                      height={397}
                      x={83}
                      y="112.564"
                      style={{ opacity: "0.5" }}
                    >
                      <animate
                        attributeName="y"
                        attributeType="XML"
                        from={200}
                        to={-100}
                        dur="10s"
                        begin="0s"
                        repeatCount="indefinite"
                      />
                    </image>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===============Desktop size============== */}
        <div className=" flex  md:pt-5 justify-between  items-center container mx-auto p-5 font-Josefin_Sans">
          <div className="">
            <Link to="/" className="flex justify-center items-center gap-3">
              <div>
                <img src={artst} alt="" className="" />
              </div>
              <div>
                <img src={logo} alt="" className="md:w-fit w-60" />
              </div>
            </Link>
          </div>
          <div className=" gap-10   justify-end lg:flex hidden">
            <NavLink
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 hover:border-white hover:border-b-2 text-white  ${
                pathname === "/" && "border-b-2 border-white"
              }`}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 hover:border-white hover:border-b-2 text-white  ${
                pathname === "/aboutUs" && "border-b-2 border-white"
              }`}
              to="/aboutUs"
            >
              About
            </NavLink>
            <NavLink
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 hover:border-white hover:border-b-2 text-white  ${
                pathname === "/nft" && "border-b-2 border-white"
              }`}
              to="/nft"
            >
              NFT
            </NavLink>
            <NavLink
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 hover:border-white hover:border-b-2 text-white  ${
                pathname === "/testimonial" && "border-b-2 border-white"
              }`}
              to="/testimonial"
            >
              Testimonial
            </NavLink>

            <NavLink
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 hover:border-white hover:border-b-2 text-white  ${
                pathname === "/gallery" && "border-b-2 border-white"
              }`}
              to="/gallery"
            >
              Gallery
            </NavLink>
            <a
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 hover:border-white hover:border-b-2 text-white  ${
                pathname === "/contact" && "border-b-2 border-white"
              }`}
              href="#ContactUs"
            >
              Contact
            </a>
            <div className="flex  gap-4 ">
              <a
                href="https://twitter.com/shaileshtandel1?t=yiUWYOb-l23R1rqhQsUNbw&s=08"
                target="_blank"
                alt=""
              >
                <div>
                  <i className="fa-brands fa-twitter text-white hover:text-[#374C9F] text-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-1000"></i>
                </div>
              </a>
              <a
                href="https://www.instagram.com/tandel2190/"
                target="_blank"
                alt=""
              >
                <div>
                  <i className="fa-brands fa-instagram text-white hover:text-[#374C9F] text-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-1000"></i>
                </div>
              </a>
              <a
                href="https://www.facebook.com/shailesh.tandel.71"
                target="_blank"
                alt=""
              >
                <div>
                  <i className="fa-brands fa-facebook-f  text-white hover:text-[#374C9F] text-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-1000"></i>
                </div>
              </a>
            </div>
          </div>
          <div className="  lg:hidden px-5 ">
            <i
              className={`${
                toggle ? "hidden" : "block fa-solid fa-bars text-white text-3xl"
              }`}
              onClick={() => settoggle(!toggle)}
            ></i>
            {toggle && (
              <i
                className="fa-solid fa-xmark text-3xl  fixed top-2 right-10 z-50 mt-5"
                onClick={() => settoggle(!toggle)}
              ></i>
            )}
          </div>
        </div>
        {/* ===============Mobile size============== */}

        {toggle && (
          <>
            <div className="fixed right-0 left-0 flex flex-col items-center justify-center lg:hidden gap-5 bg-white z-10 h-[100vh] top-0 font-Josefin_Sans">
              <div
                className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 hover:border-white hover:border-b-2 text-black  ${
                  active === 1 ? "border-b-2 border-black  " : "deActive"
                }`}
                onClick={() => {
                  setactive(1);
                  settoggle(false);
                }}
              >
                <Link to="/">Home</Link>
              </div>

              <div
                className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 hover:border-white hover:border-b-2 text-black ${
                  active === 2 ? "border-b-2 border-black" : "deActive"
                }`}
                onClick={() => {
                  setactive(2);
                  settoggle(false);
                }}
              >
                <Link to="/aboutUs">About</Link>
              </div>
              <div
                className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 hover:border-white hover:border-b-2 text-black ${
                  active === 3 ? "border-b-2 border-black" : "deActive"
                }`}
                onClick={() => {
                  setactive(3);
                  settoggle(false);
                }}
              >
                <Link to="/nft">NFT</Link>
              </div>
              <div
                className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 hover:border-white hover:border-b-2 text-black ${
                  active === 4 ? "border-b-2 border-black" : "deActive"
                }`}
                onClick={() => {
                  setactive(4);
                  settoggle(false);
                }}
              >
                <Link to="/testimonial">Testimonial</Link>
              </div>
              <div
                className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 hover:border-white hover:border-b-2 text-black ${
                  active === 5 ? "border-b-2 border-black" : "deActive"
                }`}
                onClick={() => {
                  setactive(5);
                  settoggle(false);
                }}
              >
                <Link to="/gallery">Gallery</Link>
              </div>
              <div
                className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 hover:border-white hover:border-b-2 text-black ${
                  active === 6 ? "border-b-2 border-black" : "deActive"
                }`}
                onClick={() => {
                  setactive(6);
                  settoggle(false);
                }}
              >
                <a href="/#">Contact</a>
              </div>
              <div className="flex  gap-4 ">
                <a
                  href="https://twitter.com/shaileshtandel1?t=yiUWYOb-l23R1rqhQsUNbw&s=08"
                  target="_blank"
                  alt=""
                >
                  <div>
                    <i className="fa-brands fa-twitter text-black hover:text-[#374C9F] text-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-1000"></i>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/tandel2190/"
                  target="_blank"
                  alt=""
                >
                  <div>
                    <i className="fa-brands fa-instagram text-black hover:text-[#374C9F] text-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-1000"></i>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/shailesh.tandel.71"
                  target="_blank"
                  alt=""
                >
                  <div>
                    <i className="fa-brands fa-facebook-f  text-black hover:text-[#374C9F] text-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-1000"></i>
                  </div>
                </a>
              </div>
            </div>
          </>
        )}
        {pathname === "/" && (
          <div className=" flex flex-col justify-start text-center lg:pt-[383px] pt-[100px] pb-[150px] lg:pb-[422px] gap-16 p-5">
            <div className="flex flex-col gap-5 text-white">
              <p className="font-bold xl:text-[65px] md:text-5xl text-4xl font-Josefin_Sans  ">
                I Paint The Stories That My Subject <br /> Invokes In My
                Imagination.
                {/* Art is all about Perspective */}
              </p>

              <p className="font-Roboto text-2xl">DISCOVER OUR WORLD OF ART</p>
            </div>
            <div className="flex justify-center  items-center gap-3 font-Roboto">
              <Link to="/aboutUs">
                <p className="rounded-tr-3xl rounded-bl-3xl hover:bg-[#132D95] text-[#132D95] px-5 py-3  transition ease-in-out delay-150 bg-white hover:text-white  hover:-translate-y-1 hover:scale-110 duration-700">
                  About Artist
                </p>
              </Link>
              <Link to="/nft">
                <p className="rounded-tr-3xl rounded-bl-3xl hover:bg-[#132D95] text-[#132D95] px-10 py-3   transition ease-in-out delay-150 bg-white hover:text-white  hover:-translate-y-1 hover:scale-110 duration-700">
                  NFT
                </p>
              </Link>
            </div>
          </div>
        )}
        {pathname === "/aboutUs" && (
          <div>
            <p className="text-center text-white font-bold xl:text-[65px] md:text-5xl text-4xl font-Josefin_Sans lg:pt-[283px] pt-[100px] pb-[150px] lg:pb-[322px] ">
              Deep Dive in Artist's Background
            </p>
          </div>
        )}
        {pathname === "/nft" && (
          <div>
            <p className="text-center text-white font-bold xl:text-[65px] md:text-5xl text-4xl font-Josefin_Sans lg:pt-[383px] pt-[100px] pb-[150px] lg:pb-[422px] ">
              NFT
            </p>
          </div>
        )}
        {pathname === "/testimonial" && (
          <div>
            <p className="text-center text-white font-bold xl:text-[65px] md:text-5xl text-4xl font-Josefin_Sans lg:pt-[383px] pt-[100px] pb-[150px] lg:pb-[422px] ">
              - CLIENT STORIES -
            </p>
          </div>
        )}
        {pathname === "/gallery" && (
          <div>
            <p className="text-center text-white font-bold xl:text-[65px] md:text-5xl text-4xl font-Josefin_Sans lg:pt-[383px] pt-[100px] pb-[150px] lg:pb-[422px] ">
              Gallery
            </p>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
