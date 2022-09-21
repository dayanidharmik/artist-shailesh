/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import vedio_1 from "../../../image/vedio_1.png";
import vedio_2 from "../../../image/vedio_2.png";
import vedio_3 from "../../../image/vedio_3.png";
import vedio_4 from "../../../image/vedio_4.png";
import vedio_5 from "../../../image/vedio_5.png";
import PlayImage from "../../../image/play.png";
function VideoTestimonial() {
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);
  const team = [
    {
      id: 1,
      img: vedio_3,
      name: "Deepika Padukone appreciation for Artist Shailesh Tandel",
      link: "https://youtube.com/watch?v=K3ct6pYk318&feature=share",
    },
    {
      id: 2,
      img: vedio_1,
      name: "500 Different Position of “Love Making” ",
      link: "https://youtu.be/W9GxH6KRefQ",
    },
    {
      id: 3,
      img: vedio_4,
      name: "artist shailesh tandel wallpainting",
      link: "https://youtu.be/QEAe-_bPYw0",
    },
    {
      id: 4,
      img: vedio_2,
      name: "Vivek Bindra ",
      link: "https://youtube.com/shorts/iVNwGBKQmlc?feature=share",
    },
    {
      id: 5,
      img: vedio_5,
      name: "artist shailesh tandel wallpainting",
      link: "https://youtu.be/T-AOnPlSmZw",
    },
  ];
  return (
    <>
      <div
        className="md:mt-40 mt-20 mx-auto container p-5"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <p className="font-Josefin_Sans font-bold xl:text-6xl md:text-5xl text-4xl  text-center text-[#374C9F]">
          NFT Collections
        </p>

        <div className="font-Roboto gap-12   lg:mt-16 mt-12  flex justify-center flex-wrap">
          {team.map((i) => (
            <div className="relative" key={i.id}>
              <div className="">
                <img src={i.img} alt="" className="md:max-w-xl h-96" />
                <div className="absolute top-1/3 left-[40%] cursor-pointer">
                  <a href={i.link} target="_blank" alt="">
                    <img src={PlayImage} alt="" />
                  </a>
                </div>
              </div>
              <div className="flex justify-between pt-2 text-2xl">
                <p className="text-[#374C9F] mx-auto">{i.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default VideoTestimonial;
