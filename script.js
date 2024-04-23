var userName = localStorage.getItem("userName");
if (userName) {
    document.getElementById("welcome-message").textContent = "Hai, " + userName + ". Let's get to know me more";
} else {
    window.location.href = "landing.html";
}

// Fetch a random quote from an API
fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        const quoteElement = document.getElementById('quote');
        quoteElement.textContent = data.content;
    })
    .catch(error => {
        console.log('Error fetching quote:', error);
        const quoteElement = document.getElementById('quote');
        quoteElement.textContent = "Failed to fetch quote. Please try again later.";
    });
