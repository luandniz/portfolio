import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState, useEffect } from "react";

export const Header = () => {
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
    <header>
      <div
        onClick={handleThemeSwitch}
        className="absolute lg:fixed top-[20px] right-0 lg:right-[30px] cursor-pointer text-2xl dark:text-white transition-all motion-reduce:transition-none"
      >
        {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
      </div>
    </header>
  );
};
