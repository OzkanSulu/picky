import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const footerLinks: string[] = [
  "Our Story",
  "Terms of Service",
  "Privacy Policy",
  "Cookie Policy",
  "Opt Out",
  "CCPA",
];

const socialMediaIcons = [
  { icon: <FaFacebookF /> },
  { icon: <FaTwitter /> },
  { icon: <FaInstagram /> },
  { icon: <FaLinkedinIn /> },
];

const Footer: React.FC = () => {
  return (
    <footer className="text-zinc-600 py-3 mx-[16px] lg:max-w-6xl lg:mx-auto lg:py-6">
      <div className="container mx-auto px-[16px] lg:px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <ul className="flex flex-wrap justify-center items-center gap-2 mb-4">
            {footerLinks.map((link) => (
              <li key={link} className="text-[12px] lg:text-[14px]">
                {link}
              </li>
            ))}
          </ul>

          <div className="flex space-x-4 mb-4 sm:mb-0">
            {socialMediaIcons.map(({ icon }, index) => (
              <div key={index} className="text-gray-400">
                {icon}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
