import { Apresentation } from "../../Components/Apresentation";
import { Portfolio } from "../Portfolio";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState, useEffect } from "react";

export const Home = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="w-full h-full dark:bg-slate-900 transition-all motion-reduce:transition-none">
      <div className="relative overflow-x-hidden py-16 h-full w-[85%] xl:w-[80%] 2xl:w-[60%] m-auto lg:flex lg:space-x-4 ">
        <div
          onClick={handleThemeSwitch}
          className="absolute lg:fixed top-[20px] right-0 lg:right-[30px] cursor-pointer text-2xl dark:text-white transition-all motion-reduce:transition-none"
        >
          {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
        </div>
        <Apresentation />
        <Portfolio theme={theme} />
      </div>
    </div>
  );
};
