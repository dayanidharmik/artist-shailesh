import React, { useEffect } from "react";
import Slider from "react-slick";
import straight_quotes from "../../../image/straight-quotes.png";
import radha from "../../../image/radha.png";
// import dipika  from "../../../image/dipika.png";
import paper_2 from "../../../image/paper_2.png";

import "../Counter/counter.css";
import { Link } from "react-router-dom";

function Testimonials() {
  const settings = {
    // infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // lazyLoad: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    className: "sample",
  };
  const slider = [
    {
      id: 0,
      img: radha,
      straight_quotes: straight_quotes,
      name: "Dipika Padukon",
      description:
        "It's feels like success to me when I got the art from artist like you.",
    },
    {
      id: 1,
      img: radha,
      straight_quotes: straight_quotes,
      name: "Vivek Bindra",
      description:
        "I loved the potrait you made for me. It's amazing and Thank you for the hardwork you have done",
    },
  ];
  return (
    <>
      <div className="bg-home-Testimonials mt-20">
        <div className="container mx-auto ">
          <div className=" flex flex-col items-center justify-center text-center gap-16  px-5">
            <div className="flex flex-col  items-center justify-center gap-5 text-white ">
              <p className="font-bold md:text-5xl text-4xl font-Josefin_Sans">
                - CLIENT STORIES -
              </p>
              <Slider {...settings}>
                {slider.map((items, key) => (
                  <div className="font-Roboto flex flex-col  items-center justify-center ">
                    <div className="font-normal text-[#DDDDDD] flex flex-col  items-center justify-center mb-5">
                      <img src={items.straight_quotes} alt="" />
                    </div>
                    <p className="max-w-2xl mx-auto">
                      {items.description}
                      <br /> Thank You Shailesh
                    </p>
                    <div className="flex flex-col  items-center justify-center my-5">
                      <img src={items.img} alt="" />
                    </div>
                    <p className="font-medium">{items.name}</p>
                  </div>
                ))}
              </Slider>
              <Link to="/testimonial">
                <p className="mt-5  rounded-tr-3xl rounded-bl-3xl bg-[#374C9F] text-[white] hover:text-black px-10 py-3  cursor-pointer transition ease-in-out delay-150 hover:bg-white  hover:-translate-y-1 hover:scale-110 duration-700">
                  View Details
                </p>
              </Link>
              <div>
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
