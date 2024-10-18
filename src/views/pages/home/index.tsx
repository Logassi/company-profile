import { useState, useEffect } from "react";
import Hero from "/public/images/Hero_Section.jpg";
import Image from "next/image";
// import { ArrowRightCircle } from "react-bootstrap-icons"; // Or switch to react-icons if preferred
// import "animate.css";
// import TrackVisibility from "react-on-screen";
// import headerImg from "../public/assets/img/header-img.svg"; // Ensure the image path is correct

export default function HomeView() {
  return (
    <section className="bg-cover bg-center">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2  mb-8 md:mb-0">
            <h1 className="text-4xl font-bold">
              "We manage,
              <br /> so you can enjoy the privilege"
            </h1>
            <p className="text-gray-700 mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src={Hero} // Use the correct path
              alt="Hero Img"
              // width={80} // Set width
              // height={80} // Set height
              className="mr-2" // Optional styling
            />
          </div>
        </div>
      </div>
    </section>
  );
}
