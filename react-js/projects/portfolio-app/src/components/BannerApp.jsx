import React from 'react'
import man2 from '../man2.png'

export default function BannerApp() {
  return (
 <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-0">
  
  {/* Heading */}
  <div className="mb-10 text-center lg:text-left">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase">
      Introduction
    </h1>

    <div className="flex items-center justify-center lg:justify-start gap-4 mt-2">
      <h2 className="text-xl md:text-3xl font-semibold">
        About Me
      </h2>
      <div className="h-[3px] w-20 md:w-32 bg-black rounded"></div>
    </div>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

    {/* Image Section */}
    <div className="flex justify-center">
      <div className="bg-gradient-to-br from-blue-500 to-blue-400 rounded-[40px] overflow-hidden shadow-xl w-full max-w-sm">
        <img
          src={man2}
          alt="Brijesh Pandey"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Right Content */}
    <div className="lg:col-span-2">

      {/* Intro */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 md:p-8 rounded-[30px] shadow-xl mb-8">
        <p className="text-base md:text-lg leading-relaxed">
          Hello, I'm <strong>Brijesh Kumar Pandey</strong>, a Senior Technical
          Trainer with 12+ years of experience in MERN Stack Development,
          Python Programming, Data Science, Data Analytics, SQL, Power BI,
          React.js, Node.js, and MongoDB.
        </p>
      </div>

      {/* Skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-lg p-6 text-center hover:-translate-y-2 transition-all duration-300">
          <img
            src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
            alt="MERN"
            className="w-16 h-16 md:w-20 md:h-20 mx-auto"
          />
          <h3 className="font-bold mt-4">MERN Stack</h3>

          <div className="w-full h-2 bg-slate-200 rounded-full mt-3">
            <div className="h-full w-[95%] bg-green-500 rounded-full"></div>
          </div>

          <p className="mt-2 font-semibold">95%</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 text-center hover:-translate-y-2 transition-all duration-300">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
            alt="Python"
            className="w-16 h-16 md:w-20 md:h-20 mx-auto"
          />
          <h3 className="font-bold mt-4">Python</h3>

          <div className="w-full h-2 bg-slate-200 rounded-full mt-3">
            <div className="h-full w-[95%] bg-blue-500 rounded-full"></div>
          </div>

          <p className="mt-2 font-semibold">95%</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 text-center hover:-translate-y-2 transition-all duration-300">
          <img
            src="https://img.icons8.com/color/96/power-bi.png"
            alt="Power BI"
            className="w-16 h-16 md:w-20 md:h-20 mx-auto"
          />
          <h3 className="font-bold mt-4">Power BI</h3>

          <div className="w-full h-2 bg-slate-200 rounded-full mt-3">
            <div className="h-full w-[90%] bg-yellow-500 rounded-full"></div>
          </div>

          <p className="mt-2 font-semibold">90%</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 text-center hover:-translate-y-2 transition-all duration-300">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
            alt="React"
            className="w-16 h-16 md:w-20 md:h-20 mx-auto"
          />
          <h3 className="font-bold mt-4">React JS</h3>

          <div className="w-full h-2 bg-slate-200 rounded-full mt-3">
            <div className="h-full w-[93%] bg-cyan-500 rounded-full"></div>
          </div>

          <p className="mt-2 font-semibold">93%</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 text-center hover:-translate-y-2 transition-all duration-300">
          <img
            src="https://cdn-icons-png.flaticon.com/512/919/919836.png"
            alt="MongoDB"
            className="w-16 h-16 md:w-20 md:h-20 mx-auto"
          />
          <h3 className="font-bold mt-4">MongoDB</h3>

          <div className="w-full h-2 bg-slate-200 rounded-full mt-3">
            <div className="h-full w-[90%] bg-green-600 rounded-full"></div>
          </div>

          <p className="mt-2 font-semibold">90%</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 text-center hover:-translate-y-2 transition-all duration-300">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4248/4248443.png"
            alt="SQL"
            className="w-16 h-16 md:w-20 md:h-20 mx-auto"
          />
          <h3 className="font-bold mt-4">SQL</h3>

          <div className="w-full h-2 bg-slate-200 rounded-full mt-3">
            <div className="h-full w-[94%] bg-indigo-500 rounded-full"></div>
          </div>

          <p className="mt-2 font-semibold">94%</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 text-center hover:-translate-y-2 transition-all duration-300">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
            alt="Data Analytics"
            className="w-16 h-16 md:w-20 md:h-20 mx-auto"
          />
          <h3 className="font-bold mt-4">Data Analytics</h3>

          <div className="w-full h-2 bg-slate-200 rounded-full mt-3">
            <div className="h-full w-[92%] bg-purple-500 rounded-full"></div>
          </div>

          <p className="mt-2 font-semibold">92%</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 text-center hover:-translate-y-2 transition-all duration-300">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png"
            alt="Data Science"
            className="w-16 h-16 md:w-20 md:h-20 mx-auto"
          />
          <h3 className="font-bold mt-4">Data Science</h3>

          <div className="w-full h-2 bg-slate-200 rounded-full mt-3">
            <div className="h-full w-[91%] bg-pink-500 rounded-full"></div>
          </div>

          <p className="mt-2 font-semibold">91%</p>
        </div>

      </div>
    </div>
  </div>
</section>

  )
}
