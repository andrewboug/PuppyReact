import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AllDogs from "./components/AllDogs";
import NewDogForm from "./components/NewDogForm";
import SingleDog from "./components/SingleDog";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AllDogs />} />
        <Route path="/form" element={<NewDogForm />} />
        <Route path="/:id" element={<SingleDog />} />
      </Routes>
    </div>
  );
}

export default App;
