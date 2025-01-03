import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
import project8 from "../assets/project8.png";
import project9 from "../assets/project9.png";
import { AiFillGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: project8,
    title: "Event Manager",
    description:
      "O FM NORONHA é o aplicativo que leva até você o melhor da ilha de Fernando de Noronha, um arquipélago paradisíaco que tem as praias mais bonitas do mundo. Com este aplicativo, você pode acompanhar as notícias, as músicas, as entrevistas e a agenda cultural da ilha. ",
    links: {
      site: "https://play.google.com/store/apps/details?id=com.atdefn.FM.Noronha",
      github: "##",
    },
  },
  {
    img: project7,
    title: "Event Manager",
    description:
      "Este projeto foi desenvolvido como parte do meu Trabalho de Conclusão de Curso II na Universidade Católica de Pernambuco (UNICAP), no curso de Ciência da Computação. O objetivo foi criar um sistema inovador para gerenciar a inscrição e o controle de acesso a eventos universitários, abordando desafios comuns enfrentados por organizadores e participantes.",
    links: {
      site: "https://play.google.com/store/apps/details?id=com.gareky1.eventmanager2",
      github: "https://github.com/henriquelira2/EventManager",
    },
  },
  {
    img: project1,
    title: "Explorando os X-Men",
    description:
      "Projeto realizando durante a semana do zero ao programador com o intuito de praticar conceitos basicos e estilos utlizando html e css",
    links: {
      site: "https://henriquelira2.github.io/Projeto-X-Men---Semana-do-Zero-Ao-Programador/",
      github:
        "https://github.com/henriquelira2/Projeto-X-Men---Semana-do-Zero-Ao-Programador",
    },
  },
  {
    img: project2,
    title: "Med-On",
    description:
      "Projeto academico criado para a cadeira de Engenharia de Software I, onde foi proposto a criação de uma aplicação web voltado para serviços médicos , onde um paciente poderar marcar qualquer tipo de consulta ou exame para ser atendido por um médico  em sua residência",
    links: {
      site: "https://medon.netlify.app/usuarioLogin",
      github: "https://github.com/henriquelira2/Projeto-engenharia-1",
    },
  },
  {
    img: project9,
    title: "Primeiro portfólio ",
    description:
      "Um dos meus primeiros projetos acadêmicos, onde implementei um mini portfólio durante a cadeira de programação web/mobile.",
    links: {
      site: "https://pwm-2022-atv.vercel.app/EX04/index.html#sobre-mim",
      github: "https://github.com/henriquelira2/pwm-2022-ATV",
    },
  },
  {
    img: project3,
    title: "Navegando pelo Mundo de One Piece",
    description:
      "Projeto realizado com objetivo de praticar algums conceitos simples utlizando HTML e CSS",
    links: {
      site: "https://one-piece-eight.vercel.app/",
      github: "https://github.com/henriquelira2/One-Piece.",
    },
  },
  {
    img: project4,
    title: "Mini Galeria Com Efeito Modal",
    description:
      "Aplicação simples para testar o funcionamento de um efeito modal aplicado em algumas imagens usando HTML, CSS e JavaScript",
    links: {
      site: "https://mini-galeria-com-efeito-modal.vercel.app/",
      github: "https://github.com/henriquelira2/mini-galeria-com-efeito-modal",
    },
  },
  {
    img: project5,
    title: "Figma + Encanto",
    description:
      "Projeto realizado com objetivo de pratica tentando recriar um designer do figma usando HTML e CSS",
    links: {
      site: "https://encanto-website.vercel.app/",
      github: "https://github.com/henriquelira2/ENCANTO-website",
    },
  },
  {
    img: project6,
    title: "Google Glass - Antigo",
    description:
      "Projeto feito durante o Curso de HTML5 diponibilizado pelo professor Gustavo Guanabara",
    links: {
      site: "https://curso-de-html-5-40-horas.vercel.app/",
      github: "https://github.com/henriquelira2/Curso-de-HTML5-40-Horas-",
    },
  },
];

function Portfolio() {
  return (
    <div className="max-w-[1000px] mx-auto p6 md:my-20" id="projetos">
      <h2 className="text-3xl font-bold text-gray-200 mb-10 text-center">
        Projetos
      </h2>

      {projects.map((projetc, index) => (
        <Reveal>
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={projetc.img}
                alt={projetc.title}
                className="w-full h-full object-fill rounded-lg shadow-lg hover:scale-75 transition-transform duration-200"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 justify-center">
                {projetc.title}
              </h3>
              <p className="text-gray-300 mb-4 text-justify">
                {projetc.description}
              </p>
              <div className="flex space-x-4">
                <a
                  href={projetc.links.site}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                >
                  Ver site
                </a>
                <a
                  href={projetc.links.github}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                >
                  <AiFillGithub size={20} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default Portfolio;
