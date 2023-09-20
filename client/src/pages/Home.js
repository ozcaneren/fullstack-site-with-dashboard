import React from "react";
import Slider from "react-slick";
import { Helmet } from "react-helmet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Divide from "../components/Divide";
import HeroSection from "../components/HeroSection";
import Card1 from "../components/cards/Card-1";
import Card2 from "../components/cards/Card-2";
import Card3 from "../components/cards/Card-3";
import Card4 from "../components/cards/Card-4";
import Card5 from "../components/cards/Card-5";
import Card6 from "../components/cards/Card-6";
import Specs from "../components/Specs";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#EEEEEE]">
      <Helmet>
        <title>Marmaris Otel</title>
      </Helmet>
      <Header />
      <HeroSection />
      <Divide />
      <Specs />
      <Divide />
      <div className="container mx-auto">
        <div className="pb-10">
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
            Bazi Odalarimiz
          </h1>
        </div>
        <div className="text-center  pb-9">
          <Slider {...settings}>
            <Card1 />
            <Card2 />
            <Card3 />
            <Card4 />
            <Card5 />
            <Card6 />
          </Slider>
        </div>
      </div>
      <Divide />
      <Footer />
    </div>
  );
}

export default Home;
