import { CompleteProject, PropsCompleteProject } from '.';
import { Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../style/themes';
import { store } from '../../store/store';
import { Provider } from 'react-redux';
import { GlobalStyles } from '../../style/globalStyles';

export default {
	title: 'CompleteProject',
	component: CompleteProject,
	args: {
		id: '00d0f2c6-44d8-4ff8-8164-f44c2649c8b7'
	} as PropsCompleteProject,
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


export const Tamplate = (args: PropsCompleteProject) => <CompleteProject {...args}/>;