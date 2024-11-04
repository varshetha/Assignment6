// URL of the Dog Facts API
const apiUrl = 'http://dog-api.kinduff.com';

// Elements
const factContainer = document.getElementById('fact');
const newFactButton = document.getElementById('new-fact-btn');

// Function to get a new fact from the API
async function getNewDogFact() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        // Display the fact from the API response. The Dog Facts API returns facts as an array.
        factContainer.textContent = data.facts[0];
    } catch (error) {
        factContainer.textContent = 'Oops! Something went wrong. Please try again later.';
        console.error('Error fetching the dog fact:', error);
    }
}

// Event listener for the "Get New Dog Fact" button
newFactButton.addEventListener('click', getNewDogFact);

// Load a fact when the page loads
window.addEventListener('load', getNewDogFact);
