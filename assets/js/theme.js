const THEME_KEY = "site-theme";

const getPreferredTheme = () => {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
};

const updateToggleLabel = (button, theme) => {
  const nextLabel = theme === "dark" ? "Light mode" : "Dark mode";
  button.textContent = nextLabel;
  button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
};

const setupThemeToggle = () => {
  const toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;

  let currentTheme = getPreferredTheme();
  applyTheme(currentTheme);
  updateToggleLabel(toggle, currentTheme);

  toggle.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(currentTheme);
    localStorage.setItem(THEME_KEY, currentTheme);
    updateToggleLabel(toggle, currentTheme);
  });
};

applyTheme(getPreferredTheme());
window.addEventListener("DOMContentLoaded", setupThemeToggle);
