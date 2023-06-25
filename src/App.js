import "./App.css";
import ForgetLanding from "./Components/ForgetLanding";
import { Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Forgot from "./Components/Forgot";

function App() {
  return (
    <div className="App max-w-full min-h-screen">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/reset-password/:id/:token" element={<ForgetLanding />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
