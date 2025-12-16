import Image from "next/image";
import React from "react";
import { infolist, toolsData } from "../public/assets/imgprofile/infoList";
const About = () => {
  return (
    <div
      id="about"
      className="w-full px-[12%] py-16 scroll-mt-10 dark:bg-black dark:text-white"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Perkenalan</h4>
      <h2 className="text-center text-3xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row  items-center gap-10 my-5 ">
        <div className="w-64 sm:w-48 rounded-3xl max-w-none">
          <Image
            src="/assets/imgprofile/PAS.JPG"
            alt="User"
            width={300}
            height={300}
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-7 max-w-2xl font-Ovo dark:text-white">
            Saya sekarang adalah seorang mahasiswa Teknik Informatika di STMIK
            Bina Mulia Palu saya belum memiliki pengalaman kerja tapi saya sudah
            mempunyai kemampuan dalam bidang fullstack web developer dibuktikan
            dengan mengerjakan tugas kuliah di kampus saya.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl">
            {infolist.map(({ icon, title, deskription }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-3 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:bg-gray-800 dark:hover:shadow-black "
                key={index}
              >
                <div className="w-7 mt-2 dark:text-white">{icon}</div>
                <h3 className="my-2 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white">
                  {deskription}
                </p>
              </li>
            ))}
          </ul>

          <h4 className="my-3 text-gray-700 font-Ovo dark:text-white">
            Tools yang saya gunakan
          </h4>
          <ul className="flex items-center gap-3 sm:gap-3">
            {toolsData.map((tool) => (
              <li
                className="flex items-center justify-center w-12 sm:w-10 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={tool.key}
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
