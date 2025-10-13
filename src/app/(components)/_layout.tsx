"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { useCallback, useEffect, useRef, useState } from "react";
import initializeObserver from "../(functions)/_intersection_observer";
import NavBar from "./_navbar";
import { getSections } from "../(functions)/_global_functions";
import { RootVariables } from "../(types)/_types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme] = useState("");
  const [active, setActive] = useState("home");
  const [rootVariables, setRootVariables] = useState(
    undefined as unknown as { [key: string]: RootVariables }
  );
  const observerRef = useRef<{
    main: IntersectionObserver | null;
    prev: { id: string; theme: string };
  }>({ main: null, prev: { id: "", theme: "" } });

  const startObserver = useCallback(() => {
    initializeObserver(observerRef, setActive);
  }, []);

  function adjustHomeSideAccentMeasurements(root: HTMLElement) {
    const logoParent = document
      .getElementById("logo_home")!
      .getBoundingClientRect();

    const accentLeft = document
      .getElementById("accent_left_home")!
      .getBoundingClientRect();

    const distance = accentLeft!.right - logoParent!.left;
    if (distance !== 0)
      root.style.setProperty("--home-side-accent-margin", `${distance}px`);

    root.style.setProperty(
      "--home-side-accent-width",
      `${window.innerWidth / 4}px`
    );
  }

  function adjustContinueLength(root: HTMLElement) {
    Object.keys(rootVariables).map((key) => {
      const selfBottom =
        document
          .getElementById(`accent_continue_${key}`)
          ?.getBoundingClientRect().top ?? 0;
      const nextTop =
        document
          .getElementById(`accent_right_triangleup_${rootVariables[key].next}`)
          ?.getBoundingClientRect().top ?? 0;
      const distance = Math.abs(nextTop - selfBottom) + 1;

      root.style.setProperty(`--${key}-continue-length`, `${distance}px`);
    });
  }

  function adjustLength() {
    const root = document.querySelector(":root")! as HTMLElement;

    adjustHomeSideAccentMeasurements(root);
    adjustContinueLength(root);
  }

  function initializeLengthAdjustment() {
    if (!rootVariables) {
      const variables: { [key: string]: RootVariables } = {};
      const sections = getSections();
      sections.map((section) => {
        const name: string = section.id.split("_")[1];
        const position = Number(section.getAttribute("data-index"));
        const defaultContinueLength = Number(
          window
            .getComputedStyle(document.querySelector(":root")!)
            .getPropertyValue(`--${name}-continue-length`)
            .split("rem")[0]
        );
        let next = "none";
        if (position + 1 < sections.length)
          next = sections[position + 1].id.split("_")[1];
        variables[name] = {
          default: defaultContinueLength,
          next: next,
        };
      });
      setRootVariables(variables);
    } else {
      adjustLength();
      window.addEventListener("resize", adjustLength);
    }
  }

  useEffect(() => {
    startObserver();
    initializeLengthAdjustment();

    return () => window.removeEventListener("resize", adjustLength);
  }, [rootVariables]);

  return (
    <html lang="en">
      <body
        id="body"
        className={`${geistSans.variable} ${geistMono.variable} ${theme} antialiased`}
      >
        <div className="relative">
          <NavBar theme={theme} active={active} setActive={setActive} />
          <div className="items-center justify-items-center" id="main">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
