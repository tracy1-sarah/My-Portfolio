import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Services />
      <Skills />
      <Projects/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/services" element={<Services/> } />
        </Routes>
      </BrowserRouter> */}
   
    </div>
  );
}

export default App;
