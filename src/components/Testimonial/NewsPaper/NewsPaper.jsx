/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import paper_1 from "../../../image/paper_1.png";
import paper_2 from "../../../image/paper_2.png";
import paper_3 from "../../../image/paper_3.png";
import paper_4 from "../../../image/paper_4.png";
import paper_5 from "../../../image/paper_5.png";
import paper_6 from "../../../image/paper_6.png";
import paper_7 from "../../../image/paper_7.png";
import paper_8 from "../../../image/paper_8.png";
import paper_9 from "../../../image/paper_9.png";
import paper_10 from "../../../image/paper_10.png";
import paper_11 from "../../../image/paper_11.png";
import paper_12 from "../../../image/paper_12.png";
import paper_13 from "../../../image/paper_13.jpg";
function NewsPaper() {
  //     {
  //       id: 0,
  //       img: paper_1,
  //     },
  //     {
  //       id: 1,
  //       img: paper_2,
  //     },
  //     {
  //       id: 2,
  //       img: paper_3,
  //     },
  //     {
  //       id: 3,
  //       img: paper_4,
  //     },
  //     {
  //       id: 4,
  //       img: paper_5,
  //     },
  //     {
  //       id: 5,
  //       img: paper_6,
  //     },
  //     {
  //       id: 6,
  //       img: paper_1,
  //     },
  //     {
  //       id: 7,
  //       img: paper_2,
  //     },
  //     {
  //       id: 8,
  //       img: paper_3,
  //     },
  //     {
  //       id: 9,
  //       img: paper_4,
  //     },
  //     {
  //       id: 10,
  //       img: paper_5,
  //     },
  //     {
  //       id: 11,
  //       img: paper_6,
  //     },
  //   ];
  return (
    <>
      {" "}
      <div
        className="md:mt-40 mt-20 mx-auto container p-5"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <p className="font-Josefin_Sans font-bold xl:text-6xl md:text-5xl text-4xl  text-center text-[#374C9F]">
          - IN THE NEWS -
        </p>

        <div className="font-Roboto  grid md:grid-cols-3  place-content-center mt-10 gap-5">
          <div className="flex flex-col gap-5  ">
            <img src={paper_1} alt="" />
            <img src={paper_4} alt="" />
            <img src={paper_7} alt="" />
            <img src={paper_10} alt="" />
          </div>
          <div className="flex flex-col gap-5  ">
            <img src={paper_2} alt="" />
            <img src={paper_5} alt="" />
            <img src={paper_8} alt="" />
            <img src={paper_11} alt="" />
          </div>
          <div className="flex flex-col gap-5  ">
            <img src={paper_3} alt="" />
            <img src={paper_6} alt="" />
            <img src={paper_9} alt="" />
            <img src={paper_12} alt="" />
          </div>
        </div>
        <div className="flex justify-center mt-5">
          {" "}
          <img src={paper_13} alt="" />
        </div>

        {/* {team.map((items, key) => (
          <div className="grid grid-cols-3  mt-10 gap-5 " key={key}>
            <div>
              <img src={items.img} alt="Bonnie image" />
            </div>
            <div>
              <img src={items.img} alt="Bonnie image" />
            </div>
            <div>
              <img src={items.img} alt="Bonnie image" />
            </div>
          </div>
        ))} */}
      </div>
    </>
  );
}

export default NewsPaper;
