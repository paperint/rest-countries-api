import "./App.css";
import Homepage from "./pages/Homepage";
import ViewCountry from "./pages/ViewCountry";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:name" element={<ViewCountry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
