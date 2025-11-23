import React from "react";
import Image from "next/image";
import MeetTheCreator from "./MeetTheCreator";

function page() {
  return (
    <>
      <section className="w-full bg-black text-white pt-3 px-8">
        <h1 className="text-center text-4xl font-bold">About Us</h1>
      </section>
      <section className="bg-black text-white py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Text Section */}
          <div className="">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-[#8a7968] underline">Mission</span>
            </h2>
            <p className="text-lg mb-4">
              At <span className="text-[#8a7968] font-semibold">WatchLog</span>{" "}
              our mission is to craft exceptional timepieces that seamlessly
              blend innovation, precision, and style.
              <br /> We are committed to delivering enduring quality and
              empowering individuals to cherish every moment. Through
              sustainable practices and customer-centric designs, we aim to
              redefine the art of watchmaking while leaving a positive impact on
              our world.
            </p>
          </div>

          {/* Image Section */}
          <div>
            <Image
              src="/d-1.jpg"
              alt="Mission Img"
              width="500"
              height="300"
              className="rounded-lg shadow-lg w-auto h-auto"
            />
          </div>
        </div>
      </section>
      <MeetTheCreator />
    </>
  );
}

export default page;
