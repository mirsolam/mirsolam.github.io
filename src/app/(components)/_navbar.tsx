'use client'
import { Dispatch, SetStateAction, useState } from "react";

export default function NavBar({ theme, active, setActive }:{theme:string, active:string, setActive:Dispatch<SetStateAction<string>>}) {

    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)

    function generalOnClick(e: React.MouseEvent<HTMLDivElement>) {
        const target = e.target as HTMLDivElement
        const id = target.id;
        const elem = document.getElementById(`section_${id}`)!.offsetTop
        window.scrollTo({ left: 0, top: elem, behavior: "smooth" })

        setActive(id)
    }

    function openMobileMenu() {
        setIsMobileMenuActive(!isMobileMenuActive)
    }

    return (
        <div id="navparent" className="col-span-1 col-start-1 py-8 fixed xl:w-1/6 sm:w-1/4 z-2">
            <div id="mobile-menu-button-secondary" className={`mobile-secondary-menu-icon ${isMobileMenuActive ? "active" : ""} fixed top-[0rem] z-1 sm:hidden`} onClick={openMobileMenu} />
            <div id="mobile-menu-button-primary" className={`mobile-primary-menu-icon ${isMobileMenuActive ? "active" : ""} fixed top-[0rem] z-1 sm:hidden`} style={{ display: "none" }} onClick={openMobileMenu} />
            <div id="mobile-menu" className={`mobile-side-nav-parent ${isMobileMenuActive ? "" : "inactive"} fixed top-[0rem] pt-10 items-center justify-items-center`}>
                <div id="home" data-name="navtext" className={`nav-text text-center cursor-pointer ${theme} xs:text-sm ${active === "home" ? "underline decoration-2" : ''}`} hidden={!isMobileMenuActive} onClick={generalOnClick}>
                    Home
                </div>
                <div id="stack" data-name="navtext" className={`my-8 nav-text text-center cursor-pointer ${theme} xs:text-sm ${active === "stack" ? "underline decoration-2" : ''}`} hidden={!isMobileMenuActive} onClick={generalOnClick}>
                    Stack
                </div>
                <div id="certificates" data-name="navtext" className={`nav-text text-center cursor-pointer ${theme} xs:text-sm ${active === "certificates" ? "underline decoration-2" : ''}`} hidden={!isMobileMenuActive} onClick={generalOnClick}>
                    Certificates
                </div>
                <div id="experience" data-name="navtext" className={`my-8 nav-text text-center cursor-pointer ${theme} xs:text-sm ${active === "experience" ? "underline decoration-2" : ''}`} hidden={!isMobileMenuActive} onClick={generalOnClick}>
                    Experience
                </div>
                <div id="education" data-name="navtext" className={`nav-text text-center cursor-pointer ${theme} xs:text-sm ${active === "education" ? "underline decoration-2" : ''}`} hidden={!isMobileMenuActive} onClick={generalOnClick}>
                    Education
                </div>
                <div id="contacts" data-name="navtext" className={`nav-text text-center cursor-pointer ${theme} mt-8 xs:text-sm ${active === "contacts" ? "underline decoration-2" : ''}`} hidden={!isMobileMenuActive} onClick={generalOnClick}>
                    Contacts
                </div>
            </div>

            <div id="nav" className="border-r-(--primary-foreground)-200 border-r-2 h-[90vh] pt-10 items-center justify-items-center xs:hidden sm:block">
                <div id="home" data-name="navtext" className={`nav-text text-center cursor-pointer ${theme} sm:text-lg ${active === "home" ? "underline decoration-2" : ''}`} onClick={generalOnClick}>
                    Home
                </div>
                <div id="stack" data-name="navtext" className={`my-8 nav-text text-center cursor-pointer ${theme} sm:text-lg ${active === "stack" ? "underline decoration-2" : ''}`} onClick={generalOnClick}>
                    Stack
                </div>
                <div id="certificates" data-name="navtext" className={`nav-text text-center cursor-pointer ${theme} sm:text-lg ${active === "certificates" ? "underline decoration-2" : ''}`} onClick={generalOnClick}>
                    Certificates
                </div>
                <div id="experience" data-name="navtext" className={`my-8 nav-text text-center cursor-pointer ${theme} sm:text-lg ${active === "experience" ? "underline decoration-2" : ''}`} onClick={generalOnClick}>
                    Experience
                </div>
                <div id="education" data-name="navtext" className={`nav-text text-center cursor-pointer ${theme} sm:text-lg ${active === "education" ? "underline decoration-2" : ''}`} onClick={generalOnClick}>
                    Education
                </div>
                <div id="contacts" data-name="navtext" className={`nav-text text-center cursor-pointer ${theme} mt-8 sm:text-lg ${active === "contacts" ? "underline decoration-2" : ''}`} onClick={generalOnClick}>
                    Contacts
                </div>
            </div>
        </div>
    );
}