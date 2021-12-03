import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./containers/auth/Login";
import Register from "./containers/auth/Register";
import Newsfeed from "./containers/Newsfeed";
import Profile from "./containers/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/app/newsfeed" element={<Newsfeed />} />
        <Route path="/app/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
