import React from 'react';
import ReactDOM from 'react-dom/client';

import { Home } from './App';
import { TopBar } from './components/TopBar';

import { GlobalStyles } from './style/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/themes';

import { Provider } from 'react-redux';
import { store } from './store/store';
import { SideBar } from './components/SideBar';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<TopBar />
				<SideBar />
				<Home />
				<GlobalStyles />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
);
