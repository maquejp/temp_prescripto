import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-4 my-10 mt-40 text-md">
        {/* LEFT SECTION */}
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-40" />
          <p className="w-full md:w-2/3 text-gray-400 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            debitis, sed voluptates ipsa omnis dignissimos officiis, mollitia
            incidunt corporis ut adipisci! Pariatur veniam voluptates non
            debitis, ullam est eos voluptatum.
          </p>
        </div>
        {/* CENTER SECTION */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="">Home</li>
            <li className="">About us</li>
            <li className="">Contact us</li>
            <li className="">Privacy policy</li>
          </ul>
        </div>
        {/* RIGHT SECTION */}
        <div>
          <p className="text-xl font-medium mb-5">Get in touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="">+91 0000000000</li>
            <li className="">info@prescripto.com</li>
          </ul>
        </div>
      </div>
      {/* COPYRIGHT */}
      <div className="">
        <hr className="" />
        <p className="py-5 text-sm text-center">
          Copyright 2025 - Prescripto - All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
