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

document
  .querySelector(".editPost-form")
  .addEventListener("submit", editPostHandler);
