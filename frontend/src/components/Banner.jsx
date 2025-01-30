import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-app-primary rounded-lg px-6 md:px-6 lg:px-6">
      {/* LEFT */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br className="hidden sm:block" />
          With 100+ Trusted Doctors
        </p>
        <a
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 cursor-pointer"
          onClick={() => {
            navigate(`/login`);
            scrollTo(0, 0);
          }}
        >
          Create an account
          <img className="w-3" src={assets.arrow_icon} alt="arrow icon" />
        </a>
      </div>
      {/* RIGHT */}
      <div className="hidden md:block md:w-1/3 relative ">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.appointment_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
