import React from 'react';
import ReactDOM from 'react-dom/client';

import { Home } from './App';

import { GlobalStyles } from './style/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/themes';

import { Provider } from 'react-redux';
import { store } from './store/store';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />}>
	
						</Route>
					</Routes>
				</BrowserRouter>
				<GlobalStyles />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
);
