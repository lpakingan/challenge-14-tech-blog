// handles redirecting user to the new post page
const newPostRedirect = async (event) => {
  event.preventDefault();

  document.location.replace("/dashboard/new");
};

document
  .querySelector("#newPost-button")
  .addEventListener("click", newPostRedirect);
