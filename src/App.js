import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { themeContext } from "./components/Context/Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div style={{
      background: darkMode? 'black' : '',
      color: darkMode? 'white' : ''
    }}>
      <Navbar />
      <Main />
      <Services />
      <Projects />  
      <Contact/>
    </div>
  );
}

export default App;
