import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div>
        <div className="text-center text-2xl pt-10 text-gray-500">
          <p>
            About <span className="text-gray-700 font-medium">US</span>
          </p>
        </div>

        <div className="my-10 flex flex-com md:flex-row gap-12">
          <img
            src={assets.about_image}
            alt=""
            className="w-full md:max-w-[360px]"
          />
          <div className="flex flex-col fustify-center gap-6 md:w-2/4 text-sm text-gray-600">
            <p>
              Welcome to Prescripto, your trusted partner in managing your
              healthcare needs conveniently and efficiently. At Prescripto, we
              understand the challenges individuals face when it comes to
              scheduling doctor appointments and managing their health records.
            </p>

            <p>
              Prescripto is committed to excellence in healthcare technology. We
              continuously strive to enhance our platform, integrating the
              latest advancements to improve user experience and deliver
              superior service. Whether you&quote;re booking your first
              appointment or managing ongoing care, Prescripto is here to
              support you every step of the way.
            </p>

            <b className="text-gray-800">Our vision</b>

            <p>
              Our vision at Prescripto is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-2xl pt-10 text-gray-500">
          <p>
            Why <span className="text-gray-700 font-medium">CHOOSE US</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-12 my-10">
          <div className="border-2 border-gray-200 p-4 rounded-lg">
            <b className="text-gray-800">Efficiency:</b>
            <p>Streamlined</p>
          </div>
          <div className="border-2 border-gray-200 p-4 rounded-lg">
            <b className="text-gray-800">Convenience:</b>
            <p>Acces to a network</p>
          </div>
          <div className="border-2 border-gray-200 p-4 rounded-lg">
            <b className="text-gray-800">Personalisation:</b>
            <p>Tailored</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
