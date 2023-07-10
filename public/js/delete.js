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

document
  .querySelector("#delete-button")
  .addEventListener("click", deletePostHandler);
