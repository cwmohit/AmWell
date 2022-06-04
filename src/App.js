import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
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
import About from "./components/pages/About";
import { useAuth } from "./context/AuthContext";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const { currentUser } = useAuth();
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route
            exact
            path="/login"
            element={currentUser ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
        <Routes>
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route exact path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="btn chatbot-toggle"
        style={{
          width: "55px",
          height: "55px",
          padding: "0",
          boxShadow: "0 0 0 0.25rem rgb(13 110 253 / 25%)",
        }}
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
