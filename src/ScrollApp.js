/*React*/
import { useRef, useEffect } from "react";

/*CSS*/
import "./css/ScrollApp.css";
import "./css/InlineSVG.css";
import "animate.css";

/*Video*/
import BoulderV4 from "./video/V4.mp4"

/*Components*/
import SequenceScroller from "./components/SequenceScroller";

function ScrollApp(props) {
  const activeNavMenuRef = useRef("navmenu_home");
  const sideBarProgressRef = useRef("side-bar-gradient-35");
  const sideBarTextProgressRef = useRef("side-bar-text-gradient-full");
  const options = {
    threshold: 0.9,
  };
  const observer = new IntersectionObserver(NavbarColorObserver, options);


  useEffect(() => {
    window.addEventListener("scroll", GeneralScrollHandle);
    const brownRec = document.getElementsByName("brownchild");
    const beigeRec = document.getElementsByName("beigechild");

    beigeRec.forEach((item) => {
      observer.observe(item)
    })

    brownRec.forEach((item) => {
      observer.observe(item)
    })
  });

  function NavbarColorObserver(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target
        if (el.getAttribute("name") === "brownchild" && !document.getElementById("navbarbox").classList.contains("side-bar-gradient-full")) {
          document
            .getElementById("navbarbox")
            .classList.remove(sideBarProgressRef.current);

          sideBarProgressRef.current = "side-bar-gradient-full";

          document.getElementById("navbar_mobile").classList.add("mobile-menu-beige-photo")

          document
            .getElementById("navbarbox")
            .classList.add(sideBarProgressRef.current, "brown-bg");

          document.getElementsByName("navmenu").forEach((item) => {
            item.classList.add(sideBarTextProgressRef.current);
          });
        }
        else if (el.getAttribute("name") === "beigechild" && document.getElementById("navbarbox").classList.contains("side-bar-gradient-full")) {
          document.getElementById("navbar_mobile").classList.remove("mobile-menu-beige-photo")

          document
            .getElementById("navbarbox")
            .classList.remove(sideBarProgressRef.current, "brown-bg");

          document.getElementsByName("navmenu").forEach((item) => {
            item.classList.remove(sideBarTextProgressRef.current);
          });
        }

        if (el.dataset.menu !== activeNavMenuRef.current) {
          document.getElementById(activeNavMenuRef.current).classList.remove("active")
          document.getElementById(el.dataset.menu).classList.add("active")
          activeNavMenuRef.current = el.dataset.menu
        }

        return
      }
    })
  }

  function GeneralScrollHandle(e) {
    ToggleMobileMenu(false)
  }


  function GeneralOnClick(e) {
    if (e.target.id.split("_")[0] === "navmenu") {
      if (e.target.id === "navmenu_close") {
        ToggleMobileMenu(false)
      }
      else {
        if (e.target.id !== activeNavMenuRef.current) {
          document.getElementById(activeNavMenuRef.current).classList.remove("active")
          e.target.classList.add("active")
          activeNavMenuRef.current = e.target.id
        }
        ToggleMobileMenu(false)
        document.getElementById(`section_${e.target.id.split("navmenu_")[1]}`).scrollIntoView()
      }

    }
    else if (e.target.id.split("_")[0] === "navbar") {
      if (e.target.id === "navbar_mobile") {
        ToggleMobileMenu(true)
      }
    }
  }

  function SendMail(e) {
    window.open('mailto:mirsol.amir@gmail.com');
  }

  function CallPhone(e) {
    window.open("tel:++358417466150")
  }

  function ToggleMobileMenu(status) {
    if (status === true) {
      document.getElementById("navbar_parent").classList.remove("mobile-hide")
      document.getElementById("navbar_parent").classList.add("mobile-show")
      document.getElementById("navbar_mobile").style.display = "none"

      return
    }
    else if (status === false) {
      document.getElementById("navbar_parent").classList.remove("mobile-show")
      document.getElementById("navbar_parent").classList.add("mobile-hide")
      document.getElementById("navbar_mobile").style.display = "block"

      return
    }
  }

  return (
    <main className="ScrollApp" id="scrollapp">
      <div className="container-fluid">
        <div className="row">
          <div className="sticky-mobile-menu">
            <div className="mobile-menu-brown-photo" id="navbar_mobile" onClick={GeneralOnClick} />
          </div>
          <div className="col-md-1 side-navbar-parent" id="navbar_parent">
            <div className="side-navbar-box" id="navbarbox">
              <div
                className={`side-navbar-text mb-3`}
                id="navmenu_close"
                name="navmenu"
                onClick={GeneralOnClick}
              >
                <strong id="navmenu_close">Close</strong>
              </div>
              <div
                className={`side-navbar-text mb-3 active`}
                id="navmenu_home"
                name="navmenu"
                onClick={GeneralOnClick}
              >
                Home
              </div>
              <div
                className={`side-navbar-text my-3`}
                id="navmenu_who_am_i_?"
                name="navmenu"
                onClick={GeneralOnClick}
              >
                Who Am I?
              </div>
              <div
                className={`side-navbar-text my-3`}
                id="navmenu_experience"
                name="navmenu"
                onClick={GeneralOnClick}
              >
                Experience
              </div>
              <div
                className={`side-navbar-text my-3`}
                id="navmenu_university"
                name="navmenu"
                onClick={GeneralOnClick}
              >
                University
              </div>
              <div
                className={`side-navbar-text my-3`}
                id="navmenu_hobbies"
                name="navmenu"
                onClick={GeneralOnClick}
              >
                Hobbies
              </div>
              <div
                className={`side-navbar-text my-3`}
                id="navmenu_contact"
                name="navmenu"
                onClick={GeneralOnClick}
              >
                Contact
              </div>
            </div>
          </div>
          <div className="col-md-11 main-content mt-5">
            <div className="full-view snap-child" id="section_home" name="beigechild" data-menu="navmenu_home">
              <div className="row p-align-content mb-3 animate__animated animate__fadeIn">
                <div className="photo-circle">
                  <div className="cv-photo"></div>
                </div>
              </div>
              <div className="row p-align-content mb-5">
                <div className="main-content-text brown-text animate__animated animate__fadeIn">
                  Hi! Welcome to my Portfolio
                </div>
              </div>
              <div className="row p-align-content">
                <div className="mouse-scroll-photo" />
              </div>
            </div>
            <div className="full-view snap-child" id="section_who_am_i_?" name="beigechild" data-menu="navmenu_who_am_i_?">
              <div className="row p-align-content mb-3">
                <div className="centered-view main-content-title brown-text">
                  Who Am I?
                </div>
                <div className="centered-view main-content-text brown-text">
                  My name is Amirhossein and
                </div>
                <div className="centered-view main-content-text">
                  I am a Full-stack Software Developer
                </div>
              </div>
            </div>
            <div className="full-view brown-theme snap-child" name="brownchild" data-menu="navmenu_who_am_i_?">
              <div className="row p-align-content mb-5">
                <div className="centered-view beige-text main-content-text">
                  My stack
                </div>
                <div className="centered-view">
                  <div
                    className="stack-group-photo"
                  />
                </div>
              </div>
            </div>
            <div className="full-view brown-theme snap-child" name="brownchild" data-menu="navmenu_who_am_i_?">
              <div className="row p-align-content mb-3">
                <div className="mb-3 centered-view beige-text main-content-text">
                  I can speak multiple languages
                </div>
                <div className="centered-view">
                  <ul>
                    <li className="beige-text main-content-text text-start">
                      English (Bilingual)
                    </li>
                    <li className="beige-text main-content-text text-start">
                      Farsi (Native)
                    </li>
                    <li className="beige-text main-content-text text-start">
                      Arabic (Intermediate)
                    </li>
                    <li className="beige-text main-content-text text-start">
                      Azerbaijani (Intermediate)
                    </li>
                    <li className="beige-text main-content-text text-start">
                      Finnish (Basic)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="full-view snap-child" name="beigechild" data-menu="navmenu_who_am_i_?">
              <div className="row p-align-content mb-3">
                <div className="scrollable-parent">
                  <div className="centered-view main-content-text mb-3 mt-5">
                    I am based in Espoo, Finland
                  </div>
                  <div className="scrollable-child">
                    <div className="location-parent">
                      <SequenceScroller p_series={"location"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="full-view snap-child" id="section_experience" name="beigechild" data-menu="navmenu_experience">
              <div className="row p-align-content mb-3">
                <div className="centered-view main-content-title brown-text mb-5">
                  Experience
                </div>
                <div className="centered-view main-content-text px-20">
                  I have 2 years of experience in both Front-end development and Back-end development using React.js, Node.js and SQL.
                </div>
              </div>
            </div>
            <div className="full-view snap-child" name="beigechild" data-menu="navmenu_experience">
              <div className="row p-align-content mb-3">
                <div className="centered-view main-content-title brown-text mb-5">
                  <div className="egma-photo" />
                  Lead Front-end Developer
                </div>
                <div className="centered-view main-content-text brown-text mb-5">
                  Egma Optical Lens
                </div>
                <div className="centered-view main-content-text brown-text mb-5 px-20">
                  Feb 2023 – Jan 2024 Dubai, United Arab Emirates
                </div>
                <div className="centered-view main-content-text px-20">
                  At Egma, I initially started out as a software developer. I quickly started taking ownership of my projects and continuously took initiative in implementing and suggesting solutions for various shorts comings the company and the team faced. This attitude is how I got promoted to the Lead Front-end developer.
                </div>
              </div>
            </div>
            <div className="full-view brown-theme snap-child" name="brownchild" data-menu="navmenu_experience">
              <div className="row p-align-content mb-3">
                <div className="centered-view">
                  <div className="egma-photo egma-photo-details" />
                  <div className="hidden-details-gap" />
                </div>
                <div className="centered-view">
                  <ul className="px-20">
                    <li className="beige-text main-content-text font-xlarge mb-3">I managed and <strong>coached</strong> the company’s front-end team</li>
                    <li className="beige-text main-content-text font-xlarge mb-3">Completed multiple projects from scratch</li>
                    <li className="beige-text main-content-text font-xlarge mb-3">Used <strong>React.js</strong> for front-end development</li>
                    <li className="beige-text main-content-text font-xlarge mb-3">Managed the project <strong>GitHub</strong> repository</li>
                    <li className="beige-text main-content-text font-xlarge mb-3">
                      Successfully created a sophisticated and dynamic code structure that decreased code duplication and files by at least <strong>50%</strong> while allowing seamless integration and addition of new features, functionalities, and modifications
                    </li>
                    <li className="beige-text main-content-text font-xlarge mb-3">
                      Successfully created highly structured and optimized <strong>APIs</strong> using <strong>Node.js</strong> to process and return data from the company's database that had a structure which was incompatible with the required website design and functional requirements
                    </li>
                    <li className="beige-text main-content-text font-xlarge mb-3">
                      Used <strong>AWS</strong>, specifically S3 Bucket, to retrieve and store files dynamically
                    </li>
                    <li className="beige-text main-content-text font-xlarge mb-3">
                      Performed unit and system <strong>testing</strong> and debugging
                    </li>
                    <li className="beige-text main-content-text font-xlarge">
                      Successfully <strong>communicated</strong> with and translated the client’s requirements into features and functionality
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="full-view snap-child" name="beigechild" data-menu="navmenu_experience">
              <div className="row p-align-content mb-3">
                <div className="centered-view main-content-title brown-text mb-5">
                  <div className="astrautm-photo" />
                  Software Developer
                </div>
                <div className="centered-view main-content-text brown-text mb-5">
                  AstraUTM - A Thales company
                </div>
                <div className="centered-view main-content-text brown-text mb-5 px-20">
                  Mar 2022 – Feb 2023 Dubai, United Arab Emirates
                </div>
                <div className="centered-view main-content-text px-20">
                  At AstraUTM, I initially started out as an intern. I was able to solve a GIS problem the development team was facing, which along with my ability to self-learn JavaScript, React.js and work at the same pace as the rest of the team earned me my full-time position.                 </div>
              </div>
            </div>
            <div className="full-view brown-theme snap-child" name="brownchild" data-menu="navmenu_experience">
              <div className="row p-align-content mb-3">
                <div className="centered-view">
                  <div className="astrautm-photo astrautm-photo-details" />
                </div>
                <div className="centered-view">
                  <ul className="astrautm-details mt-5 px-20 ">
                    <li className="beige-text main-content-text text-start font-xlarge mb-3">
                      Re-built <strong>20+</strong> web pages, made previously using C# and MVC, with React.js and Redux to improve performance and allow for seamless user interactions.
                    </li>
                    <li className="beige-text main-content-text text-start font-xlarge mb-3">
                      Redesigned 3D model rendering and animation and merged it with 2D rendering to improve the application performance by over <strong>50%</strong>.
                    </li>
                    <li className="beige-text main-content-text text-start font-xlarge mb-3">
                      Successfully integrated new features and approaches that enhanced the development process and the user experience, resulting in a more efficient workflow.
                    </li>
                    <li className="beige-text main-content-text text-start font-xlarge mb-3">
                      Created a <strong>GIS web application</strong> using React.js, Mapbox, and Three.js
                    </li>
                    <li className="beige-text main-content-text text-start font-xlarge mb-3">
                      Created new and updated previously available <strong>APIs</strong> using .NET and C# to allow for the development of new features.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="full-view snap-child" id="section_university" name="beigechild" data-menu="navmenu_university">
              <div className="row p-align-content mb-3">
                <div className="centered-view main-content-title brown-text mb-5">
                  <div className="aus-photo aus-photo-intro" />
                  University
                </div>
                <div className="centered-view main-content-text brown-text mb-5">
                  2017-2022
                </div>
                <div className="centered-view main-content-text px-20">
                  I completed my Bachelor’s of Science in Computer Science at the American University of Sharjah with a CGPA of 3.11 / 4.0
                </div>
              </div>
            </div>
            <div className="full-view snap-child" name="beigechild" data-menu="navmenu_university">
              <div className="row p-align-content mt-5">
                <div className="scrollable-parent mt-5">
                  <div className="scrollable-child">
                    <div className="location-parent">
                      <SequenceScroller p_series={"university"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="full-view snap-child" name="beigechild" data-menu="navmenu_university">
              <div className="row p-align-content mb-3">
                <div className="centered-view">
                  <div className="aus-photo aus-photo-details" />
                </div>
                <div className="centered-view main-content-text brown-text my-5 px-20">
                  My thesis was titled Motorcycle Proximity Detection System
                </div>
                <div className="centered-view main-content-text px-20">
                  An object detection system built using Python and TensorFlow on the Nvidia Jetson Xavier,
                  that utilized computer vision to calculate the relative distance and speed of the detected object and determine its threat level.
                  The system was equipped with a mobile application connected to a Firebase database that alerted the user based on the
                  determined threat level
                </div>
              </div>
            </div>
            <div className="full-view snap-child" id="section_hobbies" name="beigechild" data-menu="navmenu_hobbies">
              <div className="row p-align-content mb-3">
                <div className="centered-view main-content-title brown-text mb-5">
                  Hobbies
                </div>
                <div className="centered-view main-content-text px-20">
                  Here is a little more about me outside of the work sphere and my professional skills and qualifications.
                </div>
              </div>
            </div>
            <div className="full-view snap-child" name="beigechild" data-menu="navmenu_hobbies">
              <div className="row p-align-content mb-3">
                <div className="centered-view main-content-title brown-text mb-5">
                  Bouldering
                </div>
                <div className="centered-view main-content-text px-20">
                  I love nature and sports. A relatively new hobby that I picked up this year is bouldering!
                </div>
                <div className="centered-view main-content-text px-20">
                  My highest grade, currently, is 6B+ (V4). Here you can see me struggle through one of my favorite problems (6B+)
                </div>
              </div>
            </div>
            <div className="full-view snap-child" name="beigechild" data-menu="navmenu_hobbies">
              <div className="row p-align-content mt-5">
                <div className="centered-view">
                  <video width={window.innerWidth * 0.60} height={window.innerHeight * 0.80} controls muted>
                    <source src={BoulderV4} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            <div className="full-view brown-theme snap-child" id="section_contact" name="brownchild" data-menu="navmenu_contact">
              <div className="centered-view  row p-align-content mb-3">
                <div className="centered-view beige-text main-content-title mb-5">
                  Contact Me
                </div>
                <div className="d-flex beige-text main-content-text mb-3 text-start box-click" onClick={SendMail}>
                  <div className="mail-icon" />
                  mirsol.amir@gmail.com
                </div>
                <div className="d-flex beige-text main-content-text mb-3 text-start box-click" onClick={CallPhone}>
                  <div className="phone-icon" />
                  +358417466150
                </div>
                <div className="beige-text main-content-text mb-3 text-start">
                  <a className="d-flex" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/amirhossein-mirsoleimani/" alt="linkedIn">
                    <div className="linkedin-icon" />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ScrollApp;
