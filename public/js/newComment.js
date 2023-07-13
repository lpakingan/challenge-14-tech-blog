// handles the new comment form input to crete a new comment
var newCommentHandler = async (event) => {
  // prevents the browser from sending the form by default so it can instead be rendered by the code below
  event.preventDefault();

  // gathers the comment's content and indexes into the current url to get the associated post's id
  const content = document.querySelector("#comment-content").value;
  const currentPostURL = window.location.href;
  const post_id = currentPostURL.slice(currentPostURL.lastIndexOf("/") + 1);

  // if the comment has text content
  if (content) {
    // send the post data to the post route along with the blog post id it is associated with
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ content, post_id }),
      headers: { "Content-Type": "application/json" },
    });

    // if post data goes through, replace the current page with the updated blog post's content
    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
    } else {
      alert("Failed to add comment post!");
    }
  }
};

// event listeners for getting form information once submit is clicked
document
  .querySelector(".newComment-form")
  .addEventListener("submit", newCommentHandler);
