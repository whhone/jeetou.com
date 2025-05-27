const apiBackend = import.meta.env.JEETOU_API_BACKEND || "https://api.jeetou.com/";

function safeAPICallback(apiStr, callback) {
  // Call the 'callback' function when the API call succeeds. Otherwise fails gracefully by
  // printing out the error(s).
  fetch(apiBackend + apiStr)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
                      response.status);
          return;
        }
        response.json().then(callback);
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}

export default safeAPICallback;
