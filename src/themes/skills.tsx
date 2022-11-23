import { FaHtml5, FaReact, FaSass } from 'react-icons/fa';
import { DiCss3 } from 'react-icons/di';
import { BiTestTube } from 'react-icons/bi';
import { AiFillApi } from 'react-icons/ai';
import { 
	SiJavascript, 
	SiTypescript, 
	SiRedux, 
	SiStyledcomponents, 
	SiStorybook,
	SiJest,
	SiMaterialui
} from 'react-icons/si';
import { ReactNode } from 'react';

export type PropsArreySkills = {
    text: string
    children: ReactNode
}

export const skills: PropsArreySkills [] = [
	{
		children: <FaHtml5 />,
		text: 'HTML5'
	},
	{
		children: <DiCss3 />,
		text: 'CSS3'
	},
	{
		children: <SiJavascript />,
		text: 'JavaScript'
	},
	{
		children: <FaReact />,
		text: 'React.js'
	},
	{
		children: <SiTypescript />,
		text: 'TypeScript'
	},
	{
		children: <SiRedux />,
		text: 'Redux'
	},
	{
		children: <FaSass />,
		text: 'Sass'
	},
	{
		children: <SiStyledcomponents />,
		text: 'CSS-in-JS'
	},
	{
		children: <SiStorybook />,
		text: 'StoryBook'
	},
	{
		children: <SiJest />,
		text: 'Jest'
	},
	{
		children: <BiTestTube />,
		text: 'React-test'
	},
	{
		children: <SiMaterialui />,
		text: 'Material-ui'
	},
	{
		children: <AiFillApi />,
		text: 'API'
	},
];