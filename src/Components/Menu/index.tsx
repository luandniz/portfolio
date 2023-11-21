import { useState } from "react";

interface IMenuItem {
  title: string;
  path: string;
  status: boolean;
}

export const Menu = () => {
  const [menu, setMenu] = useState([
    { title: "Sobre", path: "#about", status: false },
    { title: "Experiências", path: "#experiences", status: false },
    { title: "Projetos", path: "#projects", status: false },
    { title: "Design", path: "#design", status: false },
  ]);

  const changeStatus = (clickedElement: IMenuItem) => {
    const updatedMenu = menu.map((element) => ({
      ...element,
      status: element.title === clickedElement.title,
    }));

    setMenu(updatedMenu);
  };

  return (
    <nav>
      <ul className="hidden lg:block">
        {menu.map((element) => (
          <li key={element.title}>
            <a
              href={element.path}
              className="group flex items-center py-3 active"
              onClick={() => changeStatus(element)}
            >
              <span
                className={`nav-indicator mr-4 h-px w-8 bg-gray dark:bg-slate-300 transition-all group-hover:w-16 group-hover:bg-blue-400 dark:group-hover:bg-teal-400 group-focus-visible:w-16 group-focus-visible:bg-blue-400 dark:group-focus-visible:bg-teal-400 motion-reduce:transition-none ${
                  element.status
                    ? "w-16 bg-blue-500 dark:bg-teal-400 dark:w-16"
                    : ""
                }`}
              ></span>
              <span
                className={`nav-text text-xs font-bold uppercase tracking-widest text-gray dark:text-slate300 group-hover:text-blue-400 dark:group-hover:text-teal-400 group-focus-visible:text-blue-400 dark:group-focus-visible:text-teal-400 ${
                  element.status === true && "text-blue-500 dark:text-teal-400"
                }`}
              >
                {element.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
