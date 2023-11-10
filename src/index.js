import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from './context/ThemeProvider'
import {disableReactDevTools} from '@fvilers/disable-react-devtools'

if(process.env.NODE_ENV === 'production') disableReactDevTools()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </React.StrictMode>
);

