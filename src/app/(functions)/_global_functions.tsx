export const PRIMARY_BACKGROUND = {
  hex: "#48171bff",
  rgb: "rgba(72, 23, 27, 1)",
};
export const PRIMARY_FOREGROUND = {
  hex: "#d0ab66",
  rgb: "rgba(208, 171, 102, 1)",
};

export function getSections() {
  const sections = Object.values(
    document.querySelectorAll('[data-name="section"]')
  );
  return sections;
}

export function getNavTexts() {
  const navTexts = Object.values(
    document.querySelectorAll('[data-name="navtext"]')
  );
  return navTexts;
}
