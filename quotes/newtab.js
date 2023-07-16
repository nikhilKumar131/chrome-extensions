function fetchQuote() {
    // Replace this API URL with the desired quote API
    const apiUrl = 'https://api.example.com/quotes/random';
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const quoteContainer = document.getElementById('quote-container');
        quoteContainer.innerHTML = `
          <p class="quote">${data.quote}</p>
          <p class="author">- ${data.author}</p>
        `;
      })
      .catch(error => {
        console.error('Error fetching quote:', error);
        const quoteContainer = document.getElementById('quote-container');
        quoteContainer.innerHTML = `<p class="quote">Failed to fetch quote.</p>`;
      });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchQuote();
  });
  