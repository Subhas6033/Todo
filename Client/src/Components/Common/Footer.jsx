/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socialIcons = [
    {
      icon: FaFacebookF,
      url: "https://facebook.com",
    },
    {
      icon: FaInstagram,
      url: "https://instagram.com/goalkeepersubhas",
    },
    {
      icon: FaGithub,
      url: "https://github.com/Subhas6033",
    },
    {
      icon: FaLinkedin,
      url: "https://linkedin.com",
    },
  ];

  return (
    <footer className="bg-gray-900 text-neutral-content px-6 py-10">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap justify-between gap-10">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Security</li>
            <li className="hover:text-white cursor-pointer">Integrations</li>
            <li className="hover:text-white cursor-pointer">API</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Carriers</li>
            <li className="hover:text-white cursor-pointer">Press</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Status</li>
            <li className="hover:text-white cursor-pointer">Community</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">Privacy</li>
            <li className="hover:text-white cursor-pointer">Terms</li>
            <li className="hover:text-white cursor-pointer">Security</li>
            <li className="hover:text-white cursor-pointer">GDPR</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          {/* Left Side */}
          <p>&copy; {new Date().getFullYear()} Taskpro. All rights reserved.</p>

          {/* Social media icons */}
          <ul className="flex justify-center items-center gap-5">
            {socialIcons.map(({ icon: Icon, url }, index) => (
              <li key={index}>
                <a href={url}>
                  <Icon className="size-5 focus:outline-none" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <p>
            Developed and maintained by{" "}
            <a
              href="https://github.com/Subhas6033"
              className="text-slate-300 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subhas
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
