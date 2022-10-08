const deleteFormHandler = async (event) => {
  event.preventDefault();

  const id = document.querySelector('#post-title').getAttribute("post-id");

  if (id) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/posts/' + id, {
      method: 'DELETE',
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
  .querySelector('.delete-post-btn')
  .addEventListener('click', deleteFormHandler);