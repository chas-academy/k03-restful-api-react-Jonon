import React from "react";
import Carousel from "./Carousel/Carousel";
import ReleasesList from "./releasesList/ReleasesList";
import Modal from "../../components/modal/modal";

const Home = () => {
  return (
    <div>
      <Modal />
      <Carousel />
      <ReleasesList />
    </div>
  );
};

export default Home;