import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./counter.css";
function Counter() {
  const [counteron, setCounterOn] = useState(false);
  return (
    <div className="bg-home-counter md:mt-40 mt-20 ">
      <div className="container mx-auto ">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="flex lg:flex-row flex-col items-center gap-10 justify-around text-white font-bold ">
            <div data-aos={"flip-left"}>
              <div className="lg:text-6xl font-Josefin_Sans text-5xl font-bold ">
                {counteron && (
                  <CountUp start={0} end={1000} duration={2} delay={0} />
                )}{" "}
                <span>+</span>
              </div>
              <div className="mt-5 font-Roboto font-[24px] font-medium leading-[28px]">Total Paintings</div>
            </div>
            <div data-aos={"flip-left"}>
              <div className="lg:text-6xl font-Josefin_Sans text-5xl font-bold ">
                {counteron && (
                  <CountUp start={0} end={5} duration={2} delay={0} />
                )}{" "}
                <span>+</span>
              </div>
              <div className="mt-5 font-Roboto font-[24px] font-medium leading-[28px]">Total Exibitions </div>
            </div>
            <div data-aos={"flip-left"}>
              <div className="lg:text-6xl font-Josefin_Sans text-5xl font-bold ">
                {counteron && (
                  <CountUp start={0} end={20} duration={2} delay={0} />
                )}{" "}
                <span>+</span>
              </div>
              <div className="mt-5 font-Roboto font-[24px] font-medium leading-[28px]">Years of Experience </div>
            </div>
            <div data-aos={"flip-left"}>
              <div className="lg:text-6xl font-Josefin_Sans text-5xl font-bold ">
                {counteron && (
                  <CountUp start={0} end={1200} duration={2} delay={0} />
                )}{" "}
                <span>+</span>
              </div>
              <div className="mt-5 font-Roboto font-[24px] font-medium leading-[28px]">Happy Customers </div>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
}

export default Counter;
