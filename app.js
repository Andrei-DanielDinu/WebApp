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
// Check login state
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const welcomeMessage = document.getElementById("welcomeMessage");
const logoutBtn = document.getElementById("logoutBtn");

if (currentUser) {
  welcomeMessage.textContent = `Hello, ${currentUser.username}! Glad to have you here.`;
  logoutBtn.classList.remove("hidden");
} else {
  // If no user, redirect to login page
  window.location.href = "auth.html";
}

// Logout button logic
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    alert("You have logged out.");
    window.location.href = "auth.html";
  });
}
