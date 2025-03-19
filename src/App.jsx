import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/__molecules/Header";
import Planets from "./components/__organisms/Planets/Planets";
import Planet from "./pages/Planet";
import Footer from "./components/__molecules/Footer";

function App() {
  return (
    <div className="w-[100%] h-[100vh] bg-[#070724] bg-[url(src/assets/image/background.png)] ">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/planets" element={<Planets />} />
          <Route path="/planet/:planetName" element={<Planet />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
