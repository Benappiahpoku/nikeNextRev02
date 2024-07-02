import React from 'react';
import { FC } from 'react';
import Navbar from './navbar';
import Image
 from 'next/image';

const Hero: FC = () => {
  return (
    <div className='lg:hidden'>
      <section>
        <Navbar />
      </section>
      <section className="lg:hidden">
        <div className="hero-title h-14 flex items-center justify-center tracking-[.5rem] text-xl text-white">
          <p>STYLE TAKES OVER</p>
        </div>
      </section>
      <div className="lg:flex lg:flex-row-reverse lg:px-28">
        <div className="lg:w-1/2">
          {/* Nike Image */}
          <div className="mt-6">
            <Image
              src="/images/niketrainers.png"
              alt="Picture of the nike trainers"
              width={170}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        {/* text information */}
        <div className="hidden lg:flex  lg:left-0 lg:absolute lg:justify-center lg:items-center lg:hero-title lg:h-full lg:w-[6.4rem] lg:tracking-[.5rem] lg:text-xl  lg:text-white lg:bg-red-600       ">
          {" "}
          <p className="transform -rotate-90 ">STYLE TAKES OVER </p>
        </div>
        <div className="lg:w-1/2">
          <div className="flex flex-col mt-6 space-y-4 px-6 py-4">
            <h1 className="text-7xl font-extrabold">AIR MAX</h1>
            <h2 className="text-3xl">Nike Air Max Plus</h2>
            <h3 className="text-lg">
              120{" "}
              <span className="text-sm text-black ml-2 line-through">150</span>{" "}
            </h3>
            <p className="text-sm">
              Mixing one part urban with one part tough, the Air Max Pulse
              brings an energetic look to the iconic Air Max line. It combines a
              textile-wrapped midsole and vacuum-sealed accents to boost its
              street cred. Point-loaded Nike Air cushioning—revamped from the
              incredibly plush Air Max 270—delivers the comfort you&apos;ve come
              to trust. Throw them on with your best outfit and go to the max.
            </p>
            <div className="flex space-x-4  justify-center lg:justify-start">
              <button className="bg-[#01050F] text-white px-4 py-2 rounded-full">
                Add to Bag
              </button>{" "}
              <button className="text-black  border-4 px-4 py-2 rounded-full">
                Favorite
              </button>{" "}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;