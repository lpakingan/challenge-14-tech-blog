// handles the edit post input for updating existing blog posts
const editPostHandler = async (event) => {
  // prevents the browser from sending the form by default so it can instead be rendered by the code below
  event.preventDefault();

  // gathers the updated post's title, content, and id
  const updatedTitle = document.querySelector("#updated-post-title").value;
  const updatedContent = document.querySelector("#updated-post-content").value;
  const post_id = window.location.href[window.location.href.length - 1];

  // if the updated post has a title and content
  if (updatedTitle && updatedContent) {
    // send the updated post data to the post route
    const response = await fetch(`/api/post/${post_id}`, {
      method: "PUT",
      body: JSON.stringify({ updatedTitle, updatedContent }),
      headers: { "Content-Type": "application/json" },
    });

    // if update data goes through, replace the current page with the updated post content
    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
    } else {
      alert("Failed to update post!");
    }
  }
};

document
  .querySelector(".editPost-form")
  .addEventListener("submit", editPostHandler);
