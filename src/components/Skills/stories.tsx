import { Skills, PropsSkills } from '.';
import { Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../style/themes';
import { store } from '../../store/store';
import { Provider } from 'react-redux';
import { GlobalStyles } from '../../style/globalStyles';
import { FaHtml5 } from 'react-icons/fa';

export default {
	title: 'Skills',
	component: Skills,
	args: {
		children: <FaHtml5 />,
		text: 'HTML5'
	}as PropsSkills,
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


export const Tamplate = (agrs: PropsSkills) => <Skills {...agrs}/>;