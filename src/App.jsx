import React from 'react';
import Sidebar from './components/Sidebar';
import WelcomeScreen from './components/Welcomescreen';
import ChatInput from './components/ChatInput';
import './App.css'; // Tailwind should be imported here

function App() {
  return (
    <div className="flex h-screen bg-[#1e1e2f] text-white sidebar-msg" >
      <Sidebar />
      <div className="flex flex-col flex-1">
        <WelcomeScreen />
        <ChatInput />
      </div>
    </div>
  );
}

export default App;
