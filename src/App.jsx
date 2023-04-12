import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import AllPlayers from "./components/AllPlayers";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/newplayerform" element={<NewPlayerForm />} />
        <Route path="/singleplayer/:id" element={<SinglePlayer />} />
      </Routes>
    </div>
  );
}

export default App;
