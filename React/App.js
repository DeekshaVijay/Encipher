import React from "react";
import Header from './component/Header';
import User from './component/Props';
import Data from './component/Twovalue';
import Title from './component/Title';
import Button from './component/Button';
import Log from './component/Log';
import Userdata from './component/Userdata';
function App() {
  const userdata = {
    name:"Deeksha",
    mail:"deeks11@gmail.com"
  }
  return (
    <div>
      <Userdata user = {userdata}/>
      <Log  isLog = {true} />
      {/* <Log  isLog = {false} /> */}
      <Button item = "SignIn"/>
      <Button item = "SignOut"/>
      <Button item = "Register"/>
      <Title title = "Welcome to My Website"/>
      <Data name="Deeksha" age = "20"/>
      <User name = "Deeksha"/>
      <Header />
    </div>
  );
}

export default App;
