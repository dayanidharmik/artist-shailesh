/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import om from "../../../image/om.png";
import lovemaking from "../../../image/lovemaking.png";
import bollywoood from "../../../image/bollywoood.png";
import amitabhkaka from "../../../image/amitabhkaka.png";
import bhuriyo from "../../../image/bhuriyo.png";
import vip from "../../../image/vip.png";
import munabhai from "../../../image/munabhai.png";
import sgavmi from "../../../image/sgavmi.png";
import glxyi from "../../../image/glxyi.png";
import yoyo from "../../../image/yoyo.png";
import yeeboy from "../../../image/yeeboy.png";
import modikaka from "../../../image/modikaka.png";
import AOS from "aos";
import "../../Layout/Header.css";
import axios from "axios";
import { Link } from "react-router-dom";
function Team() {
  AOS.init();

  const team = [
    {
      id: 0,
      img: lovemaking,
      name: "Kamkala",
      link: "/gallery#01kamkala",
    },
    {
      id: 1,
      img: om,
      name: "Om creation",
      link: "/gallery#02om-creation",
    },

    {
      id: 2,
      img: bollywoood,
      name: "Bollywood director ",
      link: "/gallery#03bollywood-directors",
    },
    {
      id: 3,
      img: amitabhkaka,
      name: "Celebrity as a child",
      link: "/gallery#04celebrity-as-child",
    },
    {
      id: 4,
      img: bhuriyo,
      name: "BNI directors",
      link: "/gallery#05bni-director",
    },
    {
      id: 5,
      img: vip,
      name: "VIP person",
      // link: "/gallery#VIP",
    },
    {
      id: 6,
      img: munabhai,
      name: "Cabinate minister 2018",
      link: "/gallery#07cabinet-minister-2018",
    },
    {
      id: 7,
      img: sgavmi,
      name: "Freedom fighter",
      link: "/gallery#08freedom-fighter",
    },
    {
      id: 8,
      img: glxyi,
      name: "Galaxy",
      link: "/gallery#09gallexy",
    },
    {
      id: 9,
      img: yoyo,
      name: "Art gallery owner",
      link: "/gallery#10art-gallery-owner",
    },
    {
      id: 10,
      img: yeeboy,
      name: "Celebrity of media",
      link: "/gallery#12press-media-tv-channel",
    },
  ];
  const handelreload = () => {
    // window.location.reload(true);
  };

  return (
    <>
      <div
        className="md:mt-40 mt-20 mx-auto container p-5"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <p className="font-Josefin_Sans font-bold xl:text-6xl md:text-5xl text-4xl  text-center text-[#374C9F]">
          A Peek in Our Artist Studio
        </p>
        <p className="font-Roboto my-5 text-[45px] leading-[53px] font-medium text-center "></p>
        <p className="font-Roboto text-center text-[white] text-xl max-w-6xl mx-auto">
          This is a destination for artistic luxury where you can discover and
          buy the most exquisite pieces of fine art and collectibles. With an
          unwavering focus on quality and curation, Each piece here is sourced
          from the most reputed and trustworthy artist so that you can truly
          enjoy your experience of discovering that special find.
        </p>
        {/*  */}
        <div className="font-Roboto gap-12   flex justify-center flex-wrap">
          {team.map((items, key) => (
            <div className="hover:bg-opacity-50 rounded-lg  mt-16 " key={key}>
              <div
                className="flex items-center justify-center  flex-col  transition ease-in-out delay-150  "
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <img src={items.img} alt="Bonnie image" />
                <h5 className="my-4 text-xl font-medium text-[#374C9F] ">
                  {items.name}
                </h5>

                <Link to={`${items.link}`} onClick={handelreload()}>
                  <p className="hover:shadow-md hover:shadow-[#374C9F] text-lg leading-none text-white py-4 px-10 bg-[#374C9F]  rounded-tr-3xl rounded-bl-3xl transition ease-in-out delay-150 hover:bg-white hover:text-black  hover:-translate-y-1 hover:scale-110 duration-700  focus:outline-none">
                    More Work
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div
          className="flex flex-col justify-center items-center mt-16"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img src={modikaka} alt="" />
          <h5 className="my-4 text-xl font-medium text-[#374C9F]">
            India P.M Narendra modi
          </h5>

          <Link to="/gallery#11indian-pm">
            <p className=" hover:shadow-md hover:shadow-[#374C9F] rounded-tr-3xl rounded-bl-3xl bg-[#374C9F] text-[white] px-10 py-3  cursor-pointer transition ease-in-out delay-150 hover:bg-black hover:text-white  hover:-translate-y-1 hover:scale-110 duration-700">
              More Work
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Team;
