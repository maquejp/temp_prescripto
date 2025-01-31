import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useParams, useNavigate } from "react-router-dom";
import DoctorCard from "../components/DoctorCard";

const Doctors = () => {
  const { doctors, specialityData } = useContext(AppContext);
  const { specialityParam } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (specialityParam) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === specialityParam));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, specialityParam]);

  return (
    <div className="">
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-10">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p
            className={`w-[94vw] sm:w-auto cursor-pointer pl-3 py-1.5 pr-16 border border-gray-400 rounded transition-all duration-300 hover:bg-gray-100 ${
              specialityParam === undefined ? "bg-green-200" : ""
            }`}
            onClick={() => navigate(`/doctors/`)}
          >
            All Specialities
          </p>
          {specialityData.map((speciality, index) => {
            return (
              <p
                className={`w-[94vw] sm:w-auto cursor-pointer pl-3 py-1.5 pr-16 border border-gray-400 rounded transition-all duration-300 hover:bg-gray-100 ${
                  specialityParam === speciality.speciality
                    ? "bg-green-200"
                    : ""
                }`}
                key={index}
                onClick={() => navigate(`/doctors/${speciality.speciality}`)}
              >
                {speciality.speciality}
              </p>
            );
          })}
        </div>
        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] max-w-[1000px] gap-4 pt-5 gap-y-6 px-3 sm:px-0">
          {filterDoc.map((doctor, index) => {
            return <DoctorCard doctor={doctor} index={index} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
