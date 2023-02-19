import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import GenerateHashtag from "./pages/GenerateHashtag";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/generate/hashtags" element={<GenerateHashtag />} />
      </Routes>
    </>
  );
}

export default App;
