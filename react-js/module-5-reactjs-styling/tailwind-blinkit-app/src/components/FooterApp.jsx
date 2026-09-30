import React from 'react'

export default function FooterApp() {
  return (
    
    <>
  {/* create a footer of blinkit */}
  <footer className="bg-gray-100 mt-10 py-10">
    <div className="max-w-7xl mx-auto px-4">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-700">
        {/* About */}
        <div>
          <h3 className="font-semibold text-lg mb-3">About Blinkit</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="about.html" className="hover:text-black">
                About us
              </a>
            </li>
            <li>
              <a href="career.html" className="hover:text-black">
                Careers
              </a>
            </li>
            <li>
              <a href="press.html" className="hover:text-black">
                Press
              </a>
            </li>
          </ul>
        </div>
        {/* Categories */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="404.html" className="hover:text-black">
                Fruits &amp; Vegetables
              </a>
            </li>
            <li>
              <a href="404.html" className="hover:text-black">
                Dairy &amp; Bakery
              </a>
            </li>
            <li>
              <a href="404.html" className="hover:text-black">
                Snacks &amp; Beverages
              </a>
            </li>
          </ul>
        </div>
        {/* Customer Help */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Customer Help</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="faq.html" className="hover:text-black">
                FAQ
              </a>
            </li>
            <li>
              <a href="privacy.html" className="hover:text-black">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="terms.html" className="hover:text-black">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
        {/* Social */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex items-center space-x-4 text-2xl text-gray-600">
            <i className="fa fa-facebook hover:text-blue-600" />
            <i className="fa fa-twitter hover:text-blue-400" />
            <i className="fa fa-instagram hover:text-pink-500" />
            <i className="fa fa-whatsapp hover:text-green-500" />
            <i className="fa fa-snapchat hover:text-yellow-500" />
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-300 my-6" />
      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-600">
        © 2024 Blinkit. All rights reserved.
      </div>
    </div>
  </footer>
</>

  )
}
