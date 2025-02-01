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
        <p className="pr-4">Full name:</p>
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
          <p>{userData.name} </p>
        )}
      </div>

      <hr />
      <p className="text-lg font-medium">Contact information</p>

      <div className="flex items-center">
        <label htmlFor="email" className="pr-4">
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
          <p>{userData.email}</p>
        )}
      </div>

      <div className="flex items-center">
        <label htmlFor="phone" className="pr-4">
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
          <p>{userData.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="address">Address:</label>
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
          <div className="flex flex-col w1/3 pl-5">
            <p>{userData.address.line1}</p>
            <p>{userData.address.line2}</p>
          </div>
        )}
      </div>

      <p className="text-lg font-medium">Basic Information</p>

      <div className="flex items-center">
        <label htmlFor="gender" className="pr-4">
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
          <p>{userData.gender}</p>
        )}
      </div>

      <div className="flex items-center">
        <label htmlFor="dob" className="pr-4">
          Date of Birth:
        </label>
        {isEdit ? (
          <div>
            <input
              className="border border-zinc-300 rounded p-2 mt-1"
              id="dob"
              type="text"
              value={userData.dob}
              onChange={(e) => {
                setUserData({ ...userData, dob: e.target.value });
              }}
            />
          </div>
        ) : (
          <p>{userData.dob}</p>
        )}
      </div>

      <div className="flex flex-row gap-2">
        <button
          className="bg-app-primary px-12 py-3 rounded-full text-white text-sm mt-10 cursor-pointer"
          onClick={() => setIsEdit(!isEdit)}
        >
          Edit
        </button>
        <button
          className="bg-app-primary px-12 py-3 rounded-full text-white text-sm mt-10 cursor-pointer"
          onClick={() => setIsEdit(!isEdit)}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
