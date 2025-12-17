import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import ThemeProvider from './shared/lib/theme/ThemeProvider';
import { Provider } from 'react-redux';
import { store } from './app/providers/store/store';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);