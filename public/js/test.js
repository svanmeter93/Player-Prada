const teamName = getElementById()

function updateFavoriteTeam(element) {
    const teamName = element
}


const button = document.querySelector('#log-button');

// Add an event listener for the click event
button.addEventListener('click', function() {
  // Send a POST request to the back end with the information you want to store
  fetch('/api/user-routes', {
    method: 'POST',
    body: JSON.stringify({
      data: "user log in info"
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
});