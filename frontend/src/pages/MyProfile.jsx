import { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "bKjy9@example.com",
    phone: "+91 9876543210",
    address: { line1: "123 Main Street,", line2: " City, State, Zip Code" },
    gender: "Male",
    dob: "1990-01-01",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      <img src={userData.image} alt="avatar" />
      <div className="flex items-center">
        <label htmlFor="name" className="pr-4 font-bold">
          Full name:
        </label>
        {isEdit ? (
          <input
            className="border border-zinc-300 rounded p-2 mt-1"
            id="name"
            type="text"
            value={userData.name}
            onChange={(e) => {
              setUserData({ ...userData, name: e.target.value });
            }}
          />
        ) : (
          <p className="p-2  mt-1">{userData.name} </p>
        )}
      </div>

      <div>
        <p className="text-lg font-medium py-5">Contact information</p>
        <div className="flex items-center">
          <label htmlFor="email" className="pr-4 font-bold">
            Email:
          </label>
          {isEdit ? (
            <div>
              <input
                className="border border-zinc-300 rounded p-2 mt-1"
                id="email"
                type="text"
                value={userData.email}
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
              />
            </div>
          ) : (
            <p className="p-2  mt-1">{userData.email}</p>
          )}
        </div>
        <div className="flex items-center">
          <label htmlFor="phone" className="pr-4 font-bold">
            Phone:
          </label>
          {isEdit ? (
            <div>
              <input
                className="border border-zinc-300 rounded p-2 mt-1"
                id="phone"
                type="text"
                value={userData.phone}
                onChange={(e) => {
                  setUserData({ ...userData, phone: e.target.value });
                }}
              />
            </div>
          ) : (
            <p className="p-2  mt-1">{userData.phone}</p>
          )}
        </div>
        <div>
          <label htmlFor="address" className="pr-4 font-bold">
            Address:
          </label>
          <br />
          {isEdit ? (
            <div className="flex flex-col w-1/3 pl-5">
              <input
                className="border border-zinc-300 rounded p-2 mt-1"
                type="text"
                value={userData.address.line1}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    address: { ...userData.address, line1: e.target.value },
                  });
                }}
              />
              <input
                className="border border-zinc-300 rounded p-2 mt-1"
                type="text"
                value={userData.address.line2}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    address: { ...userData.address, line2: e.target.value },
                  });
                }}
              />
            </div>
          ) : (
            <div className="flex flex-col w1/3 pl-5 p-2  mt-1">
              <p>{userData.address.line1}</p>
              <p>{userData.address.line2}</p>
            </div>
          )}
        </div>
      </div>

      <div>
        <p className="text-lg font-medium py-5">Basic Information</p>
        <div className="flex items-center">
          <label htmlFor="gender" className="pr-4 font-bold">
            Gender:
          </label>
          {isEdit ? (
            <div>
              <select
                className="border border-zinc-300 rounded p-2 mt-1"
                name="gender"
                onChange={(e) =>
                  setUserData({ ...userData, gender: e.target.value })
                }
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          ) : (
            <p className="p-2  mt-1">{userData.gender}</p>
          )}
        </div>
        <div className="flex items-center">
          <label htmlFor="dob" className="pr-4 font-bold">
            Date of Birth:
          </label>
          {isEdit ? (
            <div>
              <input
                className="border border-zinc-300 rounded p-2 mt-1"
                id="dob"
                type="date"
                value={userData.dob}
                onChange={(e) => {
                  setUserData({ ...userData, dob: e.target.value });
                }}
              />
            </div>
          ) : (
            <p className="p-2  mt-1">{userData.dob}</p>
          )}
        </div>
      </div>

      <div className="flex flex-row gap-2">
        {isEdit ? (
          <button
            className="bg-app-primary px-12 py-3 rounded-full text-white text-sm mt-10 cursor-pointer"
            onClick={() => setIsEdit(!isEdit)}
          >
            Confirm
          </button>
        ) : (
          <button
            className="bg-app-primary px-12 py-3 rounded-full text-white text-sm mt-10 cursor-pointer"
            onClick={() => setIsEdit(!isEdit)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
