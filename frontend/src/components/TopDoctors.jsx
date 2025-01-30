import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import DoctorCard from "./DoctorCard";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors
      </p>
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] max-w-[1000px] gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {/* Doctor Card */}
        {doctors.slice(0, 10).map((doctor, index) => (
          <DoctorCard doctor={doctor} index={index} key={index} />
        ))}
      </div>
      <button
        className="bg-app-primary px-12 py-3 rounded-full text-white text-sm mt-10 cursor-pointer"
        onClick={() => {
          navigate(`/doctors`);
          scrollTo(0, 0);
        }}
      >
        More
      </button>
    </div>
  );
};

export default TopDoctors;
