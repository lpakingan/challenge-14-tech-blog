const logout = async () => {
  // makes a post request to destroy the current session using the logout route in the user route
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // when logged out redirect to the login page
    document.location.replace("/login");
  } else {
    alert(response.statusText);
  }
};

document.querySelector("#logout").addEventListener("click", logout);
