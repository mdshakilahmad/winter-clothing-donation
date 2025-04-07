import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slider1 from "../assets/silder1.jpg";
import slider2 from "../assets/silder2.jpg";
import slider3 from "../assets/silder3.jpg";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleWatchVideo = () => {
    setIsVideoVisible(true);
  };

  const handleCloseVideo = () => {
    setIsVideoVisible(false);
  };

  return (
    <div>
      <style>
        {`
      .swiper-pagination-bullet {
        width: 16px;
        height: 16px;
        background-color: #fff;
        opacity: 1;
      }
      .swiper-pagination-bullet-active {
        background-color: #007bff;
      }
    `}
      </style>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20">
              <div className="flex flex-col justify-center items-center h-full text-white">
                <h4 className="text-6xl p-5 text-center leading-[80px]">
                  Helping Each Other
                  <span className="block">Can Make World Better</span>
                </h4>
                <div className="text-center">
                  <button className="btn btn-primary mr-2">
                    Discover Now <FaArrowRight />
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={handleWatchVideo}
                  >
                    Watch Video <FaPlay />
                  </button>
                </div>
              </div>
            </div>
            <img className="w-full" src={slider1} alt="silder-img" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20">
              <div className="flex flex-col justify-center items-center h-full text-white">
                <h4 className="text-6xl p-5 text-center leading-[80px]">
                  Every Donation Counts
                  <span className="block">Every Heart Matters</span>
                </h4>
                <div className="text-center">
                  <button className="btn btn-primary mr-2">
                    Discover Now <FaArrowRight />
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={handleWatchVideo}
                  >
                    Watch Video <FaPlay />
                  </button>
                </div>
              </div>
            </div>
            <img className="w-full" src={slider2} alt="silder-img" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20">
              <div className="flex flex-col justify-center items-center h-full text-white">
                <h4 className="text-6xl p-5 text-center leading-[80px]">
                  Give hope change lives
                  <span className="block">donate today</span>
                </h4>
                <div className="text-center">
                  <button className="btn btn-primary mr-2">
                    Discover Now <FaArrowRight />
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={handleWatchVideo}
                  >
                    Watch Video <FaPlay />
                  </button>
                </div>
              </div>
            </div>
            <img className="w-full" src={slider3} alt="silder-img" />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Video Modal */}
      {isVideoVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative w-3/4 h-3/4 bg-white">
            <button
              className="absolute top-2 right-2 text-black text-2xl z-10"
              onClick={handleCloseVideo}
            >
              ✖
            </button>
            <video width="100%" height="100%" controls autoPlay>
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
