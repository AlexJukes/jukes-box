import { darkMode } from "../stores";

export function enableDarkMode() {
  window.document.body.classList.add("dark-mode");
  darkMode.update(() => true);
  return "";
}

export function enableLightMode() {
  window.document.body.classList.remove("dark-mode");
  darkMode.update(() => false);
  return "";
}
