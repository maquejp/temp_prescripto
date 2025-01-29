import { doctors } from "../assets/assets";

const TopDoctors = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800">
      <h1 className="">Top Doctors to book</h1>
      <p className="">
        Simply browse through our extensive list of trusted doctors
      </p>
      <div className="">
        {/* Doctor Card */}
        {doctors.map((doctor, index) => (
          <div className="flex items-center gap-4" key={index}>
            <img className="w-16 h-16" src={doctor.image} alt={doctor.name} />
            <div className="flex flex-col">
              <p className="font-semibold">{doctor.name}</p>
              <p className="text-gray-600">{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDoctors;
