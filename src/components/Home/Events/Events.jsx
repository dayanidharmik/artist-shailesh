import React from "react";
import champa from "../../../image/champa.png";
import glx from "../../../image/glx.png";
import unknow from "../../../image/Mask1.png";
import Mask from "../../../image/Mask.png";
import AOS from "aos";
import "../../Layout/Header.css";
function Events() {
  const team = [
    {
      id: 0,
      top: true,
      img: champa,
      style: "lg:order-none order-first",
      order: "lg:order-none  order-last",
      name: " Event on the rock solid carbon",
      Event: "21st February at Central government museum",
      description:
        "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially.Lorem ipsum dolor sit amet, consec teturadip isicing elit, sed do eiusmod tempor.",
    },
    {
      id: 1,
      top: false,
      img: glx,
      style: "lg:order-none  order-first",
      name: " Event on the rock solid carbon",
      Event: "21st February at Central government museum",
      description:
        "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially.Lorem ipsum dolor sit amet, consec teturadip isicing elit, sed do eiusmod tempor.",
    },
    {
      id: 2,
      top: true,
      img: unknow,
      style: "lg:order-none  order-first",
      name: " Event on the rock solid carbon",
      Event: "21st February at Central government museum",
      description:
        "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially.Lorem ipsum dolor sit amet, consec teturadip isicing elit, sed do eiusmod tempor.",
    },
    // {
    //   id: 3,
    //   top: false,
    //   img: Mask,
    //   style: "lg:order-none  order-first",
    //   name: " Event on the rock solid carbon",
    //   Event: "21st February at Central government museum",
    //   description:
    //     "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially.Lorem ipsum dolor sit amet, consec teturadip isicing elit, sed do eiusmod tempor.",
    // },
  ];

  return (
    <div className="md:mt-40 mx-auto container p-5">
      <p className="font-Josefin_Sans  font-bold xl:text-6xl md:text-5xl text-4xl  text-center text-[#374C9F]">
        Checkout our Upcoming Events
      </p>
      <p className="font-Roboto text-center text-xl mt-4 text-[#595959]">
        Who are in extremely love with eco friendly system.
      </p>

      <div
        className="container mx-auto grid lg:grid-cols-2 grid-cols-1 md:gap-10 gap-5 mt-20 "
        // data-aos="fade-up"
        // data-aos-duration="2000"
      >
        {team.map((items, key) =>
          window.screen.width > 800 && items.top ? (
            <>
              <div
                className="flex lg:justify-center justify-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-1000"
                key={key}
              >
                <img
                  src={items.img}
                  alt=""
                  className=""
                  
                />
              </div>
              <div className="flex flex-col md:text-justify lg:text-start text-center justify-center   items-center lg:items-start md:p-0 " >
                <p className="mt-3 md:text-4xl text-2xl font-Josefin_Sans ">
                  {" "}
                  {items.name}
                </p>
                <p className="mt-3 font-Roboto font-normal text-xl text-[#595959] ">
                  {items.Event}
                </p>
                <p className="mt-3  font-Roboto font-normal text-xl text-[#595959] text-justify">
                  {items.description}
                </p>
                <p className="mt-5 hover:shadow-md hover:shadow-[#374C9F]  rounded-tr-3xl rounded-bl-3xl bg-[#374C9F] text-[white] px-10 py-3  cursor-pointer transition ease-in-out delay-150 hover:bg-black hover:text-white  hover:-translate-y-1 hover:scale-110 duration-700">
                  View Details
                </p>
              </div>
            </>
          ) : (
            <>
              <div
                className={`flex flex-col md:text-justify lg:text-start text-center justify-center   items-center lg:items-start md:p-0   ${items.style} ${items.order}`}
               
              >
                <p className="mt-3 md:text-4xl text-2xl font-Josefin_Sans ">
                  {" "}
                  {items.name}
                </p>
                <p className="mt-3 font-Roboto font-normal text-xl text-[#595959] ">
                  {items.Event}
                </p>
                <p className="mt-3 font-Roboto font-normal text-xl text-[#595959] ">
                  {items.description}
                </p>
                <p className="mt-5 hover:shadow-md hover:shadow-[#374C9F] rounded-tr-3xl rounded-bl-3xl bg-[#374C9F] text-[white] px-10 py-3  cursor-pointer transition ease-in-out delay-150 hover:bg-black hover:text-white  hover:-translate-y-1 hover:scale-110 duration-700">
                  View Details
                </p>
              </div>
              <div
                className={`flex lg:justify-center justify-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110    duration-1000 ${items.style}`}
                key={key}
               
              >
                <img src={items.img} alt="" className=""   />
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
}

export default Events;
