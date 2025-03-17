/* import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react"; */

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
const Footer = () => {
  /*   const container = useRef();

  useGSAP(
    () => {
      // ✅ safe, created during execution, selector text scoped
      gsap.to(".good", { x: 100, rotate: -1 });
    },
    { scope: container }
  );

  // ❌ Unsafe! Created on interaction and not wrapped in contextSafe()
  // animation will not be cleaned up
  // Selector text also isn't scoped to the container.
  const onClickBad = () => {
    gsap.to(".bad", { y: 100 });
  };
 */
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-gray-800 text-white">
        {/*       <div ref={container}>
        <div className="good">
          <p>Lorem ipsum dolor sit amet. this is good</p>
        </div>
        <button onClick={onClickBad} className="bad">
          this is bad
        </button>
      </div> */}
        <div>
          <h3 className="text-2xl pb-3">Donate</h3>
          <p>
            Our secure online donation platform allows you to make contributions
            quickly and safely. Choose from various.
          </p>
          <button className="btn btn-primary mt-3">Donate</button>
        </div>
        <div>
          <h3 className="text-2xl mb-3 pb-2 relative before:absolute before:bg-green-500 before:w-1/6 before:h-[1px] before:bottom-0 before:left-0">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our News</a>
            </li>
            <li>
              <a href="#">Our Campaign</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl mb-3 pb-2 relative before:absolute before:bg-green-500 before:w-1/6 before:h-[1px] before:bottom-0 before:left-0">
            Our Service
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#">Give Donation</a>
            </li>
            <li>
              <a href="#">Education Support</a>
            </li>
            <li>
              <a href="#">Food Support</a>
            </li>
            <li>
              <a href="#">Health Support</a>
            </li>
            <li>
              <a href="#">Our Campaign</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center bg-stone-500 rounded-lg p-4">
          <div>
            <h3 className="text-2xl pb-3">Contact Us</h3>
            <div className="flex items-center gap-4 pb-4">
              <MdCall />
              <div>
                <p>Call us any time:</p>
                <h4>
                  <a href="#">+163-3654-7896</a>
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-4 pb-4">
              <MdEmail />
              <div>
                <p>Email us any time:</p>
                <h4>
                  <a href="#">info@donat.com</a>
                </h4>
              </div>
            </div>
          </div>
          <div className="bg-green-500 rounded-lg space-y-4 p-4">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white p-4 text-center">
        <p>
          <span>&copy;</span> Copyright 2025 Donate. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
<h2>This is a Footer</h2>;
