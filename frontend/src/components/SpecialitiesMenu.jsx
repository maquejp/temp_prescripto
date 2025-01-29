import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

const SpecialitiesMenu = () => {
  return (
    <div
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
      id="specialities"
    >
      <h1 className="text-3xl font-medium">Find by Speciality</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our list of trusted doctors, schedule your
        appointment without any hassles.
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map((speciality, index) => (
          <Link
            className="flex flex-col items-center text-xs cursor-pointer flex-shrin0 hover:translate-y-[-10px] transition-all duration-500"
            to={`/doctors/${speciality.speciality}`}
            key={index}
            onClick={() => scrollTo(0, 0)}
          >
            <img
              className="w-16 sm:w-24 mb-2"
              src={speciality.image}
              alt={speciality.speciality}
            />
            <p>{speciality.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default SpecialitiesMenu;
