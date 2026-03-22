import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Psychologists from "./pages/Psychologists/Psychologists.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/psychologists" element={<Psychologists />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
