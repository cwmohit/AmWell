import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<>Hello AmWell</>} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
