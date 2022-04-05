import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggle() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className="container">
      <Navbar darkMode={isDarkMode} toggleDarkMode={toggle} />
      <Main darkMode={isDarkMode} />
    </div>
  );
}
