// ==========================
// Tab switching
// ==========================
const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const loginFormEl = document.getElementById("loginForm");
const signupFormEl = document.getElementById("signupForm");

loginTab.addEventListener("click", () => {
  loginFormEl.classList.remove("hidden");
  signupFormEl.classList.add("hidden");
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
});

signupTab.addEventListener("click", () => {
  signupFormEl.classList.remove("hidden");
  loginFormEl.classList.add("hidden");
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
});

// ==========================
// Signup handler
// ==========================
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Signup successful! Please login.");
        // Switch back to login tab
        loginTab.click();
      } else {
        alert("❌ " + (data.error || "Signup failed"));
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("⚠️ Could not connect to server.");
    }
  });
}

// ==========================
// Login handler
// ==========================
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        // Save JWT + username in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);

        alert("✅ Login successful! Welcome " + data.username);
        window.location.href = "index.html"; // redirect to home
      } else {
        alert("❌ " + (data.error || "Login failed"));
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("⚠️ Could not connect to server.");
    }
  });
}
