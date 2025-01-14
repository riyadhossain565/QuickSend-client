import React from "react";
import Container from "../Container";
import logoGif from "../../assets/logo/logo-gif.gif";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#253138] text-white pt-16">
      <Container>
        {/* footer start */}
        <div className="flex items-center gap-1 mb-8">
          <img className="w-8" src={logoGif} alt="" />
          <h2 className="text-2xl font-bold exo-font">QuickSend</h2>
        </div>
        {/* footer end */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-0 py-4">
          <div>
            <h3 className="text-xl font-bold exo-font mb-4">Company</h3>
            <nav>
              <ul>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Product</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="text-xl font-bold exo-font mb-4">Join Us</h3>
            <nav>
              <ul>
                <li>
                  <a href="">Driver Partner</a>
                </li>
                <li>
                  <a href="">Merchant</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="text-xl font-bold exo-font mb-4">Career</h3>
            <nav>
              <ul>
                <li>
                  <a href="">Internship</a>
                </li>
                <li>
                  <a href="">Proffesional</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="text-xl font-bold exo-font mb-4">
              Further Information
            </h3>

            <nav>
              <ul>
                <li>
                  <a href="">Terms & Condition</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="text-xl font-bold exo-font mb-4">Find Us</h3>
            <div className="flex gap-2">
              <div className="border text-xl p-2 rounded-full cursor-pointer text-[#253138] bg-white">
                <FaFacebookF />
              </div>
              <div className="border text-xl p-2 rounded-full cursor-pointer text-[#253138] bg-white">
                <FaTwitter />
              </div>
              <div className="border text-xl p-2 rounded-full cursor-pointer text-[#253138] bg-white">
                <FaYoutube />
              </div>
              <div className="border text-xl p-2 rounded-full cursor-pointer text-[#253138] bg-white">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>

        {/* footer end */}
        <div className="flex justify-center py-8">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            QuickSend
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
