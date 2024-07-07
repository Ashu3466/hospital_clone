import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to Cardinal Health | Your Trusted Healthcare Provider"
        }
        imageUrl={"/doctor.png"}
      />
      <Biography imageUrl={"/who.avif"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
