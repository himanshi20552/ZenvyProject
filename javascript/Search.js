function searchCenters() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.center-card');
  
  cards.forEach(card => {
    const name = card.getAttribute('data-name').toLowerCase();
    const exam = card.getAttribute('data-exam').toLowerCase();
    const state = card.getAttribute('data-state').toLowerCase();
    
    if (name.includes(searchInput) || exam.includes(searchInput) || state.includes(searchInput)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Function to filter centers
function filterCenters() {
  const stateFilter = document.getElementById('stateFilter').value.toLowerCase();
  const examFilter = document.getElementById('examFilter').value.toLowerCase();
  const cards = document.querySelectorAll('.center-card');
  
  cards.forEach(card => {
    const state = card.getAttribute('data-state').toLowerCase();
    const exam = card.getAttribute('data-exam').toLowerCase();
    
    const stateMatch = !stateFilter || state === stateFilter;
    const examMatch = !examFilter || exam === examFilter;
    
    if (stateMatch && examMatch) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Function to clear all filters
function clearFilters() {
  document.getElementById('searchInput').value = '';
  document.getElementById('stateFilter').value = '';
  document.getElementById('examFilter').value = '';
  
  const cards = document.querySelectorAll('.center-card');
  cards.forEach(card => {
    card.style.display = 'block';
  });
}

// Add event listener for Enter key in search input
document.getElementById('searchInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    searchCenters();
  }
});