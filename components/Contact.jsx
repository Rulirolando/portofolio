import React from "react";
import { FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa"; // Import ikon WhatsApp

const Contact = () => {
  const phoneNumber = "6285696646980";
  const whatsappLink = "https://wa.me/6285696646980";

  return (
    <div
      id="kontak"
      className="w-full px-[12%] py-20 scroll-mt-10 bg-gray-50 dark:bg-black dark:text-white"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Mari Berkolaborasi</h4>
      <h2 className="text-center text-5xl font-Ovo">Hubungi Saya</h2>
      <p className="text-center font-Ovo max-w-2xl mx-auto mt-5 mb-12 ">
        Saya terbuka untuk kesempatan magang baru, proyek freelance, atau
        sekadar berdiskusi tentang teknologi front-end. Hubungi saya via
        WhatsApp!
      </p>

      <div className="flex justify-center">
        <div className="md:w-1/2 space-y-6">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 p-4 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 duration-300 transform hover:scale-105 cursor-pointer"
          >
            <FaWhatsapp className="text-3xl" />
            <div>
              <h4 className="font-semibold text-lg">Chat via WhatsApp</h4>
              <p className="text-sm">{phoneNumber}</p>
            </div>
          </a>

          {/* Info Lokasi (Opsional) */}
          <div className="flex items-center gap-4 p-4 border border-gray-400 rounded-lg hover:shadow-md duration-300">
            <FiMapPin className="text-2xl text-gray-700" />
            <div>
              <h4 className="font-semibold">Lokasi</h4>
              <p className="text-sm text-gray-600">Palu, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
