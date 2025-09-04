// Toggle left menu
const sideMenu = document.getElementById("sideMenu");
document.getElementById("toggleMenuBtn").addEventListener("click", () => {
  sideMenu.classList.toggle("collapsed");
});

// Toggle right panel
const rightPanel = document.getElementById("rightPanel");
document.getElementById("toggleRightBtn").addEventListener("click", () => {
  rightPanel.classList.toggle("collapsed");
});
