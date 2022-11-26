import { ConteinerProject } from '.';
import { Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../style/themes';
import { store } from '../../store/store';
import { Provider } from 'react-redux';
import { GlobalStyles } from '../../style/globalStyles';

export default {
	title: 'ConteinerProject',
	component: ConteinerProject,
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


export const Tamplate = () => <ConteinerProject />;