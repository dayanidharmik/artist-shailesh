import React, { useEffect } from "react";
import nftcollation from "../../../image/NFTCollections.png";
import AOS from "aos";
import { Link } from "react-router-dom";
import "../../Layout/Header.css";
function About() {
  AOS.init();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div
      className="container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-20 md:mt-40 mt-20 p-5"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="flex lg:justify-center justify-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-1000">
        <img src={nftcollation} alt="" className=" border-" />
      </div>

      <div className="flex flex-col md:text-center lg:text-start  justify-center items-center md:p-0 ">
        <div className="flex flex-col justify-center lg:items-start  items-center">
          {" "}
          <p className="font-Josefin_Sans font-bold xl:text-6xl md:text-5xl text-4xl text-[#374C9F]">
            NFT Collections
          </p>
          <p className="mt-5 text-4xl font-Roboto"> </p>
          <p className="mt-7 lg:max-w-md font-Roboto text-[white]"></p>
          <p className="mt-7 lg:max-w-md text-justify font-Roboto text-[white]">
            You can explore my collections of arts in the form of Non Fungible
            Tokens (NFTs).
          </p>
          <Link to="/nft">
            <button className="mt-9  hover:shadow-md hover:shadow-[#374C9F] text-lg leading-none text-white py-4 px-10 bg-[#374C9F]  rounded-tr-3xl rounded-bl-3xl transition ease-in-out delay-150 hover:bg-white hover:text-black  hover:-translate-y-1 hover:scale-110 duration-700  focus:outline-none">
              More NFTs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
