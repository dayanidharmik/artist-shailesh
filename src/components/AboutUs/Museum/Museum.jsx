import React from "react";
import viratkaka from "../../../image/viratkaka.png";
import AOS from "aos";
import "../../Layout/Header.css";
function Museum() {
  AOS.init();

  return (
    <>
      <div
        className="container mx-auto md:mt-40 mt-20 p-5"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <p className="font-Josefin_Sans font-bold xl:text-6xl md:text-5xl text-4xl  text-center text-[#374C9F]">
          Few words about our Artist
        </p>

        <p className="font-Roboto text-center text-[#595959] text-xl mt-3">
        WE ARE THE DOT CONNECTING YOU TO THE ART WORLD
        </p>

        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-20 mt-14">
          <div className="flex lg:justify-center justify-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-1000">
            <img src={viratkaka} alt="" className=" " />
          </div>

          <div className="flex flex-col md:text-justify lg:text-start justify-center items-center md:p-0 ">
            <div className="flex flex-col justify-start items-start ">
              <p className="mt-5 text-4xl font-Roboto">
              Glimpse of My journey
              </p>
              <p className="mt-4  lg:max-w-lg font-Roboto text-[#595959]">
                Myself Artist Shailesh Tandel from Surat City,Gujrat,India. <br />
                Born in Rajpipla [1969] Gujarat. <br />
                Primarystudy at Jeevan Bharti School, Graduate frome MTB Arts Collage with [B.A.]. <br /> 
                My Life Cycle also be Show in Painting form with Biology & Astrology
                Identity.
              </p>
              <p className="mt-4     lg:max-w-lg text-justify font-Roboto text-[#595959]">
                I am born artist and Art is my first love and passsion so i was
                started my carrier as a proffetional artist in 2012 But some
                exclusive art collection are created during my job as a printing
                master in dyeing & printing mill [surat]. some collection are
                also nomibated for guiness world record.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Museum;
