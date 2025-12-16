import React from "react";
import { serviceData } from "@/public/assets/imgprofile/infoList";
import { GoArrowRight } from "react-icons/go";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full px-[12%] py-20 scroll-mt-10 dark:bg-black dark:text-white"
    >
      {" "}
      <h4 className="text-center mb-2 text-lg font-Ovo dark:text-white">
        Apa yang saya tawarkan
      </h4>
      <h2 className="text-center text-5xl font-Ovo dark:text-white">
        Layananku
      </h2>
      <p className="text-center font-Ovo max-w-2xl mx-auto mt-5 mb-6 dark:text-white">
        Saya membuat website dari awal menggunakan teknologi modern seperti
        HTML, CSS, JavaScript, React.js, dan Tailwind CSS. Desain responsif dan
        cepat.
      </p>
      <div className="grid grid-cols-auto gap-6 my-5">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-5 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:text-white dark:hover:bg-gray-800 dark:hover:shadow-black"
          >
            {icon}
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white">
              {description}
            </p>
            <a
              href={link}
              className="flex items-center gap-2 text-sm mt-5 dark:text-white"
            >
              Read more <GoArrowRight />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
