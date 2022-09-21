import React, { useEffect } from "react";
import Museum from "../AboutUs/Museum/Museum";
import Work from "../Home/Work/Work";

function AboutUs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Museum />
      <Work/>
      
    </>
  );
}

export default AboutUs;
