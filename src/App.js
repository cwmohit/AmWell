import React, {useState} from "react";
import Chatbot from 'react-chatbot-kit'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ActionProvider from "./components/modules/ActionProvider";
import config from "./components/modules/Config";
import MessageParser from "./components/modules/MessageParser";
import ChatImage from "./assets/chatbot.png";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<>Hello AmWell</>} />
        </Routes>
      </Router>
      <button onClick={() => setIsVisible(!isVisible)} className="btn chatbot-toggle btn-primary">
        <img src={ChatImage} alt="chatbot"/>
      </button>
        {
          isVisible && 
          <div className="project-chatbot">
              <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
          </div>
        }
    </React.Fragment>
  );
}

export default App;
