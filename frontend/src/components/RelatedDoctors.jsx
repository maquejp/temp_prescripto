import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import DoctorCard from "./DoctorCard";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ docId, speciality }) => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const [relatedDoctors, setRelatedDoctors] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelatedDoctors(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div>
      {relatedDoctors.length > 0 && (
        <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
          <h1 className="text-3xl font-medium">Related doctors</h1>
          <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] max-w-[1000px] gap-4 pt-5 gap-y-6 px-3 sm:px-0">
            {/* Doctor Card */}
            {relatedDoctors.slice(0, 5).map((doctor, index) => (
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
      )}
    </div>
  );
};

RelatedDoctors.propTypes = {
  docId: PropTypes.string.isRequired,
  speciality: PropTypes.string.isRequired,
};

export default RelatedDoctors;
