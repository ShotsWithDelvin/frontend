import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { animation } from "../transitions";

const Home = () => { 
  return (
    <section className="section bg-canon bg-no-repeat bg-cover">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col justify-center">
          <div className="w-full pt-36 pb-10 z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1 text-7xl">
              ShotsWithDelvin
              <br />
            </h1>
            <p className="text-[20px] lg:text-[33px] font-primary mb-4 lg:mb-4">
              Your friendly neighborhood Photographer <br /> Brooklyn, New York,
              USA
            </p>
            <Link
              to={"/showcase"}
              className="bg-gradient-to-r from-gray-600 to-red-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all rounded-xl btn mb-[30px]"
            >
              <div class="text font-primary">View Showcase</div>
            </Link>
          </div>

          <div class="flex justify-start gap-x-8 gap-y-4">
            <Link
              to={"/signup"}
              className="bg-gradient-to-r from-gray-600 to-red-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all rounded-xl btn mb-[30px]"
            >
              <div class="text font-primary">Sign Up</div>
            </Link>

            <Link
              to={"/login"}
              className="bg-gradient-to-r from-gray-600 to-red-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all rounded-xl btn mb-[30px]"
            >
              <div class="text font-primary">Login</div>
            </Link>
            <br />
          </div>
         
        </div>
          <div className="w-full flex items-start justify-start lg:w-1/2">
            {/* Ball */}
            <div class="hidden relative lg:flex h-full w-1/2 items-start justify-center bg-grey-200 pb-5">
              <div className="w-40 h-40 bg-gradient-to-r from-red-400 via-red-500 to-red-600 rounded-full animate-pulse" />
              <div className="w-full h-1/2 bottom-0 absolute bg-black/10 backdrop-blur-lg"/>
            </div>
          </div> 
          
          <div class="flex justify-center">
            <p className="text-[36px] lg:text-[30px] font-primary pb-5">
              Come join the family
            </p>
          </div>
      </div>
    </section>
  );
};

export default Home;
