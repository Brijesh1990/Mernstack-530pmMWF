import React from 'react'
import brijesh from '../man1.png'
export default function ContentApp() {
  return (
<>    
<section className="max-w-7xl mx-auto mt-5 px-6 py-12">
  <div className="grid lg:grid-cols-3 gap-10 items-start">
    {/* Left Side */}
    <div className="space-y-6">

      {/* Contact Info */}
      <div className="space-y-5">
         <div className="flex items-center gap-4">
          <i className="fa-brands fa-whatsapp text-3xl text-green-600"></i>
          <span className="font-semibold text-3xl">
            Brijesh Kumar Pandey
          </span>
        </div>   

        <div className="flex items-center gap-4">
          <i className="fa-brands fa-whatsapp text-3xl text-green-600"></i>
          <span className="font-semibold text-xl">
            +91 9998003879
          </span>
        </div>

        <div className="flex items-center gap-4">
          <i className="fa-solid fa-location-dot text-3xl text-red-500"></i>
          <span className="font-semibold text-xl">
            Rajkot, Gujarat - 360005
          </span>
        </div>

        <div className="flex items-center gap-4">
          <i className="fa-regular fa-envelope text-3xl text-blue-600"></i>
          <span className="font-semibold text-lg break-all">
            brijeshpandey@example.com
          </span>
        </div>

      </div>

      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src={brijesh}
          alt="Brijesh Pandey"
          className="w-full m-0 p-0 max-w-xs object-contain -ms-25"
        />
      </div>

    </div>

    {/* Right Side */}
    <div className="lg:col-span-2 space-y-8">

      {/* Experience Card */}
      <div className="bg-white rounded-3xl shadow-lg p-6 border border-slate-200">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div>

            <div className="inline-block border-2 border-black px-6 py-2 rounded-full font-semibold">
              2013 – Present (12+ Years)
            </div>

            <div className="mt-5">

              <h3 className="text-3xl font-bold text-slate-800">
                TOPS Technologies
              </h3>

              <div className="flex items-center gap-2 mt-2">
                <i className="fa-solid fa-location-dot"></i>
                <span className="font-semibold">
                  Ahmedabad, Gujarat
                </span>
              </div>

            </div>

          </div>

          <div className="border-l-0 md:border-l md:pl-8 border-slate-300">

            <h3 className="text-2xl font-bold mb-3">
              Senior Technical Trainer
            </h3>

            <p className="text-slate-700 leading-relaxed">
              Delivering professional training in MERN Stack Development,
              Python Programming, Data Science, Data Analytics, React.js,
              Node.js, MongoDB, SQL, Power BI, and modern web technologies.
              Mentored thousands of students and professionals in building
              real-world projects and industry-ready skills.
            </p>

          </div>

        </div>

      </div>

      {/* Projects Button */}
      <div>
        <button className="bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition">
          + TRAINING EXPERTISE +
        </button>
      </div>

      {/* Expertise List */}
      <div className="space-y-6">

        {/* Item 1 */}
        <div className="flex flex-col md:flex-row items-center gap-6">

          <div className="w-24 h-24 rounded-2xl bg-white shadow-lg flex items-center justify-center text-5xl">
            💻
          </div>

          <div className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-[30px] relative">

            <div className="absolute left-0 top-1/2 -translate-x-3 -translate-y-1/2 w-6 h-6 bg-blue-500 rotate-45"></div>

            <p className="text-lg leading-relaxed">
              Trained students in Full Stack Web Development using
              HTML, CSS, JavaScript, Bootstrap, React.js, Node.js,
              Express.js, MongoDB, and MySQL.
            </p>

          </div>

        </div>

        {/* Item 2 */}
        <div className="flex flex-col md:flex-row items-center gap-6">

          <div className="w-24 h-24 rounded-2xl bg-white shadow-lg flex items-center justify-center text-5xl">
            🐍
          </div>

          <div className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-[30px] relative">

            <div className="absolute left-0 top-1/2 -translate-x-3 -translate-y-1/2 w-6 h-6 bg-blue-500 rotate-45"></div>

            <p className="text-lg leading-relaxed">
              Conducted advanced Python training including Core Python,
              OOP, NumPy, Pandas, Matplotlib, Seaborn, Django,
              Flask, and MySQL integration.
            </p>

          </div>

        </div>

        {/* Item 3 */}
        <div className="flex flex-col md:flex-row items-center gap-6">

          <div className="w-24 h-24 rounded-2xl bg-white shadow-lg flex items-center justify-center text-5xl">
            📊
          </div>

          <div className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-[30px] relative">

            <div className="absolute left-0 top-1/2 -translate-x-3 -translate-y-1/2 w-6 h-6 bg-blue-500 rotate-45"></div>

            <p className="text-lg leading-relaxed">
              Specialized in Data Analytics and Data Science training
              using Excel, SQL, Power BI, Tableau, Python, Pandas,
              Machine Learning fundamentals, and dashboard creation.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>




{/* ================= OUR PROJECTS ================= */}


  {/* Background Decoration */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
  <div className="absolute top-1/2 -right-20 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl"></div>

  {/* Section Heading */}
  <div className="relative text-center mb-14 mt-10">

    <span className="inline-block bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-bold tracking-widest mb-4">
      OUR WORK
    </span>

    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
      Projects &{" "}
      <span className="text-blue-600">Portfolio</span>
    </h2>

    <p className="max-w-2xl mx-auto mt-5 text-slate-600 text-lg">
      Explore some of the real-world projects, applications and
      dashboards developed using modern technologies.
    </p>

  </div>

  {/* Projects Grid */}
  <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Project 1 */}
    <div className="group bg-white rounded-[30px] overflow-hidden shadow-lg border border-slate-200 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">

      <div className="h-56 bg-gradient-to-br from-blue-500 to-indigo-700 relative overflow-hidden">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-40 h-40 bg-white rounded-full -top-10 -right-10"></div>
          <div className="absolute w-32 h-32 bg-white rounded-full bottom-5 left-5"></div>
        </div>

        <div className="relative h-full flex items-center justify-center">

          <i className="fa-solid fa-code text-white text-7xl group-hover:scale-125 group-hover:rotate-6 transition duration-500"></i>

        </div>

        {/* Hover Button */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
          <button className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold">
            View Project
          </button>
        </div>

      </div>

      <div className="p-7">

        <div className="flex gap-2 flex-wrap mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            React.js
          </span>

          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
            Node.js
          </span>

          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
            MongoDB
          </span>
        </div>

        <h3 className="text-2xl font-bold text-slate-800">
          Full Stack Web Application
        </h3>

        <p className="text-slate-600 mt-3 leading-relaxed">
          A modern full-stack application developed using React,
          Node.js, Express and MongoDB with responsive UI and
          REST API integration.
        </p>

        <button className="mt-6 font-bold text-blue-600 flex items-center gap-2 group-hover:gap-4 transition-all">
          Explore Project
          <i className="fa-solid fa-arrow-right"></i>
        </button>

      </div>

    </div>


    {/* Project 2 */}
    <div className="group bg-white rounded-[30px] overflow-hidden shadow-lg border border-slate-200 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">

      <div className="h-56 bg-gradient-to-br from-emerald-500 to-teal-700 relative overflow-hidden">

        <div className="absolute inset-0 flex items-center justify-center">

          <i className="fa-brands fa-python text-white text-8xl group-hover:scale-125 transition duration-500"></i>

        </div>

        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
          <button className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold">
            View Project
          </button>
        </div>

      </div>

      <div className="p-7">

        <div className="flex gap-2 flex-wrap mb-4">

          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
            Python
          </span>

          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            Django
          </span>

          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
            MySQL
          </span>

        </div>

        <h3 className="text-2xl font-bold text-slate-800">
          Python Management System
        </h3>

        <p className="text-slate-600 mt-3 leading-relaxed">
          A scalable Python-based management system featuring
          authentication, database operations, CRUD functionality
          and an easy-to-use dashboard.
        </p>

        <button className="mt-6 font-bold text-emerald-600 flex items-center gap-2 group-hover:gap-4 transition-all">
          Explore Project
          <i className="fa-solid fa-arrow-right"></i>
        </button>

      </div>

    </div>


    {/* Project 3 */}
    <div className="group bg-white rounded-[30px] overflow-hidden shadow-lg border border-slate-200 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">

      <div className="h-56 bg-gradient-to-br from-purple-500 to-fuchsia-700 relative overflow-hidden">

        <div className="absolute inset-0 flex items-center justify-center">

          <i className="fa-solid fa-chart-pie text-white text-8xl group-hover:scale-125 group-hover:-rotate-6 transition duration-500"></i>

        </div>

        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
          <button className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold">
            View Project
          </button>
        </div>

      </div>

      <div className="p-7">

        <div className="flex gap-2 flex-wrap mb-4">

          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
            Power BI
          </span>

          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            SQL
          </span>

          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
            Python
          </span>

        </div>

        <h3 className="text-2xl font-bold text-slate-800">
          Business Analytics Dashboard
        </h3>

        <p className="text-slate-600 mt-3 leading-relaxed">
          Interactive business intelligence dashboard for analyzing
          sales, customers, revenue and business performance using
          Power BI and SQL.
        </p>

        <button className="mt-6 font-bold text-purple-600 flex items-center gap-2 group-hover:gap-4 transition-all">
          Explore Project
          <i className="fa-solid fa-arrow-right"></i>
        </button>

      </div>

    </div>


    {/* Project 4 */}
    <div className="group bg-white rounded-[30px] overflow-hidden shadow-lg border border-slate-200 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">

      <div className="h-56 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">

        <i className="fa-solid fa-database text-white text-8xl group-hover:scale-125 transition duration-500"></i>

      </div>

      <div className="p-7">

        <div className="flex gap-2 flex-wrap mb-4">

          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
            SQL
          </span>

          <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
            Database
          </span>

        </div>

        <h3 className="text-2xl font-bold text-slate-800">
          Database Management Project
        </h3>

        <p className="text-slate-600 mt-3 leading-relaxed">
          Database-driven project focused on relational database
          design, SQL queries, joins, reports and data management.
        </p>

        <button className="mt-6 font-bold text-orange-600 flex items-center gap-2 group-hover:gap-4 transition-all">
          Explore Project
          <i className="fa-solid fa-arrow-right"></i>
        </button>

      </div>

    </div>


    {/* Project 5 */}
    <div className="group bg-white rounded-[30px] overflow-hidden shadow-lg border border-slate-200 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">

      <div className="h-56 bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center">

        <i className="fa-solid fa-mobile-screen-button text-white text-8xl group-hover:scale-125 group-hover:rotate-6 transition duration-500"></i>

      </div>

      <div className="p-7">

        <div className="flex gap-2 flex-wrap mb-4">

          <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold">
            React
          </span>

          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            Responsive
          </span>

        </div>

        <h3 className="text-2xl font-bold text-slate-800">
          Responsive Web Portal
        </h3>

        <p className="text-slate-600 mt-3 leading-relaxed">
          Responsive and interactive web portal designed for
          desktop, tablet and mobile devices with modern UI.
        </p>

        <button className="mt-6 font-bold text-cyan-600 flex items-center gap-2 group-hover:gap-4 transition-all">
          Explore Project
          <i className="fa-solid fa-arrow-right"></i>
        </button>

      </div>

    </div>


    {/* Project 6 */}
    <div className="group bg-white rounded-[30px] overflow-hidden shadow-lg border border-slate-200 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">

      <div className="h-56 bg-gradient-to-br from-pink-500 to-rose-700 flex items-center justify-center">

        <i className="fa-solid fa-graduation-cap text-white text-8xl group-hover:scale-125 transition duration-500"></i>

      </div>

      <div className="p-7">

        <div className="flex gap-2 flex-wrap mb-4">

          <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
            LMS
          </span>

          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
            MERN
          </span>

        </div>

        <h3 className="text-2xl font-bold text-slate-800">
          Learning Management System
        </h3>

        <p className="text-slate-600 mt-3 leading-relaxed">
          Online learning platform featuring courses, students,
          trainers, authentication, progress tracking and
          educational resources.
        </p>

        <button className="mt-6 font-bold text-pink-600 flex items-center gap-2 group-hover:gap-4 transition-all">
          Explore Project
          <i className="fa-solid fa-arrow-right"></i>
        </button>

      </div>

    </div>

  </div>


{/* ================= CONTACT SECTION ================= */}
<section className="mt-28 relative overflow-hidden text-black">

  {/* Background */}
  <div className="absolute inset-0"></div>

  {/* Animated circles */}
  <div className="absolute -top-20 -right-20 w-72 h-72"></div>
  <div className="absolute"></div>

  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-14 lg:p-16">

    {/* Left Side */}
    <div className="text-black">

      <span className="inline-block bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm font-bold tracking-widest">
        GET IN TOUCH
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold mt-6 leading-tight">
        Let's Build Something
        <span className="block text-blue-400">
          Amazing Together.
        </span>
      </h2>

      <p className="text-slate-300 text-lg leading-relaxed mt-6 max-w-xl">
        Have a project idea, training requirement or business
        solution in mind? Get in touch and let's discuss how
        we can turn your idea into reality.
      </p>

      {/* Contact Details */}
      <div className="mt-10 space-y-6">

        <div className="flex items-center gap-5 group">

          <div className="w-14 h-14 rounded-2xl bg-green-500/20 border border-green-400/30 flex items-center justify-center group-hover:scale-110 transition">
            <i className="fa-brands fa-whatsapp text-2xl text-green-400"></i>
          </div>

          <div>
            <p className="text-sm text-slate-400">
              WhatsApp
            </p>

            <p className="text-lg font-bold">
              +91 9998003879
            </p>
          </div>

        </div>


        <div className="flex items-center gap-5 group">

          <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center group-hover:scale-110 transition">
            <i className="fa-regular fa-envelope text-2xl text-blue-400"></i>
          </div>

          <div>
            <p className="text-sm text-slate-400">
              Email
            </p>

            <p className="text-lg font-bold break-all">
              brijeshpandey@example.com
            </p>
          </div>

        </div>


        <div className="flex items-center gap-5 group">

          <div className="w-14 h-14 rounded-2xl bg-red-500/20 border border-red-400/30 flex items-center justify-center group-hover:scale-110 transition">
            <i className="fa-solid fa-location-dot text-2xl text-red-400"></i>
          </div>

          <div>
            <p className="text-sm text-slate-400">
              Location
            </p>

            <p className="text-lg font-bold">
              Rajkot, Gujarat - 360005
            </p>
          </div>

        </div>

      </div>

    </div>


    {/* Contact Form */}
    <div className="bg-white rounded-[30px] p-7 md:p-10 shadow-2xl">

      <h3 className="text-3xl font-bold text-slate-800">
        Send Us a Message
      </h3>

      <p className="text-slate-500 mt-2 mb-8">
        Fill out the form and we'll get back to you soon.
      </p>

      <form className="space-y-5">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Phone
            </label>

            <input
              type="text"
              placeholder="Enter phone number"
              className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
            />
          </div>

        </div>


        <div>

          <label className="block text-sm font-bold text-slate-700 mb-2">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
          />

        </div>


        <div>

          <label className="block text-sm font-bold text-slate-700 mb-2">
            Subject
          </label>

          <input
            type="text"
            placeholder="How can we help?"
            className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
          />

        </div>


        <div>

          <label className="block text-sm font-bold text-slate-700 mb-2">
            Message
          </label>

          <textarea
            rows="5"
            placeholder="Write your message..."
            className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition resize-none"
          ></textarea>

        </div>


        <button
          type="submit"
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg hover:shadow-blue-500/40 hover:-translate-y-1 active:scale-95 transition-all duration-300"
        >
          <span className="flex items-center justify-center gap-3">
            Send Message
            <i className="fa-solid fa-paper-plane"></i>
          </span>
        </button>

      </form>

    </div>

  </div>
  </section>

</section>

</>
  )
}
