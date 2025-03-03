import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Map from "./components/Map";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  return (
    <div className="min-h-dvh">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                search={search}
                setSearch={setSearch}
                name={name}
                setName={setName}
                number={number}
                setNumber={setNumber}
              />
            }
          />
          <Route
            path="/map"
            element={
              <Map
                search={search}
                setSearch={setSearch}
                name={name}
                setName={setName}
                number={number}
                setNumber={setNumber}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
