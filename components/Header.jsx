import React from "react";
import Image from "next/image";
import { FaRegHandPeace } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
const Header = () => {
  const resumeFilePath = "/assets/Ruli_Rolando_Intern_Frontend.pdf";
  return (
    <div className="pt-7 w-full max-w-3x1 text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 dark:text-white dark:bg-black">
      <div>
        <Image
          src="/assets/imgprofile/PAS.JPG"
          alt=""
          width={200}
          height={200}
          className="rounded-full w-32 h-32 object-cover object-top"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo dark:text-white">
        Hi, I'm <span className="font-bold">Ruli rolando </span>
        <FaRegHandPeace className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo dark:text-white">
        Junior fullstack web developer
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo dark:text-white">
        Saya adalah junior fullstack web developer yang memiliki ketertarikan
        dalam bidang teknologi.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href={resumeFilePath}
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          my resume <FaDownload className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
