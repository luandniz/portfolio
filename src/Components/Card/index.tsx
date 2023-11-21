import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

interface ICardElement {
  id: number;
  type: string;
  title: string;
  company: string;
  period?: string;
  image: string;
  linkProject: string;
  experience: Array<String>;
  tags?: Array<string>;
}

interface ICardProps {
  element: ICardElement;
}

export const Card = ({ element }: ICardProps) => {
  return (
    // hover:bg-gradient-to-b from-gray-200 to-white
    <div className="text-gray w-full pt-3 px-3 pb-6  rounded group transition-all motion-reduce:transition-none dark:text-slate-300">
      <div
        className={`flex flex-col w-full ${
          element.type === "projects" && "sm:flex-row sm:space-x-4"
        }`}
      >
        <div className="w-[40%] xl:w-[50%]">
          {element.type === "projects" && (
            <img
              src={element.image}
              alt={element.title}
              className="my-0 group-hover:border-gray hidden sm:block "
            />
          )}
        </div>

        <div className="w-full">
          <div className="mb-2">
            <h1>{element.period}</h1>
            <div className="flex font-bold text-blue-400 dark:text-teal-400 space-x-2 items-center ">
              <h1 className="">{element.title}</h1>
              {element.linkProject !== "" && (
                <Link to={element.linkProject} target="_blank">
                  <FaExternalLinkAlt className="cursor-pointer text-xs group-hover:text-sm transition-all motion-reduce:transition-none" />
                </Link>
              )}
            </div>

            <h1 className="font-bold text-blue-400 dark:text-teal-400">
              {element.company}
            </h1>
          </div>
          {element.type === "projects" && (
            <img
              src={element.image}
              alt={element.title}
              className="my-3 border-4 border-white group-hover:border-4 group-hover:border-gray sm:hidden"
            />
          )}
          <div className="">
            {element.experience.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </div>
          <div className="flex flex-wrap mt-5">
            {element.tags &&
              element.tags.map((tag, index) => (
                <p
                  key={index}
                  className="bg-gray dark:bg-slate-300 text-white dark:text-slate-800 px-2 m-1 group-hover:bg-blue-400 dark:group-hover:bg-teal-400 group-hover:rounded transition-all motion-reduce:transition-none"
                >
                  {tag}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
