import React from "react";

import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";

import heroSliderData from "../assets/hero-slider-data/hero-slider";

const Home = () => {
  return (
    <Helmet title="Home page">
      <HeroSlider data={heroSliderData} />
    </Helmet>
  );
};

export default Home;
