import { ReactNode } from "react";
import { v4 as uuId4 } from "uuid";

//img em svg das tecnologias
import { FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { AiFillApi } from "react-icons/ai";
import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiStyledcomponents,
  SiNextdotjs,
} from "react-icons/si";

//images dos projetos
import bugDroid from "../img/irina-blok-pq.jpg";
import formulario from "../img/imagem-form.jpg";
import formularioDev from "../img/formulario-dev.png";
import filmes from "../img/filmes.jpg";
import clima from "../img/clima.jpg";
import calculadora from "../img/calculadora.jpg";
import netflix from "../img/netflix.jpg";
import pokedex from "../img/pokedex.png";
import world from "../img/world.png";
import loandingPageNext from "../img/loanding-page-next.png";

//videos dos projetos
import bugDroidVd from "../videos/bugdroid.mp4";
import formularioVd from "../videos/formulario.mp4";
import calculadoraVd from "../videos/calculadora.mp4";
import netflixVd from "../videos/netflix.mp4";
import pokedexVd from "../videos/pokedex.mp4";
import filmesVd from "../videos/filmes.mp4";
import formularioDevVd from "../videos/formularioDev.mp4";
import climaVd from "../videos/clima.mp4";
import worldVd from "../videos/world.mp4";
import loandingPageNextVd from "../videos/laondingNext.mp4";

export type PropsProject = {
  id: string;
  name: string;
  img: string;
  video: string;
  date: string;
  tecnologias: ReactNode[];
  destaque: boolean;
  acesso: {
    projeto: string;
    repositorio: string;
  };
  text: string;
  text2?: string;
  text3?: string;
  text4?: string;
};

