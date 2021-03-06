import 'whatwg-fetch';

function safeAPICallback(apiStr, callback) {
    // Call the 'callback' function when the API call succeeds. Otherwise fails gracefully by
    // printing out the error(s).
    fetch(apiStr)
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

module.exports = safeAPICallback;
