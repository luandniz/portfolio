import { useState } from "react";
import { BsPersonVcardFill } from "react-icons/bs";
import { MdOutlineWork } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";

interface IMenuItem {
  title: string;
  path: string;
  status: boolean;
}

export const MenuMobile = () => {
  const [menu, setMenu] = useState([
    { title: "Sobre", path: "#about", status: false, icon: BsPersonVcardFill },
    {
      title: "Experiências",
      path: "#experiences",
      status: false,
      icon: MdOutlineWork,
    },
    { title: "Projetos", path: "#projects", status: false, icon: FaCode },
    { title: "Design", path: "#design", status: false, icon: CgFigma },
  ]);

  const changeStatus = (clickedElement: IMenuItem) => {
    const updatedMenu = menu.map((element) => ({
      ...element,
      status: element.title === clickedElement.title,
    }));

    setMenu(updatedMenu);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("clicou");
  };

  return (
    <div className="h-16 w-[85%] bg-slate-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded fixed bottom-2  flex items-center lg:invisible">
      <div className=" bg-slate-800 dark:bg-slate-300 flex w-full justify-around p rounded py-2 sm:py-3 mx-4">
        {menu.map((element, index) => (
          <a
            href={element.path}
            key={index}
            onClick={() => {
              changeStatus(element);
              if (element.title === "Sobre") {
                handleScrollToTop();
              }
            }}
          >
            <element.icon
              className={`text-xl text-slate-300 dark:text-slate-800 font-bold hover:text-blue-400 dark:hover:text-blue-400 cursor-pointer visible sm:hidden ${
                element.status === true && "text-blue-400"
              }`}
            />

            <span
              className={`nav-text hidden sm:block text-xs font-bold uppercase tracking-widest text-slate-300 dark:text-slate-800 ${
                element.status === true && "text-blue-400"
              }`}
            >
              {element.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};
