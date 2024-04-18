import React from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import  useToggle  from "./hooks/useToggle";

const App = () => {
  const [localData, setLocalData] = useLocalStorage("theme", "light");
  const [isMenuOpen, toggleMenu] = useToggle(false);

  return (
    <div className="container">
      <header className="header">{localData}</header>
      <div className="button">
        <button onClick={() => setLocalData("light")}>Light</button>
        <button onClick={() => setLocalData("dark")}>Dark</button>
      </div>
      <button onClick={toggleMenu}>Menu</button>
      {isMenuOpen && <div className="menu">Меню</div>}
    </div>
  );
}

export default App;



