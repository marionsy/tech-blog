const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment_body = document.querySelector('#comment').value.trim();
  const post_id = document.querySelector('.post-title').getAttribute('post-id');

  if (comment_body && post_id) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ post_id, comment_body }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/post/' + post_id);
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#comment-form')
  .addEventListener('submit', commentFormHandler);