import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import Text from './component/Text';
import User from './component/Hello1';
import Calculate from './component/Cal';
import Admin from './component/Admin';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Hello />
    <Welcome/>
    <Text />
    <User/>
    <Calculate />
    <Admin />
  </React.StrictMode>
);

