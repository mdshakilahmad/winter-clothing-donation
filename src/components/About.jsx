import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { TiTickOutline } from "react-icons/ti";
import about from "../assets/about.jpg";
const About = () => {
  useGSAP(() => {
    gsap.utils.toArray(".box").forEach((box) => {
      gsap.fromTo(
        box,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: box,
            start: "top 80%", // When 80% of the box is in view
            end: "bottom 50%",
            scrub: 1, // Smooth animation
          },
        }
      );
    });
  }, []);
  return (
    <div className="box flex justify-between gap-5 py-5 items-center">
      {/* <h3 ref={textRef}>winter-clothing-donation</h3> */}
      <div>
        <img className="w-full" src={about} alt="about-img" />
      </div>
      <div className="space-y-5">
        <h2 className="text-2xl">About us donate</h2>
        <h3 className="text-xl">
          We Believe that We can Save More Lifes with you
        </h3>
        <p>
          Donet is the largest global crowdfunding community connecting
          nonprofits, donors, and companies in nearly every country. We help
          nonprofits from Afghanistan to Zimbabwe (and hundreds of places in
          between) access the tools, training, and support they need to be more
          effective and make our world a better place.
        </p>
        <div>
          <ul className="grid grid-cols-2 gap-5">
            <li className="flex items-center">
              <TiTickOutline className="inline-block mr-1" />
              Charity For Foods
            </li>
            <li className="flex items-center">
              <TiTickOutline className="inline-block mr-1" /> Charity For Water
            </li>
            <li className="flex items-center">
              <TiTickOutline className="inline-block mr-1" /> Charity For
              Education
            </li>
            <li className="flex items-center">
              <TiTickOutline className="inline-block mr-1" /> Charity For
              Medical
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
