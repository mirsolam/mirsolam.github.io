"use client";
import { Dispatch, SetStateAction, useState } from "react";

export default function NavBar({
  theme,
  active,
  setActive,
}: {
  theme: string;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}) {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  function generalOnClick(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement;
    const id = target.id;
    const elem = document.getElementById(`section_${id}`)!.offsetTop;
    window.scrollTo({ left: 0, top: elem, behavior: "smooth" });

    setActive(id);
  }

  function openMobileMenu() {
    setIsMobileMenuActive(!isMobileMenuActive);
  }

  return (
    <div
      id="navparent"
      className="grid w-screen items-center lg:justify-items-center xs:justify-items-start fixed primary-theme z-2"
    >
      <div
        id="mobile-menu-button-secondary"
        className={`mobile-menu-icon ${
          isMobileMenuActive ? "active" : ""
        } fixed top-[0rem] z-1 lg:hidden`}
        onClick={openMobileMenu}
      />
      <div
        id="mobile-menu"
        className={`mobile-side-nav-parent ${
          isMobileMenuActive ? "" : "inactive"
        } fixed top-[0rem] pt-10 items-center justify-items-center`}
      >
        <div
          id="home"
          data-name="navtext"
          className={`nav-text text-center cursor-pointer ${theme} xs:text-sm ${
            active === "home" ? "underline decoration-2" : ""
          }`}
          hidden={!isMobileMenuActive}
          onClick={generalOnClick}
        >
          Home
        </div>
        <div
          id="stack"
          data-name="navtext"
          className={`nav-text text-center cursor-pointer ${theme} xs:text-sm ${
            active === "stack" ? "underline decoration-2" : ""
          }`}
          hidden={!isMobileMenuActive}
          onClick={generalOnClick}
        >
          Stack
        </div>
        <div
          id="certificates"
          data-name="navtext"
          className={`nav-text text-center cursor-pointer ${theme} xs:text-sm ${
            active === "certificates" ? "underline decoration-2" : ""
          }`}
          hidden={!isMobileMenuActive}
          onClick={generalOnClick}
        >
          Certificates
        </div>
        <div
          id="projects"
          data-name="navtext"
          className={`nav-text text-center cursor-pointer ${theme} xs:text-sm ${
            active === "projects" ? "underline decoration-2" : ""
          }`}
          hidden={!isMobileMenuActive}
          onClick={generalOnClick}
        >
          Projects
        </div>
        <div
          id="contacts"
          data-name="navtext"
          className={`nav-text text-center cursor-pointer ${theme} xs:text-sm ${
            active === "contacts" ? "underline decoration-2" : ""
          }`}
          hidden={!isMobileMenuActive}
          onClick={generalOnClick}
        >
          Contacts
        </div>
        <div
          id="linkedin"
          data-name="navtext"
          className={`nav-text text-center cursor-pointer ${theme} xs:text-sm ${
            active === "contacts" ? "underline decoration-2" : ""
          }`}
          hidden={!isMobileMenuActive}
          onClick={generalOnClick}
        >
          <div>
            <a
              className="linkedin-icon"
              target="_blank"
              href="https://www.linkedin.com/in/amirhossein-mirsoleimani/"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 items-center justify-items-center w-[70vw] border-b-(--primary-foreground)-200 border-b-1 xs:hidden lg:block">
        <div
          id="nav"
          className="grid col-start-2 items-center justify-items-center"
        >
          <div className="flex items-center my-8">
            <div
              id="home"
              data-name="navtext"
              className={`nav-text text-center cursor-pointer ${theme} md:text-lg ${
                active === "home" ? "underline decoration-2" : ""
              }`}
              onClick={generalOnClick}
            >
              Home
            </div>
            <div
              id="stack"
              data-name="navtext"
              className={`nav-text text-center cursor-pointer ${theme} md:text-lg ${
                active === "stack" ? "underline decoration-2" : ""
              }`}
              onClick={generalOnClick}
            >
              Stack
            </div>
            <div
              id="certificates"
              data-name="navtext"
              className={`nav-text text-center cursor-pointer ${theme} md:text-lg ${
                active === "certificates" ? "underline decoration-2" : ""
              }`}
              onClick={generalOnClick}
            >
              Certificates
            </div>
            <div
              id="projects"
              data-name="navtext"
              className={`nav-text text-center cursor-pointer ${theme} md:text-lg ${
                active === "projects" ? "underline decoration-2" : ""
              }`}
              onClick={generalOnClick}
            >
              Projects
            </div>
            <div
              id="contacts"
              data-name="navtext"
              className={`nav-text text-center cursor-pointer ${theme} md:text-lg ${
                active === "contacts" ? "underline decoration-2" : ""
              }`}
              onClick={generalOnClick}
            >
              Contacts
            </div>
            <div
              id="linkedin"
              data-name="navtext"
              className={`grid nav-text text-center justify-items-end cursor-pointer ${theme} md:text-lg`}
              onClick={generalOnClick}
            >
              <div>
                <a
                  className="linkedin-icon"
                  target="_blank"
                  href="https://www.linkedin.com/in/amirhossein-mirsoleimani/"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
