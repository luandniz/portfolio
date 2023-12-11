import { Card } from "../../Components/Card";
import {
  experience,
  projects,
  projectsDesign,
} from "../../Components/Data/experience";
import { Reveal } from "../../Components/Motion/Reveal";

export const Portfolio = () => {
  return (
    <div className="h-full pt-36 lg:pt-1 lg:w-1/2 ">
      <div className="space-y-4 text-gray mb-16 dark:text-slate-300">
        <Reveal>
          <h2 className="uppercase font-bold dark:text-slate-100">Sobre</h2>
        </Reveal>
        <p>
          Em 2021, decidi realizar uma mudança de carreira. Saí do jornalismo e
          migrei para uma área que fez parte da minha vida desde a adolescência,
          quando eu tentava criar templates para o Tumblr. Durante a pandemia,
          um período em que muitos reavaliaram seus rumos, mergulhei de cabeça
          no mundo do desenvolvimento, e desde então tenho dedicado cada dia
          mais esforços em adquirir conhecimento nessa área. Formado no curso
          <span className="text-blue-400 pl-1 inline-block dark:text-teal-400">
            FULL STACK
          </span>
          , da
          <span className="text-blue-400 pl-1 inline-block dark:text-teal-400">
            Kenzie Academy
          </span>
          , com mais de{" "}
          <span className="text-blue-400 pl-1 inline-block dark:text-teal-400">
            2.000h
          </span>{" "}
          de duração.
        </p>

        <p>
          Atualmente, possuo experiência em
          <span className="text-blue-400 pl-1 inline-block dark:text-teal-400">
            JavaScript
          </span>
          ,
          <span className="text-blue-400 pl-1 inline-block dark:text-teal-400">
            TypeScript
          </span>
          ,
          <span className="text-blue-400 pl-1 inline-block dark:text-teal-400">
            React
          </span>
          ,
          <span className="text-blue-400 pl-1 inline-block dark:text-teal-400">
            Vue
          </span>{" "}
          e
          <span className="text-blue-400 pl-1 inline-block dark:text-teal-400">
            CSS
          </span>
          . Além disso, tenho habilidades em
          <span className="text-blue-400 pl-1 inline-block dark:text-teal-400">
            Scrum
          </span>{" "}
          e
          <span className="text-blue-400 pl-1 inline-block dark:text-teal-400">
            Figma
          </span>
          . Quando não estou porgramando, gosto de assisitr séries, ler e buscar
          coisas novas para fazer.
        </p>
      </div>
      {/* EXPERIÊNCIAS */}
      <div
        className="space-y-4 text-gray pt-8 lg:pt-20 dark:text-slate-100"
        id="experiences"
      >
        <Reveal>
          <h2 className="uppercase font-bold">{experience.title}</h2>
        </Reveal>
        {experience.itens.map((element) => (
          <Card element={element} key={element.id} />
        ))}
      </div>
      {/* PROJETOS */}
      <div
        className="space-y-4 text-gray pt-8 lg:pt-20 dark:text-slate-100"
        id="projects"
      >
        <Reveal>
          <h2 className="uppercase font-bold">{projects.title}</h2>
        </Reveal>
        {projects.itens.map((element) => (
          <Card element={element} key={element.id} />
        ))}
      </div>
      <div
        className="space-y-4 text-gray pt-8 lg:pt-20 dark:text-slate-100"
        id="design"
      >
        <Reveal>
          <h2 className="uppercase font-bold">{projectsDesign.title}</h2>
        </Reveal>
        {projectsDesign.itens.map((element) => (
          <Card element={element} key={element.id} />
        ))}
      </div>
      <footer>
        <p className="text-gray mb-12 dark:text-slate-100">
          Este portfólio foi projetado no Figma e codificado no Visual Studio
          Code. Construído com React.js, TypeScript e Tailwind CSS. Implantado
          com Vercel. Todo o texto é definido na fonte Poppins .
        </p>
      </footer>
    </div>
  );
};
