import { MdCastForEducation } from "react-icons/md";
import { MdElectricBolt } from "react-icons/md";
import { MdMedicalServices } from "react-icons/md";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
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
    <div className="mt-10 box">
      <h3 className="text-center text-2xl pt-8 pb-3">Charity Services</h3>
      <h2 className="text-center text-2xl pb-20">
        We Do it for all People Humanist Services
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 text-center pb-5">
        <div className=" bg-gray-100 p-10 rounded-3xl space-y-4 relative group">
          <div className="absolute group-hover:text-black group-hover:bg-green-500 -top-10 left-1/2 -translate-x-1/2 bg-primary p-5 rounded-full text-white">
            <MdElectricBolt className="w-8 h-8 transition-transform duration-500 group-hover:[transform:rotateY(180deg)]" />
          </div>
          <h4 className="text-xl">Electrical Inspections</h4>
          <p>
            Share stories and experiences from current volunteers to inspire
            others to join. Allow user to sign up for volunteer opportunities.
          </p>
          <button className="btn btn-primary group-hover:text-black group-hover:bg-green-500 group-hover:border-green-500">
            Learn More
          </button>
        </div>
        <div className=" bg-gray-100 p-10 rounded-3xl space-y-4 relative group">
          <div className="absolute group-hover:text-black group-hover:bg-green-500 -top-10 left-1/2 -translate-x-1/2 bg-primary p-5 rounded-full text-white">
            <MdCastForEducation className="w-8 h-8 transition-transform duration-500 group-hover:[transform:rotateY(180deg)]" />
          </div>
          <h4 className="text-xl">Educations</h4>
          <p>
            Explore our charity website to discover impactful projects,
            opportunities, and ways to donate, helping those in need thrive.
          </p>
          <button className="btn btn-primary group-hover:text-black group-hover:bg-green-500 group-hover:border-green-500">
            Learn More
          </button>
        </div>
        <div className=" bg-gray-100 p-10 rounded-3xl space-y-4 relative group">
          <div className="absolute group-hover:text-black group-hover:bg-green-500 -top-10 left-1/2 -translate-x-1/2 bg-primary p-5 rounded-full text-white">
            <MdMedicalServices className="w-8 h-8 transition-transform duration-500 group-hover:[transform:rotateY(180deg)]" />
          </div>
          <h4 className="text-xl">Medical Help</h4>
          <p>
            Join us in making a difference! Our charity website connects you
            with volunteer, donation options, and inspiring stories.
          </p>
          <button className="btn btn-primary group-hover:text-black group-hover:bg-green-500 group-hover:border-green-500">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
