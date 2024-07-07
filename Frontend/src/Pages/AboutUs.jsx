import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | ZeeCare Medical Institute"}
        imageUrl={"/who.avif"}
      />
      <Biography imageUrl={"/doctor.png"} />
    </>
  );
};

export default AboutUs;
