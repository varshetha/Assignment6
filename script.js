const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results-container');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
        searchBooks(query);
    }
});

async function searchBooks(query) {
    try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        displayResults(data.docs);
    } catch (error) {
        console.error('Error fetching data:', error);
        resultsContainer.innerHTML = '<p>An error occurred while fetching data. Please try again.</p>';
    }
}

function displayResults(books) {
    resultsContainer.innerHTML = '';
    if (books.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
        return;
    }

    books.slice(0, 10).forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const coverUrl = book.cover_i 
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : 'https://via.placeholder.com/150x200?text=No+Cover';

        bookCard.innerHTML = `
            <img src="${coverUrl}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>Author: ${book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
            <p>First Published: ${book.first_publish_year || 'Unknown'}</p>
        `;

        resultsContainer.appendChild(bookCard);
    });
}