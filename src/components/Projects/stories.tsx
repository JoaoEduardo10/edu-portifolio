import { Destaques, PropsDestaques } from '.';
import { Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../style/themes';
import { store } from '../../store/store';
import { Provider } from 'react-redux';
import { GlobalStyles } from '../../style/globalStyles';

import world from '../../img/world.png';

import { FaHtml5, FaReact, FaSass } from 'react-icons/fa';
import { SiRedux, SiTypescript } from 'react-icons/si';

export default {
	title: 'Destaques',
	component: Destaques,
	args: {
		img: world,
		tecnologias: [
			<FaHtml5 key={1} />, 
			<FaReact key={4}/>,
			<SiTypescript key={5} />,
			<SiRedux key={8}/>,
			<FaSass key={9} />
		],
		text: 'WorldWide',
		data: '22 de Outubro de 2022'
	}as PropsDestaques,
	decorators: [
		(Story) => {
			return (
				<ThemeProvider theme={theme}>
					<Provider store={store}>
						<Story />
					</Provider>
					<GlobalStyles />
				</ThemeProvider>
			);
		}
	],
} as Meta;


export const Tamplate = (agrs: PropsDestaques) => <Destaques {...agrs}/>;