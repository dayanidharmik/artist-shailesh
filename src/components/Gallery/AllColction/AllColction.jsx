/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../../Layout/Header.css";
import { useLocation } from "react-router-dom";

function AllColction() {
  const route = useLocation().hash.split("#")[1];
  console.log(route, "useLocation");
  const [AllColction, setAllColction] = useState(
    `${route === undefined ? "01kamkala" : route}`
  );
  const [Loader, setLoader] = useState(false);
  const [img, setimg] = useState([]);
  const effectCalled = useRef(false);

  const apicheck = async () => {
    try {
      // setAllColction("")
      setLoader(true);
      const result = await axios.post("http://192.168.29.3:8001/search", {
        folder_name: AllColction,
      });

      if (result.data.status) {
        setimg(result.data.data.formattedData[0].url);
        setLoader(false);
        // console.log(result.data.data.formattedData[0].url);
      } else {
        setLoader(false);
      }
    } catch (error) {
      setLoader(false);
    }
  };
  //   console.log(AllColction);
  useEffect(() => {
    if (!effectCalled.current) {
      // window.location.reload();
      apicheck();
      effectCalled.current = true;
    }

    //eslint-disable-next-line
  }, [AllColction]);
  return (
    <>
      <div id={`${route}`}>
        <div className="flex justify-center md:mt-32 mt-20 font-Josefin_Sans font-bold text-2xl  text-center text-[#374C9F] ">
          <select
            value={AllColction}
            name="Kamkala"
            onChange={(e) => {
              setAllColction(e.target.value);
              effectCalled.current = false;
            }}
            className="dropdown list"
          >
            <option value="01kamkala">Kamkala</option>
            <option value="02om-creation">Om creation</option>
            <option value="03bollywood-directors"> Bollywood director</option>
            <option value="04celebrity-as-child">Celebrity as a child</option>
            <option value="05bni-director"> BNI directors</option>
            <option value="07cabinet-minister-2018">
              Cabinate minister 2018
            </option>
            <option value="08freedom-fighter">Freedom fighter</option>
            <option value="09gallexy">Galaxy</option>
            <option value="10art-gallery-owner">Art gallery owner</option>
            <option value="12press-media-tv-channel">Celebrity of media</option>
            <option value="11indian-pm">India P.M Narendra modi</option>
          </select>
        </div>
        <div
          className=" mt-20 mx-auto container p-5"
          // data-aos="fade-up"
          // data-aos-duration="2000"
        >
          <p className="font-Josefin_Sans font-bold xl:text-6xl md:text-5xl text-4xl  text-center text-[#374C9F]">
            {AllColction.replace(/[0-9]/g, "")}
          </p>

          <div className="font-Roboto gap-12   grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 grid-cols-2">
            {img.map((items, key) => (
              <div className="hover:bg-opacity-50 rounded-lg  mt-16 " key={key}>
                <div
                  className="flex items-center justify-center  flex-col  transition ease-in-out delay-150  "
                  // data-aos="fade-up"
                  // data-aos-duration="3000"
                >
                  {Loader ? (
                    <div className="snippet " data-title=".dot-spin">
                      <div className="stage">
                        <div className="dot-spin "></div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={`http://192.168.29.3:8001/${items.url}`}
                      alt="Bonnie image"
                      className="transition ease-in-out delay-75 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-1000 hover:shadow-2xl"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllColction;
