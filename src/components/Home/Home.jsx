import React, { useEffect } from "react";
import Nft from "./Nft/Nft";
import Work from "./Work/Work";
import Counter from "./Counter/Counter";
import Events from "./Events/Events";
import Testimonials from "./Testimonials/Testimonials";
import VideoTestimonial from "../Testimonial/VideoTestimonial/VideoTestimonial";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Nft />
      <Work />
      <Counter />
      {/* <Events /> */}
      <VideoTestimonial />
      <Testimonials />
      <VideoTestimonial />
    </>
  );
}

export default Home;
