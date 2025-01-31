import PropTypes from "prop-types";

const BookingSlot = ({
  docSlots,
  slotIndex,
  setSlotIndex,
  slotTime,
  setSlotTime,
}) => {
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <div className="sm:ml-72 sm:pl-4 mt-4 font-medium textgray700">
      <p className="">Booking slots</p>
      {/* DAYS */}
      <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
        {docSlots.length &&
          docSlots.map((item, index) => {
            return (
              <div
                key={index}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                  index === slotIndex ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => {
                  setSlotIndex(index);
                }}
              >
                <p className="">
                  {item[0] && daysOfWeek[item[0].datetime.getDay()]}
                </p>
                <p className="">{item[0] && item[0].datetime.getDate()}</p>
              </div>
            );
          })}
      </div>
      {/* TIME */}
      <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
        {/* To scroll you have to use the shift+mousewheel */}
        {docSlots.length &&
          docSlots[slotIndex].map((item, index) => {
            return (
              <p
                key={index}
                className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                  item.time === slotTime
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => {
                  setSlotTime(item.time);
                }}
              >
                {item.time.toLowerCase()}
              </p>
            );
          })}
      </div>

      <button className="bg-app-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">
        Book an appointment
      </button>
    </div>
  );
};

BookingSlot.propTypes = {
  docSlots: PropTypes.array.isRequired,
  slotIndex: PropTypes.number.isRequired,
  setSlotIndex: PropTypes.func.isRequired,
  slotTime: PropTypes.number.isRequired,
  setSlotTime: PropTypes.func.isRequired,
};

export default BookingSlot;
