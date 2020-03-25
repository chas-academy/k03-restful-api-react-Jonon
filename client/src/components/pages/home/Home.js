import React, { Component } from "react";
import Slider from "./slider/Slider";
import ReleasesList from "./releasesList/ReleasesList";
import Modal from "../../modal/modal";

const Home = () => {
    return (
      <div>
        <Modal />
        <Slider />
        <ReleasesList />
      </div>
    );
  }

export default Home;
