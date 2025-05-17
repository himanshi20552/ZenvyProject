const API_URL = '/api';

async function searchCenters() {
    const searchInput = document.getElementById('searchInput').value;
    const stateFilter = document.getElementById('stateFilter').value;
    const examFilter = document.getElementById('examFilter').value;

    try {
        const response = await fetch(`${API_URL}/search?query=${searchInput}&location=${stateFilter}&examType=${examFilter}`);
        const results = await response.json();
        
        const resultsContainer = document.getElementById('resultsContainer');
        resultsContainer.innerHTML = results.map(coaching => `
            <div class="center-card" data-name="${coaching.name.toLowerCase()}" data-exam="${coaching.examType.toLowerCase()}" data-state="${coaching.location.toLowerCase()}">
                <div class="center-info">
                    <h3>${coaching.name}</h3>
                    <p><i class="fas fa-map-marker-alt"></i> ${coaching.location}</p>
                    <p><i class="fas fa-graduation-cap"></i> ${coaching.examType}</p>
                    <p><i class="fas fa-star"></i> ${coaching.rating}/5 Rating</p>
                    <a href="coaching.html?id=${coaching._id}" class="view-btn">View Details</a>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error searching coaching centers:', error);
    }
}

// Filter centers based on selected filters
function filterCenters() {
    searchCenters();
}

// Clear all filters
function clearFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('stateFilter').value = '';
    document.getElementById('examFilter').value = '';
    searchCenters();
}

// Initial load
document.addEventListener('DOMContentLoaded', searchCenters);
// Add event listener for Enter key in search input
document.getElementById('searchInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    searchCenters();
  }
});