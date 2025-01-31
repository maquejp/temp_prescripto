import { useContext } from "react";
import PropTypes from "prop-types";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const DocDetails = ({ docInfo }) => {
  const { currencySymbol } = useContext(AppContext);
  return (
    <div>
      {/* DOCTOR DETAILS */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="">
          <img
            src={docInfo?.image}
            alt=""
            className="bg-app-primary w-full sm:max-w-72 rounded-lg"
          />
        </div>
        <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          {/* DOC INFO : NAME, DEGREE, EXP */}
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {docInfo?.name}{" "}
            <img src={assets.verified_icon} alt="" className="w-5" />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p className="">
              {docInfo?.degree} - {docInfo?.speciality}
            </p>
            <button className="py-0.5 px-2 border text-xs rounded-full">
              {docInfo.experience}
            </button>
          </div>
          {/* DOC ABOUT */}
          <div className="">
            <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
              About <img src={assets.info_icon} alt="" className="" />
            </p>
            <p className="text-sm text-gray-500 max-w-[700px] mt1">
              {docInfo.about}
            </p>
          </div>
          {/* DOC FEES */}
          <p className="text-gray-500 font-medium mt-4">
            Appointment fees:
            <span className="mx-2 text-gray-600">
              {currencySymbol}
              {docInfo.fees}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
DocDetails.propTypes = {
  docInfo: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    degree: PropTypes.string,
    speciality: PropTypes.string,
    experience: PropTypes.string,
    about: PropTypes.string,
    fees: PropTypes.number,
  }).isRequired,
};

export default DocDetails;
