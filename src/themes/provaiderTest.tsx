import { ReactNode } from 'react';

import { Provider } from 'react-redux';
import { store } from '../store/store';

import { GlobalStyles } from '../style/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../style/themes';

import { render } from '@testing-library/react';

export const provaiderRender = (children: JSX.Element) => {
	return (
		render(
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					{children}
					<GlobalStyles />
				</ThemeProvider>
			</Provider>
		)
	);
};