import React from "react";
import { motion } from "framer-motion";
import TestImg from "../images/home/test.JPG";
import { Link } from "react-router-dom";
import { animation } from "../transitions";

const Home = () => {
  return (
    <section className="section bg-black">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col justify-center">
          <div className="w-full pt-36 pb-14 z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">
              Delvin Reyes
              <br />
            </h1>
            <p className="text-[25px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              Your friendly neighborhood Photographer <br /> Brooklyn, New York, USA
            </p>

            <Link to={"/showcase"} className="btn mb-[30px]">
              <div class="text">
                View Showcase
                </div>
            </Link>
          </div>

          <div className="flex max-h-96 lg:max-h-max">
            <div className="relative lg:-right-40 overflow-hidden">
              {/* <img class="h-auto max-w-lg" src={TestImg} alt='' /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
