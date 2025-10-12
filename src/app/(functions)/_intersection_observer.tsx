import { Dispatch, RefObject, SetStateAction } from "react";
import { getSections } from "./_global_functions";

function _buildThresholdList() {
  const thresholds = [];
  const numSteps = 60;

  for (let i = 1.0; i <= numSteps; i++) {
    const ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

function _animateSideAccents(
  id: string,
  sectionName: string,
  previousSectionName: string,
  nextSectionName: string,
  continueClassName: string,
  prevContinueClassName: string,
  previousY: { [key: string]: number },
  currentY: number,
  viewportHeight: number
) {
  //Self
  const accentContinue =
    document.getElementById(`accent_continue_${sectionName}`) ?? null;

  //--May not be available
  const accentLeft =
    document.getElementById(`accent_left_${sectionName}`) ?? null;
  const accentRight =
    document.getElementById(`accent_right_${sectionName}`) ?? null;

  const accentLeftTriangleUp =
    document.getElementById(`accent_left_triangleup_${sectionName}`) ?? null;
  const accentRightTriangleUp =
    document.getElementById(`accent_right_triangleup_${sectionName}`) ?? null;

  const accentLeftTriangleDown =
    document.getElementById(`accent_left_triangledown_${sectionName}`) ?? null;
  const accentRightTriangleDown =
    document.getElementById(`accent_right_triangledown_${sectionName}`) ?? null;
  //---------------------------------------------------------------------------------------------------------//

  //Previous Section
  const prevContinue =
    document.getElementById(`accent_continue_${previousSectionName}`) ?? null;

  //--May not be available
  const prevLeft =
    document.getElementById(`accent_left_${previousSectionName}`) ?? null;
  const prevRight =
    document.getElementById(`accent_right_${previousSectionName}`) ?? null;
  //---------------------------------------------------------------------------------------------------------//

  //Next Section
  const nextLeftTriangleUp =
    document.getElementById(`accent_left_triangleup_${nextSectionName}`) ??
    null;
  const nextRightTriangleUp =
    document.getElementById(`accent_right_triangleup_${nextSectionName}`) ??
    null;

  const nextLeftTriangleDown =
    document.getElementById(`accent_left_triangledown_${nextSectionName}`) ??
    null;
  const nextRightTriangleDown =
    document.getElementById(`accent_right_triangledown_${nextSectionName}`) ??
    null;
  //---------------------------------------------------------------------------------------------------------//

  const topThreshold = (-1 * viewportHeight) / 5;

  if (previousY[id] > currentY) {
    //If scrolling down
    if (sectionName === "home") {
      //Home logic
      if (currentY <= topThreshold + 100 && currentY >= -1 * viewportHeight) {
        //If the bottom half is visible
        accentLeft!.classList.add("contract");
        accentRight!.classList.add("contract");
        accentContinue!.classList.add(continueClassName);

        accentContinue!.addEventListener(
          "transitionend",
          function nextTransition() {
            if (accentContinue!.className.includes(continueClassName)) {
              nextLeftTriangleUp?.classList.add("stretch");
              nextRightTriangleUp?.classList.add("stretch");

              nextLeftTriangleDown?.classList.add("stretch");
              nextRightTriangleDown?.classList.add("stretch");
            }

            accentContinue!.removeEventListener(
              "transitionend",
              nextTransition
            );
          }
        );
      }
    } else {
      if (currentY <= viewportHeight / 3) {
        //If top half is visible
        if (
          previousSectionName !== "none" &&
          prevContinue &&
          !prevContinue!.className.includes(prevContinueClassName)
        ) {
          prevContinue!.classList.add(prevContinueClassName);
          prevLeft?.classList.add("contract");
          prevRight?.classList.add("contract");

          prevContinue!.addEventListener(
            "transitionend",
            function nextTransition() {
              if (prevContinue!.className.includes(prevContinueClassName)) {
                accentLeftTriangleUp!.classList.add("stretch");
                accentRightTriangleUp!.classList.add("stretch");

                accentLeftTriangleDown!.classList.add("stretch");
                accentRightTriangleDown!.classList.add("stretch");
              }

              prevContinue!.removeEventListener(
                "transitionend",
                nextTransition
              );
            }
          );
        } else if (accentRightTriangleUp!.className.includes("stretch")) {
          accentLeftTriangleDown!.classList.add("stretch");
          accentRightTriangleDown!.classList.add("stretch");
        }
      }
      if (currentY <= topThreshold + 100 && currentY >= -1 * viewportHeight) {
        //If scrolling past bottom half
        if (accentRightTriangleDown!.className.includes("stretch"))
          accentContinue!.classList.add(continueClassName);
        else {
          accentRightTriangleDown!.addEventListener(
            "transitionend",
            function nextTransition() {
              accentContinue!.classList.add(continueClassName);

              accentRightTriangleDown!.removeEventListener(
                "transitionend",
                nextTransition
              );
            }
          );
        }

        if (nextSectionName !== "none")
          accentContinue!.addEventListener(
            "transitionend",
            function nextTransition() {
              if (accentContinue!.className.includes(continueClassName)) {
                nextLeftTriangleUp?.classList.add("stretch");
                nextRightTriangleUp?.classList.add("stretch");

                nextLeftTriangleDown?.classList.add("stretch");
                nextRightTriangleDown?.classList.add("stretch");
              }

              accentContinue!.removeEventListener(
                "transitionend",
                nextTransition
              );
            }
          );
      }
    }
  } else if (previousY[id] <= currentY) {
    //If scrolling up
    if (sectionName === "home") {
      //Home logic
      if (currentY > topThreshold && currentY <= viewportHeight / 3) {
        //If scrolling up past the top half
        if (
          nextSectionName !== "none" &&
          nextRightTriangleUp &&
          nextRightTriangleUp!.className.includes("stretch")
        ) {
          nextLeftTriangleUp!.classList.remove("stretch");
          nextRightTriangleUp!.classList.remove("stretch");

          nextRightTriangleUp!.addEventListener(
            "transitionend",
            function nextTransition() {
              if (!nextRightTriangleUp!.className.includes("stretch")) {
                accentLeft!.classList.remove("contract");
                accentRight!.classList.remove("contract");
                accentContinue!.classList.remove(continueClassName);
              }

              nextRightTriangleUp!.removeEventListener(
                "transitionend",
                nextTransition
              );
            }
          );
        } else {
          accentLeft!.classList.remove("contract");
          accentRight!.classList.remove("contract");
          accentContinue!.classList.remove(continueClassName);
        }
      }
    } else {
      if (currentY > topThreshold && currentY <= viewportHeight / 3) {
        //If scrolling up to the center
        if (
          nextSectionName !== "none" &&
          nextRightTriangleUp &&
          nextRightTriangleUp!.className.includes("stretch")
        ) {
          nextLeftTriangleUp!.classList.remove("stretch");
          nextRightTriangleUp!.classList.remove("stretch");

          nextRightTriangleUp!.addEventListener(
            "transitionend",
            function nextTransition() {
              if (!nextRightTriangleUp!.className.includes("stretch"))
                accentContinue!.classList.remove(continueClassName);

              nextRightTriangleUp!.removeEventListener(
                "transitionend",
                nextTransition
              );
            }
          );
        } else if (
          nextSectionName === "none" ||
          (nextRightTriangleUp &&
            !nextRightTriangleUp!.className.includes("stretch") &&
            accentContinue!.className.includes("stretch"))
        ) {
          accentContinue!.classList.remove(continueClassName);
        }
      }
      if (currentY > viewportHeight / 3 && currentY <= viewportHeight / 1.5) {
        if (!accentContinue!.className.includes(continueClassName)) {
          accentLeftTriangleDown!.classList.remove("stretch");
          accentRightTriangleDown!.classList.remove("stretch");
        } else {
          accentContinue!.classList.remove(continueClassName);
          accentContinue!.addEventListener(
            "transitionend",
            function nextTransition() {
              if (!accentContinue!.className.includes(continueClassName)) {
                accentLeftTriangleDown!.classList.remove("stretch");
                accentRightTriangleDown!.classList.remove("stretch");
              }

              accentContinue!.removeEventListener(
                "transitionend",
                nextTransition
              );
            }
          );
        }
      }
    }
  }
}

export default function initializeObserver(
  observerRef: RefObject<{
    main: IntersectionObserver | null;
    prev: { id: string; theme: string };
  }>,
  setActive: Dispatch<SetStateAction<string>>
) {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: _buildThresholdList(),
  };

  const nav = document.getElementById("nav");
  const sections = getSections();
  const previousY: { [key: string]: number } = {};

  if (!nav || !sections) return;

  function intersectionHandler(entries: Array<IntersectionObserverEntry>) {
    entries.forEach((entry) => {
      const position = Number(entry.target.getAttribute("data-index"));
      let previousSectionName = "none";
      let nextSectionName = "none";
      let prevContinueClassName = "none";

      if (position - 1 >= 0) {
        previousSectionName = sections[position - 1].id.split("_")[1];
        prevContinueClassName = `${previousSectionName}-len`;
      }
      if (position + 1 < sections.length)
        nextSectionName = sections[position + 1].id.split("_")[1];

      const id = entry.target.id;
      const sectionName = id.split("_")[1];
      const viewportHeight = entry.rootBounds!.height;
      const currentY = entry.boundingClientRect.y;

      const continueClassName = `${sectionName}-len`;
      if (entry.intersectionRatio >= 0.75)
        setActive(sectionName === "whoami" ? "home" : sectionName);

      _animateSideAccents(
        id,
        sectionName,
        previousSectionName,
        nextSectionName,
        continueClassName,
        prevContinueClassName,
        previousY,
        currentY,
        viewportHeight
      );
      previousY[id] = currentY;
    });
  }

  observerRef.current.main = new IntersectionObserver(
    intersectionHandler,
    options
  );

  sections.map((item) => {
    previousY[item.id] = 0;
    observerRef.current.main!.observe(item);
  });
}
