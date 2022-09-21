/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import adress from "../../image/adress.png";
import telephone from "../../image/telephone-call.png";
import mail from "../../image/mail.png";
import ".././Home/Counter/counter.css";
function ContactUs() {
  return (
    <div className="container mx-auto md:mt-40 " id="ContactUs">
      <div className="grid lg:grid-cols-4 place-content-center place-items-center">
        <div className="font-Roboto text-[24px] font-normal flex flex-col justify-center items-center gap-7">
          <div className="text-center flex flex-col justify-center items-center  gap-3">
            <div>
              <img src={telephone} alt="" className="calling h-12" />
            </div>
            <div>
              <p>+91 9664649691</p>
              <p>+91 9824128083</p>
            </div>
          </div>
          <div className="flex flex-col text-center justify-center items-center gap-3">
            <div>
              <img src={adress} alt="" className="loction h-14" />
            </div>
            <div>
              <p>
                UG 120, Westfield Complex, Opp <br /> SaintXaviers School,
                Surat,
                <br /> Gujarat, India 395007
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <div>
              <img
                src={mail}
                alt=""
                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-1000 h-9"
              />
            </div>
            <div>
              <p>shailesh.tandel11@gmail.com</p>
            </div>
          </div>
        </div>

        {/* 2nd grid */}
        <div className="lg:col-span-3 order-first lg:order-last">
          <div className="w-full flex items-center justify-center ">
            <div className=" bg-white ounded py-12 ">
              <p className=" font-Josefin_Sans  md:text-[55px] text-xl font-bold leading-7 text-center text-[#374C9F]">
                Contact Us!
              </p>
              <div className="font-Josefin_Sans md:flex items-center mt-12">
                <div className="md:w-72 flex flex-col">
                  <label className=" text-xl leading-none text-[#161616] font-medium">
                    Frist Name
                  </label>
                  <input
                    tabIndex={0}
                    arial-label="Please input name"
                    type="name"
                    className="text-base leading-9 text-[#161616] p-3 focus:oultine-none focus:border-[#374C9F] mt-2  border  border-gray  outline-none rounded-xl"
                  />
                </div>
                <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className=" text-xl leading-none text-[#161616] font-medium">
                    Last Name
                  </label>
                  <input
                    tabIndex={0}
                    arial-label="Please input email address"
                    type="name"
                    className="text-base leading-9 text-[#161616] p-3 focus:oultine-none focus:border-[#374C9F] mt-2  border  border-gray  outline-none rounded-xl"
                  />
                </div>
              </div>
              <div className="font-Josefin_Sans md:flex items-center mt-8">
                <div className="md:w-72 flex flex-col">
                  <label className=" text-xl leading-none text-[#161616] font-medium">
                    Your Email
                  </label>
                  <input
                    tabIndex={0}
                    role="input"
                    arial-label="Please input company name"
                    type="name"
                    className="text-base leading-9 text-[#161616] p-3 focus:oultine-none focus:border-[#374C9F] mt-2  border  border-gray  outline-none rounded-xl "
                  />
                </div>
                <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className=" text-xl leading-none text-[#161616] font-medium">
                    Phone Number
                  </label>
                  <input
                    tabIndex={0}
                    arial-label="Please input country name"
                    type="name"
                    className="text-base leading-9 text-[#161616] p-3 focus:oultine-none focus:border-[#374C9F] mt-2  border  border-gray  outline-none rounded-xl"
                  />
                </div>
              </div>
              <div>
                <div className="font-Josefin_Sans w-full flex flex-col mt-8">
                  <label className=" text-xl leading-none text-[#161616] font-medium">
                    Message
                  </label>
                  <textarea
                    tabIndex={0}
                    aria-label="leave a message"
                    role="textbox"
                    type="name"
                    className="h-36 text-base leading-9 text-[#161616] p-3 focus:oultine-none focus:border-[#374C9F] mt-2  border  border-gray  outline-none rounded-xl resize-none"
                    defaultValue={""}
                  />
                </div>
              </div>

              <div className="font-Roboto  flex items-center justify-center w-full">
                <button className="mt-9   hover:shadow-md hover:shadow-[#374C9F] text-lg leading-none text-white py-4 px-10 bg-[#374C9F]  rounded-tr-3xl rounded-bl-3xl transition ease-in-out delay-150 hover:bg-black hover:text-white  hover:-translate-y-1 hover:scale-110 duration-700  focus:outline-none">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
