import React from "react";
import { certificateData } from "../public/assets/sertifikat/certifikatData";

const Certificates = () => {
  return (
    <div
      id="sertifikat"
      className="w-full px-[12%] py-20 scroll-mt-10 dark:bg-black dark:text-white"
    >
      {/* Bagian Judul dan Deskripsi */}
      <h4 className="text-center mb-2 text-lg font-Ovo">
        Pencapaian & Kualifikasi
      </h4>
      <h2 className="text-center text-5xl font-Ovo">Sertifikatku</h2>
      <p className="text-center font-Ovo max-w-2xl mx-auto mt-5 mb-6 ">
        Berikut adalah beberapa sertifikasi profesional yang telah saya capai
        untuk meningkatkan keahlian di bidang pengembangan web.
      </p>

      {/* Bagian Grid Sertifikat */}
      <div className="grid grid-cols-auto gap-6 my-5">
        {certificateData.map(({ icon, title, issuer, date, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-5 hover:shadow-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500  dark:hover:bg-gray-800"
          >
            <div className="flex items-center justify-between dark:text-white">
              {icon}
              <span className="text-sm text-gray-500 dark:text-white ">
                {date}
              </span>
            </div>

            <h3 className="text-lg my-4 text-gray-800 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 mb-4 ">
              Diterbitkan oleh: **{issuer}**
            </p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-800 duration-300 font-medium"
            >
              Lihat Kredensial →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
