import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
// import RegistrationPage from "./pages/RegistrationPage";
// import Dashboard from "./pages/Dashboard";
// import Users from "./pages/Users";
// import Rooms from "./pages/Rooms";
// import Meetings from "./pages/Meetings";

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/register" element={<RegistrationPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:roomId" element={<Meetings />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