export const project: PropsProject[] = [
  {
    id: uuId4(),
    name: "BugDroid",
    date: "12 de Maio de 2022",
    img: bugDroid,
    video: bugDroidVd,
    tecnologias: [<FaHtml5 key={1} />, <DiCss3 key={2} />],
    destaque: false,
    acesso: {
      projeto:
        "https://joaoeduardo10.github.io/HTML-CSS/desafios/SiteBugdroid/",
      repositorio:
        "https://github.com/JoaoEduardo10/HTML-CSS/tree/main/desafios/SiteBugdroid",
    },
    text: "Site de Documentário fala sobre como surgiu o mascote Android 'BugDroid'.",
    text2:
      "Minha primeira aplição como desemvolvedor front end. Foi um desafio feito pelo professo Gustavo Guanabara do curso em video, utilizando os conseito de HTML5 semântico e CSS3",
  },
  {
    id: uuId4(),
    name: "Formulário",
    date: "20 de Maio de 2022",
    img: formulario,
    video: formularioVd,
    tecnologias: [
      <FaHtml5 key={1} />,
      <DiCss3 key={2} />,
      <SiJavascript key={3} />,
    ],
    destaque: false,
    acesso: {
      projeto:
        "https://joaoeduardo10.github.io/HTML-CSS/desafios/projetoSiteForm/",
      repositorio:
        "https://github.com/JoaoEduardo10/HTML-CSS/tree/main/desafios/projetoSiteForm",
    },
    text: "Formulário de cadastro com: HTML, CSS e JavaScript. Mostrando um pouco mais das minhas habilidades.",
    text2:
      "Primeiro formulário como dev. Aplicação feita  em fase de aprendizado sobre JavaScript com formulário responsivo e dinâmico.",
  },
  {
    id: uuId4(),
    name: "Calculadora",
    date: "11 de Junho de 2022",
    img: calculadora,
    video: calculadoraVd,
    tecnologias: [
      <FaHtml5 key={1} />,
      <DiCss3 key={2} />,
      <SiJavascript key={3} />,
    ],
    destaque: false,
    acesso: {
      projeto: "https://joaoeduardo10.github.io/HTML-CSS/desafios/calculadora/",
      repositorio:
        "https://github.com/JoaoEduardo10/HTML-CSS/tree/main/desafios/calculadora",
    },
    text: "Calculara feito com: HTML, CSS e JavaScript.",
    text2:
      "Uma Calculadora simples mostrando intereçao entre HTML, CSS e JavaScript",
  },
  {
    id: uuId4(),
    name: "Clone Netflix",
    date: "20 de Junho de 2022",
    img: netflix,
    video: netflixVd,
    tecnologias: [
      <FaHtml5 key={1} />,
      <DiCss3 key={2} />,
      <SiJavascript key={3} />,
    ],
    destaque: false,
    acesso: {
      projeto: "https://joaoeduardo10.github.io/HTML-CSS/desafios/siteNatflix/",
      repositorio:
        "https://github.com/JoaoEduardo10/HTML-CSS/tree/main/desafios/siteNatflix",
    },
    text: "Clone da Page de login da Netflix",
    text2:
      "Este site concretizou meu aprendizado em HTML5, CSS3 e JavaScript. Mostrando um site responsivo, e totalmente interativo com o usuário.",
  },
  {
    id: uuId4(),
    name: "Pokedex",
    date: "13 de Julho de 2022",
    img: pokedex,
    video: pokedexVd,
    tecnologias: [
      <FaHtml5 key={1} />,
      <DiCss3 key={2} />,
      <FaReact key={4} />,
      <AiFillApi key={5} />,
    ],
    destaque: false,
    acesso: {
      projeto: "https://eduardopokedex.netlify.app/",
      repositorio: "https://github.com/JoaoEduardo10/react-pokedex",
    },
    text: "Pokedex feita com React.js",
    text2:
      "Aprendendo um pouco sobre React, utilizando hooks e uma api de pokemons. Mostrando tambem essa intereçao do banco de dados com o front-end",
  },
  {
    id: uuId4(),
    name: "Movie Lib",
    date: "25 de agosto de 2022",
    img: filmes,
    video: filmesVd,
    tecnologias: [
      <FaHtml5 key={1} />,
      <FaReact key={4} />,
      <SiTypescript key={5} />,
      <SiStyledcomponents key={6} />,
      <AiFillApi key={7} />,
    ],
    destaque: true,
    acesso: {
      projeto: "https://filmes-react-edu.netlify.app/",
      repositorio: "https://github.com/JoaoEduardo10/react-filmes",
    },
    text: "Aplicação React que consuta uma API de filmes.",
    text2:
      "Já em um conseito mais apronfudado sobre React. Praticando com algumas tecnologias e Libs, como: TypeScript, React-router-dom, react-icons e Styled-Components. E utilizando uma API de filmes, para fazer intereção com front-end.",
  },
  {
    id: uuId4(),
    name: "Formulário Dev",
    date: "10 de Setembro de 2022",
    img: formularioDev,
    video: formularioDevVd,
    tecnologias: [
      <FaHtml5 key={1} />,
      <FaReact key={4} />,
      <SiTypescript key={5} />,
      <SiStyledcomponents key={6} />,
    ],
    destaque: true,
    acesso: {
      projeto: "https://formulario-dev-edu.netlify.app/",
      repositorio: "https://github.com/JoaoEduardo10/formulario-dev",
    },
    text: "Formulário React que preenche dados de um Programador.",
    text2:
      "Já em um conseito mais apronfudado sobre React. Praticando com algumas tecnologias e Libs, como: TypeScript, React-router-dom, react-icons e Styled-Components. Consolidado tambem a tipagem, no conseito de ContextAPI.",
  },
  {
    id: uuId4(),
    name: "Clima",
    date: "1 de Outubro de 2022",
    img: clima,
    video: climaVd,
    tecnologias: [
      <FaHtml5 key={1} />,
      <FaReact key={4} />,
      <SiTypescript key={5} />,
      <SiStyledcomponents key={6} />,
      <AiFillApi key={7} />,
    ],
    destaque: true,
    acesso: {
      projeto: "https://site-clima.netlify.app/",
      repositorio: "https://github.com/JoaoEduardo10/react-clima",
    },
    text: "Site que ver o clima",
    text2:
      "Já em um conseito mais apronfudado sobre React. Praticando com algumas tecnologias e Libs, como: TypeScript, React-router-dom, react-icons e Styled-Components e utilizando ContextAPI como um gerenciador de estado global.",
  },
  {
    id: uuId4(),
    name: "WorldWide",
    date: "22 de Outubro de 2022",
    img: world,
    video: worldVd,
    tecnologias: [
      <FaHtml5 key={1} />,
      <FaReact key={4} />,
      <SiTypescript key={5} />,
      <SiRedux key={8} />,
      <FaSass key={9} />,
    ],
    destaque: true,
    acesso: {
      projeto: "https://site-world-wide.netlify.app/",
      repositorio: "https://github.com/JoaoEduardo10/react-world",
    },
    text: "Aplicação que ver todos os paises e estados",
    text2:
      "Já em um conseito mais apronfudado sobre React. Praticando com algumas tecnologias e Libs, como: TypeScript, React-router-dom, react-icons e Styled-Components e utilizando Redux como um gerenciador de estado global. Tambem utilizando um pré-processador CSS, o Sass. ",
  },
  {
    id: uuId4(),
    name: "Loanding-page-next",
    date: "04 de Outubro de 2023",
    img: loandingPageNext,
    video: loandingPageNextVd,
    tecnologias: [
      <FaHtml5 key={1} />,
      <SiNextdotjs key={4} />,
      <SiTypescript key={5} />,
      <AiFillApi key={6} />,
      <SiStyledcomponents key={7} />,
    ],
    destaque: false,
    acesso: {
      projeto: "https://loanding-page-next.vercel.app/",
      repositorio: "https://github.com/JoaoEduardo10/loanding-page-next",
    },
    text: "Loanding page feita com next.js",
    text2:
      "Loanding page feita com next.js, utilizando o metodo SSG para rederização e uma api nativa do next para enviar os email ao preencher o formulario.",
  },
];
