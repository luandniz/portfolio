import { Apresentation } from "../../Components/Apresentation";
import { Header } from "../../Components/Header";
import { Portfolio } from "../Portfolio";
import { MenuMobile } from "../../Components/Menu/MenuMobile";

export const Home = () => {
  return (
    <div className="w-full h-full dark:bg-slate-900 transition-all motion-reduce:transition-none">
      <div className="relative overflow-x-hidden py-16 h-full w-[85%] xl:w-[80%] 2xl:w-[60%] m-auto lg:flex lg:space-x-4 ">
        <Header />
        <Apresentation />
        <Portfolio />
        <MenuMobile />
      </div>
    </div>
  );
};
