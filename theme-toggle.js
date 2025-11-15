// -----------------------------------------
//  GLOBAL THEME TOGGLE (LIGHT <-> DARK)
//  Works on all pages that include it
// -----------------------------------------

(function () {
  // 1. Load saved theme preference
  const saved = localStorage.getItem("site-theme");
  if (saved === "dark") {
    document.documentElement.classList.add("dark");
  }

  // 2. Toggle function
  window.toggleTheme = function () {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("site-theme", isDark ? "dark" : "light");

    // Change button icon
    const btn = document.getElementById("themeToggle");
    if (btn) btn.textContent = isDark ? "☀️" : "🌙";
  };

  // 3. Set initial icon
  window.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("themeToggle");
    if (btn) btn.textContent = document.documentElement.classList.contains("dark") ? "☀️" : "🌙";
  });
})();
  
