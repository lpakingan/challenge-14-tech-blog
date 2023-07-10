// handles the sign up form input to create user
const signupFormHandler = async (event) => {
  event.preventDefault();

  // gathers the username and password input and trims excess blank space
  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  // if a username and password were input
  // store the new user
  if (username && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    // if the username/password are saved, redirect user to the homepage
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

// event listeners for getting form information once submit is clicked
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
