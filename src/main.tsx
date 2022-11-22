import React from 'react';
import ReactDOM from 'react-dom/client';

import { Home } from './App';

import { GlobalStyles } from './style/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/themes';

import { Provider } from 'react-redux';
import { store } from './store/store';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TopBar } from './components/TopBar';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<TopBar />
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
