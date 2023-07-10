// handles the deleting of a specific blog post
const deletePostHandler = async (event) => {
  // indexes into current post's url to get id of the post to delete
  const currentPostURL = window.location.href;
  const post_id = currentPostURL.slice(currentPostURL.lastIndexOf("/") + 1);

  // fetches the post data to delete
  const response = await fetch(`/api/post/${post_id}`, {
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
