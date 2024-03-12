import {useDarkMode} from "./DarkModeContext";

function Navbar() {
  const {isDarkMode, toggleDarkMode} = useDarkMode();

  return (
    <>
      <nav className={isDarkMode ? "navbar-dark" : "navbar-light"}>
        <div className="title">
          <b>Where in the world?</b>
        </div>
        <div className="dark-mode" onClick={toggleDarkMode}>
          <img
            src="https://cdn2.iconfinder.com/data/icons/bubble-set-general/48/Moon-512.png"
            alt="dark-mode-logo"
          />
          Dark Mode
        </div>
      </nav>
    </>
  );
}

export default Navbar;
