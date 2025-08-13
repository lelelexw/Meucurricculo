// Tema claro/escuro com persistência
(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem("cv-theme");
  if (saved) root.setAttribute("data-theme", saved);

  const btn = document.getElementById("themeToggle");
  btn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", current);
    localStorage.setItem("cv-theme", current);
  });

  // Imprimir
  const printBtn = document.getElementById("printBtn");
  printBtn.addEventListener("click", () => window.print());
})();
