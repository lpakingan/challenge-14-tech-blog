// handles the login form input to log in user
const newPostHandler = async (event) => {
  // prevents the browser from sending the form by default so it can instead be rendered by the code below
  event.preventDefault();

  // gathers the post's title and content
  const title = document.querySelector("#post-title").value;
  const content = document.querySelector("#post-content").value;

  // if a post has a title and content
  if (title && content) {
    // send the post data to the post route
    const response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    // if post data goes through, replace the current page with the updated dashboard content
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to add new post!");
    }
  }
};

// event listeners for getting form information once submit is clicked
document
  .querySelector(".newPost-form")
  .addEventListener("submit", newPostHandler);
