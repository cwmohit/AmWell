import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ActionProvider from "./components/modules/chatbot/ActionProvider";
import config from "./components/modules/chatbot/Config";
import MessageParser from "./components/modules/chatbot/MessageParser";
import ChatImage from "./assets/chatbot.png";
import "./App.css";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route exact path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="btn chatbot-toggle"
      >
        <img style={{ width: "55px" }} src={ChatImage} alt="chatbot" />
      </button>
      {isVisible && (
        <div className="project-chatbot">
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
