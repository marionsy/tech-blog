const editFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const post_body = document.querySelector('#content').value.trim();
  const id = document.querySelector('#post-title').getAttribute("post-id");

  if (title && post_body && id) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/posts/' + id, {
      method: 'PUT',
      body: JSON.stringify({ title, post_body }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#edit-post')
  .addEventListener('submit', editFormHandler);