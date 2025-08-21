export const PRIMARY_BACKGROUND = { hex: "#FAEED6", rgb: "rgb(250, 238, 214)" }
export const PRIMARY_FOREGROUND = { hex: "#260F00", rgb: "rgb(38, 15, 0)" }

export const SECONDARY_BACKGROUND = { hex: "#260F00", rgb: "rgb(38, 15, 0)" }
export const SECONDARY_FOREGROUND = { hex: "#FAEED6", rgb: "rgb(250, 238, 214)" }

export function getSections() {
    const sections = Object.values(document.querySelectorAll('[data-name="section"]'))
    return sections
}

export function getNavTexts() {
    const navTexts = Object.values(document.querySelectorAll('[data-name="navtext"]'))
    return navTexts
}