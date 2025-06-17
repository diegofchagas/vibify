import "./App.css";
import { Header } from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Artists } from "./pages/Artists";
import { Songs } from "./pages/Songs";
import { Artist } from "./pages/Artist";
import { Song } from "./pages/Song";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allArtists" element={<Artists />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/allSongs" element={<Songs />} />
        <Route path="/song/:id" element={<Song />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
