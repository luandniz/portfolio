import { Link } from "react-router-dom";
import { MenuDesktop } from "../Menu/MenuDesktop";
import { Reveal } from "../Motion/Reveal";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Apresentation = () => {
  return (
    <div className="flex relative lg:w-1/2">
      {/* ------------------- apresentação */}
      <div className="w-full h-full flex flex-col justify-center z-10 lg:justify-start lg:fixed lg:w-[35%] xl:w-[26%]">
        <Reveal>
          <h1 className="text-5xl sm:text-6xl font-bold dark:text-slate-100">
            Olá. Eu sou
          </h1>
        </Reveal>
        <Reveal>
          <h1 className="flex text-5xl sm:text-6xl font-bold text-blue-400 dark:text-teal-400">
            Luan Diniz.
          </h1>
        </Reveal>
        <Reveal>
          <div>
            <h2 className="text-xl text-gray font-medium mt-1 dark:text-slate-100">
              Desenvolvedor Web Front End e UI Designer.
            </h2>
          </div>
        </Reveal>
        <Reveal width="100%">
          <nav className="flex space-x-4 lg:space-x-8 text-2xl lg:text-3xl mt-4">
            <Link to="https://www.linkedin.com/in/luan-dniz/" target="_blank">
              <FaLinkedinIn className="cursor-pointer text-gray hover:text-black transition-all motion-reduce:transition-none dark:text-slate-300 dark:hover:text-slate-100" />
            </Link>
            <Link to="https://github.com/luandniz" target="_blank">
              <FaGithub className="cursor-pointer text-gray hover:text-black transition-all motion-reduce:transition-none dark:text-slate-300 dark:hover:text-slate-100" />
            </Link>
          </nav>
        </Reveal>
        <div className="mt-8">
          <MenuDesktop />
        </div>
      </div>
    </div>
  );
};
