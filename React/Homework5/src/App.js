import "./App.css";
import Burger from "./components/Burger/Burger";
import Menu from "./components/Menu/Menu";
import { Hamburger } from "./context/HamburgerContext"

function App() {
  return (
    <Hamburger>
      <div className="App">
        <Burger />
        <Menu />
      </div>
    </Hamburger>
  );
}

export default App;
