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

// handles the edit post input for updating existing blog posts
const editPostHandler = async (event) => {
  // prevents the browser from sending the form by default so it can instead be rendered by the code below
  event.preventDefault();

  // gathers the updated post's title and content
  const updatedTitle = document.querySelector("#updated-post-title").value;
  const updatedContent = document.querySelector("#updated-post-content").value;

  // if the updated post has a title and content
  if (updatedTitle && updatedContent) {
    // send the updated post data to the post route
    const response = await fetch("/api/post/:id", {
      method: "PUT",
      body: JSON.stringify({ updatedTitle, updatedContent }),
      headers: { "Content-Type": "application/json" },
    });

    // if update data goes through, replace the current page with the updated dashboard content
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to update post!");
    }
  }
};

// handles the deleting of a specific blog post
const deletePostHandler = async (event) => {
  // fetches the post data to delete
  const response = await fetch("/api/post/:id", {
    method: "DELETE",
  });

  // if the post is successfully deleted, replace the current page with the updated dashboard content
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to delete post!");
  }
};

// event listeners for getting form information once submit is clicked
document
  .querySelector(".newPost-form")
  .addEventListener("submit", newPostHandler);

document
  .querySelector(".editPost-form")
  .addEventListener("submit", editPostHandler);

document
  .querySelector("#delete-button")
  .addEventListener("click", deletePostHandler);
