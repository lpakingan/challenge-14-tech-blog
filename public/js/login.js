// handles the login form input to log in user
const loginFormHandler = async (event) => {
  // prevents the browser from sending the form by default so it can instead be rendered by the code below
  event.preventDefault();

  // gathers the username and password input and trims excess blank space
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  // if a username and password were input
  if (username && password) {
    // send the username and password to the login
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    // if the username and password match, redirect the user to the homepage
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

// event listener for getting form information once submit is clicked
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
