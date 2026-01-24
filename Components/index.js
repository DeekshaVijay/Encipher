import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import Hello from './component/Hello';
// import Welcome from './component/Welcome';
// import Text from './component/Text';
// import User from './component/Hello1';
// import Calculate from './component/Cal';
// import Admin from './component/Admin';
// import User from './Practice';
import Welcome from './Welcome';
import Hello from './Helo';
import Log from './Log';
import Fruit from './Fruit';
import Detail from './Student';
import Input from './input';
import Form from './Form';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <Hello />
    <Welcome/>
    <Text />
    <User/>
    <Calculate />
    <Admin /> */}
    {/* <User /> */}
    <Welcome />
    <Hello />
    <Log />
    <Fruit />
    <Detail />
    <Input />
    <Form />
    
  </React.StrictMode>
);

