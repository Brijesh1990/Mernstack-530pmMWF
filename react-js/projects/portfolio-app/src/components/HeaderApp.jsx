import React, { useState } from "react";
import man3 from "../man3.png";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black text-white">
        <nav className="max-w-7xl mx-auto px-5 lg:px-8 py-4 flex items-center justify-between">
          
          {/* Animated Logo */}
          <h1
            className="
              text-4xl
              md:text-5xl
              font-black
              uppercase
              tracking-widest
              bg-gradient-to-r
              from-blue-600
              via-cyan-500
              to-indigo-600
              bg-clip-text
              text-transparent
              animate-[bounce_3s_ease-in-out_infinite]
              hover:scale-110
              transition-all
              duration-500
              cursor-pointer
            "
          >
            Brijesh
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            <li>
              <a href="#" className="hover:text-blue-600 duration-300">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-600 duration-300">
                About
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-600 duration-300">
                Projects
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-600 duration-300">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <span
              className={`w-7 h-0.5 bg-black transition-all ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-7 h-0.5 bg-black transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-7 h-0.5 bg-black transition-all ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-blue-50 shadow-lg overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-60 py-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-5 font-medium">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden relative mt-18">
        
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            Brijesh Kumar Pandey
          </h2>

          <p className="text-center text-gray-600 text-lg md:text-xl mb-10">
            Senior Technical Trainer | MERN Stack | Python | Data Analytics
          </p>

          <div className="relative flex justify-center items-center">

            {/* Left Line */}
            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2">
              <div className="w-32 h-1 bg-blue-500 rounded-full"></div>
            </div>

            {/* Right Line */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
              <div className="w-32 h-1 bg-blue-500 rounded-full"></div>
            </div>

            {/* Portfolio Text */}
            <h1
              className="
                font-black
                uppercase
                text-slate-900
                flex
                items-end
                justify-center
                leading-none
                tracking-tight
                text-[3rem]
                sm:text-[5rem]
                md:text-[8rem]
                lg:text-[10rem]
                xl:text-[12rem]
              "
            >
              <span>PORT</span>

              {/* Animated Character */}
              <div className="relative mx-2">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-125"></div>

                <img
                  src={man3}
                  alt="Brijesh"
                  className="
                    relative z-10
                    w-40
                    sm:w-52
                    md:w-64
                    lg:w-80
                    object-contain
                    animate-[bounce_4s_ease-in-out_infinite]
                    hover:scale-110
                    transition-all
                    duration-500
                    drop-shadow-2xl
                  "
                />
              </div>

              <span>FOLIO</span>
            </h1>
          </div>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg">
              View Projects
            </button>

            <button className="px-8 py-3 border-2 border-slate-900 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </>
  );
}