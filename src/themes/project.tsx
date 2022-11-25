import { ReactNode } from 'react';
import { v4 as uuId4 } from 'uuid';

import { FaHtml5, FaReact, FaSass } from 'react-icons/fa';
import { DiCss3 } from 'react-icons/di';
import { AiFillApi } from 'react-icons/ai';
import { 
	SiJavascript, 
	SiTypescript, 
	SiRedux, 
	SiStyledcomponents, 
} from 'react-icons/si';

import bugDroid from '../img/irina-blok-pq.jpg';
import formulario from '../img/imagem-form.jpg';
import formularioDev from '../img/formulario-dev.png';
import filmes from '../img/filmes.jpg';
import clima from '../img/clima.jpg';
import calculadora from '../img/calculadora.jpg';
import netflix from '../img/netflix.jpg';
import pokedex from '../img/pokedex.png';
import world from '../img/world.png';

export type PropsProject = {
    id: string
    name: string
    img: string
    date: string
    tecnologias: ReactNode[]
    text: string
    text2?: string
    text3?: string
    text4?: string
}

export const project: PropsProject[] = [
	{
		id: uuId4(),
		name: 'BugDroid',
		date: '12 de Maio de 2022',
		img: bugDroid,
		tecnologias: [<FaHtml5 key={1} />, <DiCss3  key={2} />],
		text: 'Site de Documentário fala sobre como surgiu o mascote Android "BugDroid".',
		text2: 'Minha primeira aplição como desemvolvedor front end. Foi um desafio feito pelo professo Gustavo Guanabara do curso em video, utilizando os conseito de HTML5 semântico e CSS3'
	},
	{
		id: uuId4(),
		name: 'Formulário',
		date: '20 de Maio de 2022',
		img: formulario,
		tecnologias: [<FaHtml5 key={1} />, <DiCss3  key={2} />, <SiJavascript key={3} />],
		text: 'Formulário de cadastro com: HTML, CSS e JavaScript. Mostrando um pouco mais das minhas habilidades.',
		text2: 'Primeiro formulário como dev. Aplicação feita  em fase de aprendizado sobre JavaScript com formulário responsivo e dinâmico.' 
	},
	{
		id: uuId4(),
		name: 'Calculadora',
		date: '11 de Junho de 2022',
		img: calculadora,
		tecnologias: [<FaHtml5 key={1} />, <DiCss3  key={2} />, <SiJavascript key={3} />],
		text: 'Calculara feito com: HTML, CSS e JavaScript.',
		text2: 'Uma Calculadora simples mostrando intereçao entre HTML, CSS e JavaScript' 
	},
	{
		id: uuId4(),
		name: 'Clone Netflix',
		date: '20 de Junho de 2022',
		img: netflix,
		tecnologias: [<FaHtml5 key={1} />, <DiCss3  key={2} />, <SiJavascript key={3} />],
		text: 'Clone da Page de login da Netflix',
		text2: 'Este site concretizou meu aprendizado em HTML5, CSS3 e JavaScript. Mostrando um site responsivo, e totalmente interativo com o usuário' 
	},
	{
		id: uuId4(),
		name: 'Pokedex',
		date: '13 de Julho de 2022',
		img: pokedex,
		tecnologias: [
			<FaHtml5 key={1} />, 
			<DiCss3  key={2} />, 
			<SiJavascript key={3} />, 
			<FaReact key={4}/>,
			<AiFillApi key={5} />
		],
		text: 'Pokedex feita com React.js',
		text2: 'Aprendendo um pouco sobre React, utilizando hooks e uma api de pokemon. Mostrando tambem essa intereçao do banco de dados com o front-end' 
	},
	{
		id: uuId4(),
		name: 'Movie Lib',
		date: '25 de agosto de 2022',
		img: filmes,
		tecnologias: [
			<FaHtml5 key={1} />, 
			<DiCss3  key={2} />, 
			<SiJavascript key={3} />, 
			<FaReact key={4}/>,
			<SiTypescript key={5} />,
			<SiStyledcomponents key={6} />,
			<AiFillApi key={7} />
		],
		text: 'Aplicação React que consuta uma API de filmes.',
		text2: 'Já em um conseito mais apronfudado sobre React. Praticando com algumas tecnologias e Libs, como: TypeScript, React-router-dom, react-icons e Styled-Components. E utilizando uma API de filmes, para fazer intereção com front-end.' 
	},
	{
		id: uuId4(),
		name: 'Formulário Dev',
		date: '10 de Setembro de 2022',
		img: formularioDev,
		tecnologias: [
			<FaHtml5 key={1} />, 
			<DiCss3  key={2} />, 
			<SiJavascript key={3} />, 
			<FaReact key={4}/>,
			<SiTypescript key={5} />,
			<SiStyledcomponents key={6} />,
			<AiFillApi key={7} />
		],
		text: 'Formulário React que preenche dados de um Programador.',
		text2: 'Já em um conseito mais apronfudado sobre React. Praticando com algumas tecnologias e Libs, como: TypeScript, React-router-dom, react-icons e Styled-Components. Consolidado tambem a tipagem, no conseito de ContextAPI.' 
	},
	{
		id: uuId4(),
		name: 'Clima',
		date: '1 de Outubro de 2022',
		img: clima,
		tecnologias: [
			<FaHtml5 key={1} />, 
			<DiCss3  key={2} />, 
			<SiJavascript key={3} />, 
			<FaReact key={4}/>,
			<SiTypescript key={5} />,
			<SiStyledcomponents key={6} />,
			<AiFillApi key={7} />
		],
		text: 'Site que ver o clima',
		text2: 'Já em um conseito mais apronfudado sobre React. Praticando com algumas tecnologias e Libs, como: TypeScript, React-router-dom, react-icons e Styled-Components e utilizando ContextAPI como um gerenciador de estado global.' 
	},
	{
		id: uuId4(),
		name: 'WorldWide',
		date: '22 de Outubro de 2022',
		img: world,
		tecnologias: [
			<FaHtml5 key={1} />, 
			<DiCss3  key={2} />, 
			<SiJavascript key={3} />, 
			<FaReact key={4}/>,
			<SiTypescript key={5} />,
			<SiStyledcomponents key={6} />,
			<AiFillApi key={7} />,
			<SiRedux key={8}/>,
			<FaSass key={9} />
		],
		text: 'Aplicação que ver todos os paises e estados',
		text2: 'Já em um conseito mais apronfudado sobre React. Praticando com algumas tecnologias e Libs, como: TypeScript, React-router-dom, react-icons e Styled-Components e utilizando Redux como um gerenciador de estado global. Tambem utilizando um pré-processador CSS, o Sass. ' 
	},
	
]; 