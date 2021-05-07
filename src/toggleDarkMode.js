import { darkMode } from "./stores";

export function toggleDarkMode() {
  window.document.body.classList.toggle("dark-mode");
  darkMode.update((mode) => !mode);
  return null;
}
