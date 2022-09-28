const editFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const body = document.querySelector('#content').value.trim();

  if (title && body) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/posts', {
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