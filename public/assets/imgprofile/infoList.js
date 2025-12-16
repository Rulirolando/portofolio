import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import graduation from "../imgprofile/graduation.png";
import Image from "next/image";
import { MdWorkOutline } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { GrSend } from "react-icons/gr";
import belajarFundamental from "../sertifikat/belajar-fundamental-front-end-web-developer-page-001.jpg";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";

export const infolist = [
  {
    icon: <HiOutlineCodeBracketSquare />,
    title: "Languages",
    deskription: "JavaScript, TypeScript",
  },
  {
    icon: <Image src={graduation} alt="graduation" width={20} height={20} />,
    title: "Pendidikan",
    deskription: "STMIK Bina Mulia Palu",
  },
  {
    icon: <MdWorkOutline />,
    title: "Projects",
    deskription: "Membuat lebih dari 2 project",
  },
];

export const toolsData = [
  <VscVscode key="vscode" className="w-5 sm:w-7" />,
  <BiLogoPostgresql key="postgresql" className="w-5 sm:w-7" />,
  <FaGithub key="github" className="w-5 sm:w-7" />,
  <FaReact key="react" className="w-5 sm:w-7" />,
  <RiNextjsFill key="nextjs" className="w-5 sm:w-7" />,
  <RiTailwindCssFill key="tailwindcss" className="w-5 sm:w-7" />,
  <SiPrisma key="prisma" className="w-5 sm:w-7" />,
];

export const serviceData = [
  {
    icon: <TbWorld className="w-10" />,
    title: "Web Manajemen Inventaris",
    description:
      "Aplikasi web sederhana untuk mengelola data inventaris barang menggunakan JavaScript, Node.js (Express), dan PostgreSQL.",
    link: "https://github.com/Rulirolando/inventory.git",
  },
  {
    icon: <TbWorld className="w-10" />,
    title: "Web penjualan online",
    description:
      "Aplikasi web sederhana untuk menjual barang menggunakan Typescript, Next.js, dan PostgreSQL.",
    link: "https://github.com/Rulirolando/web-commerce.git",
  },
  {
    icon: <TbWorld className="w-10" />,
    title: "Web sosial media",
    description:
      "Aplikasi web sederhana untuk sosial media menggunakan Typescript, Next.js, dan PostgreSQL.",
    link: "https://github.com/Rulirolando/Social_media.git",
  },
  {
    icon: <TbWorld className="w-10" />,
    title: "Web penjualan online berbasis localstorage",
    description:
      "Aplikasi web sederhana untuk menjual barang menggunakan Typescript, Next.js, dan localstorage.",
    link: "https://github.com/Rulirolando/E-commerce-localstorage.git",
  },
];

export const sertifikatdata = [
  {
    title: <GrSend />,
    link: "https://www.dicoding.com/certificates/07Z63Q8QWZQR",
    image: belajarFundamental,
  },
];
