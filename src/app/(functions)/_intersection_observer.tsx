import { Dispatch, RefObject, SetStateAction } from "react";
import {
    SECONDARY_BACKGROUND,
    PRIMARY_BACKGROUND,
    getNavTexts,
    getSections,
} from "./_global_functions";

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
    const mobileMenuButtonSecondary = document.getElementById(
        "mobile-menu-button-secondary"
    );
    const mobileMenuButtonPrimary = document.getElementById(
        "mobile-menu-button-primary"
    );
    const mobileMenu = document.getElementById("mobile-menu");
    const navTexts = getNavTexts();
    const sections = getSections();
    const isNavHidden = window.getComputedStyle(nav!, null).display === "none";

    if (!nav || !sections || !navTexts) return;

    function intersectionHandler(entries: Array<IntersectionObserverEntry>) {
        entries.forEach((entry) => {
            const theme = entry.target.classList[0];
            const id = entry.target.id;
            const primaryColor =
                theme === "primary-theme"
                    ? PRIMARY_BACKGROUND.rgb
                    : SECONDARY_BACKGROUND.rgb;
            const secondaryColor =
                theme === "primary-theme"
                    ? SECONDARY_BACKGROUND.rgb
                    : PRIMARY_BACKGROUND.rgb;

            if (entry.boundingClientRect.top <= nav!.getBoundingClientRect().bottom) {
                if (
                    theme === observerRef.current.prev.theme &&
                    nav!.style.borderImage.includes(`${secondaryColor} 100%`)
                ) {
                    if (entry.intersectionRatio > 0.84) {
                        setActive(id.split("_")[1]);
                    }
                    return;
                }
                const gradient = `linear-gradient(0deg, ${secondaryColor} ${entry.intersectionRatio * 100}%, ${primaryColor} 0)`
                if (nav!.style.borderImage !== gradient) {
                    nav!.style.borderImage = gradient;
                    nav!.style.borderImageSlice = "1";
                }
                mobileMenu!.style.backgroundColor = secondaryColor;

                if (isNavHidden) {
                    if (theme === "primary-theme") {
                        mobileMenuButtonPrimary!.style.display = "none";
                        mobileMenuButtonSecondary!.style.display = "block";
                    } else {
                        mobileMenuButtonPrimary!.style.display = "block";
                        mobileMenuButtonSecondary!.style.display = "none";
                    }
                }

                if (entry.intersectionRatio > 0.9) {
                    nav!.style.borderImage = `linear-gradient(0deg, ${secondaryColor} 100%, ${primaryColor} 0)`;
                    nav!.style.borderImageSlice = "1";
                    observerRef.current.prev.theme = theme;
                    setActive(id.split("_")[1]);
                }
            }

            navTexts.map((el) => {
                const item = el as HTMLElement;
                if (!isNavHidden) {
                    if (entry.boundingClientRect.top <= item.getBoundingClientRect().bottom)
                        if (item.style.color !== secondaryColor)
                            item.style.color = secondaryColor;
                } else {
                    if (mobileMenu!.style.backgroundColor === secondaryColor) {
                        item.style.color = primaryColor;

                    }
                    else {
                        item.style.color = secondaryColor;
                    }
                }
            });
        });
    }

    observerRef.current.main = new IntersectionObserver(
        intersectionHandler,
        options
    );

    sections.map((item) => {
        observerRef.current.main!.observe(item);
    });
}
