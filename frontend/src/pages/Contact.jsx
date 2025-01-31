import { assets } from "../assets/assets";
const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          Contact <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-com md:flex-row gap-12">
        <img
          src={assets.contact_image}
          alt=""
          className="w-full md:max-w-[360px]"
        />
        <div className="flex flex-col fustify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <b className="text-gray-800">Our office</b>
          <p>Street address</p>
          <p>City, State, Zip</p>
          <b className="text-gray-800">Careers at Prescripto</b>
          <p>Learn more</p>
          <button>Explore jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
