import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sign_up from "./pages/Sign_up";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Sign_up" element={<Sign_up />}/>
      </Routes>
    </>
  );
}

export default App;
