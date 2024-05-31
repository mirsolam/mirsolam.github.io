/*React*/
import { useRef, useState } from "react";

/*CSS*/
import "./css/App.css";

function App() {
  const introTextSequence = useRef([
    "Hi!",
    "Welcome to my Portfolio",
    "Continue scrolling to navigate through my website",
  ]);
  const introIndex = useRef(0);
  const [contentText, setContentText] = useState(
    introTextSequence.current[introIndex.current]
  );
  const [activeNavMenu, setActiveNavMenu] = useState("navmenu_home");

  function GeneralOnScroll(e) {
    console.log(e.deltaY);
    if (e.deltaY > 0)
      introIndex.current =
        introIndex.current + 1 < introTextSequence.current.length
          ? introIndex.current + 1
          : introIndex.current;
    else if (e.deltaY < 0)
      introIndex.current =
        introIndex.current - 1 >= 0 ? introIndex.current - 1 : 0;

    console.log(introIndex.current);
    setContentText(introTextSequence.current[introIndex.current]);
  }

  return (
    <div className="App">
      <div className="row">
        <div className="col-md-1 side-navbar-parent">
          <div className="side-navbar-box">
            <div
              className={`side-navbar-text mb-3 ${
                activeNavMenu === "navmenu_home" ? "active" : ""
              }`}
              id="navmenu_home"
            >
              Home
            </div>
            <div
              className={`side-navbar-text my-3 ${
                activeNavMenu === "navmenu_who_am_I" ? "active" : ""
              }`}
              id="navmenu_who_am_I"
            >
              Who Am I?
            </div>
            <div
              className={`side-navbar-text my-3 ${
                activeNavMenu === "navmenu_university" ? "active" : ""
              }`}
              id="navmenu_university"
            >
              University
            </div>
            <div
              className={`side-navbar-text my-3 ${
                activeNavMenu === "navmenu_experience" ? "active" : ""
              }`}
              id="navmenu_experience"
            >
              Experience
            </div>
            <div
              className={`side-navbar-text my-3 ${
                activeNavMenu === "navmenu_hobbies" ? "active" : ""
              }`}
              id="navmenu_hobbies"
            >
              Hobbies
            </div>
            <div
              className={`side-navbar-text my-3 ${
                activeNavMenu === "navmenu_contact" ? "active" : ""
              }`}
              id="navmenu_contact"
            >
              Contact
            </div>
          </div>
        </div>
        <div className="col-md-11 main-context">
          <div className="content">
            <div className="photo-circle">
              <div className="cv-photo"></div>
            </div>
            <div className="main-context-text">{contentText}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
