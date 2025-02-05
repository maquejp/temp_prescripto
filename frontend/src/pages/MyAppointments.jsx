import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div>
      <p>My Appointments</p>
      <div>
        {/* LIST */}
        {doctors.slice(0, 3).map((doc, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg my-4 py-4 px-4 flex items-center gap-4"
          >
            <img src={doc.image} alt="docimg" className="w-50" />
            <div className="w-full">
              <p className="font-semibold">{doc.name}</p>
              <p>{doc.speciality}</p>

              <div className="pt-4">
                <p className="font-semibold">Address</p>
                <p>{doc.address.line1}</p>
                <p>{doc.address.line2}</p>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <p className="font-semibold">Date & Time:</p>
                <p> 25, may 2023 | 10:00 AM</p>
              </div>
            </div>
            <div className="flex flex-col">
              <button className="bg-app-primary py-1 px-20 mt-1 rounded-full text-white text-sm cursor-pointer">
                Pay
              </button>
              <button className="bg-green-300 py-1 px-20 mt-1 rounded-full text-black text-sm cursor-pointer">
                Paid
              </button>
              <button className="bg-app-primary py-1 px-20 mt-1 rounded-full text-white text-sm cursor-pointer">
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
