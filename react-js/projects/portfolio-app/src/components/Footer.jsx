import React from 'react'

export default function Footer() {
  return (
    <div>
      {/* ================= FOOTER ================= */}
<footer className="mt-24 relative overflow-hidden bg-slate-950 text-white">

  {/* Decorative Background */}
  <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">

    {/* Main Footer */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* Brand */}
      <div>

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <i className="fa-solid fa-code text-xl"></i>
          </div>

          <h2 className="text-2xl font-extrabold">
            Brijesh Pandey
          </h2>

        </div>

        <p className="text-slate-400 mt-6 leading-relaxed">
          Senior Technical Trainer specializing in Full Stack
          Development, Python, Data Analytics, Data Science and
          modern web technologies.
        </p>

        {/* Social Icons */}
        <div className="flex gap-3 mt-7">

          <a
            href="#"
            className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 transition-all"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>

          <a
            href="#"
            className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-black hover:-translate-y-1 transition-all"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="#"
            className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-600 hover:-translate-y-1 transition-all"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>

          <a
            href="#"
            className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:-translate-y-1 transition-all"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>

        </div>

      </div>


      {/* Quick Links */}
      <div>

        <h3 className="text-lg font-bold mb-6">
          Quick Links
        </h3>

        <ul className="space-y-4 text-slate-400">

          <li>
            <a
              href="#home"
              className="hover:text-blue-400 hover:pl-2 transition-all"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-blue-400 hover:pl-2 transition-all"
            >
              About Me
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-blue-400 hover:pl-2 transition-all"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#expertise"
              className="hover:text-blue-400 hover:pl-2 transition-all"
            >
              Expertise
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-blue-400 hover:pl-2 transition-all"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>


      {/* Expertise */}
      <div>

        <h3 className="text-lg font-bold mb-6">
          Expertise
        </h3>

        <ul className="space-y-4 text-slate-400">

          <li className="flex items-center gap-3">
            <i className="fa-solid fa-check text-blue-400"></i>
            MERN Stack Development
          </li>

          <li className="flex items-center gap-3">
            <i className="fa-solid fa-check text-blue-400"></i>
            Python Programming
          </li>

          <li className="flex items-center gap-3">
            <i className="fa-solid fa-check text-blue-400"></i>
            Data Analytics
          </li>

          <li className="flex items-center gap-3">
            <i className="fa-solid fa-check text-blue-400"></i>
            Data Science
          </li>

          <li className="flex items-center gap-3">
            <i className="fa-solid fa-check text-blue-400"></i>
            Power BI
          </li>

        </ul>

      </div>


      {/* Contact */}
      <div>

        <h3 className="text-lg font-bold mb-6">
          Contact
        </h3>

        <div className="space-y-5 text-slate-400">

          <div className="flex gap-3">

            <i className="fa-brands fa-whatsapp text-green-500 text-xl mt-1"></i>

            <span>
              +91 9998003879
            </span>

          </div>

          <div className="flex gap-3">

            <i className="fa-regular fa-envelope text-blue-500 text-xl mt-1"></i>

            <span className="break-all">
              brijeshpandey@example.com
            </span>

          </div>

          <div className="flex gap-3">

            <i className="fa-solid fa-location-dot text-red-500 text-xl mt-1"></i>

            <span>
              Rajkot, Gujarat - 360005
            </span>

          </div>

        </div>

      </div>

    </div>


    {/* Divider */}
    <div className="border-t border-white/10 mt-14 pt-7">

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-slate-500 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Brijesh Kumar Pandey.
          All Rights Reserved.
        </p>

        <p className="text-slate-500 text-sm">
          Designed & Developed with
          <span className="text-red-500 mx-1 animate-pulse">
            ❤️
          </span>
          using React & Tailwind CSS
        </p>

      </div>

    </div>

  </div>

</footer>
</div>
  )
}
