"use client";
import { useEffect, useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { IoSunny } from "react-icons/io5";
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Ambil theme terakhir dari local storage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDark(!dark);
    if (!dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-full  dark:border-gray-200"
    >
      {dark ? <IoSunny /> : <IoMdMoon />}
    </button>
  );
}
