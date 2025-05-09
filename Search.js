document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search-container input");
  const stateFilter = document.getElementById("stateFilter");
  const examFilter = document.getElementById("examFilter");
  const clearBtn = document.getElementById("clearFilters");
  const centerCards = document.querySelectorAll(".center-card");

  function applyFilters() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedState = stateFilter.value.toLowerCase();
    const selectedExam = examFilter.value.toLowerCase();

    centerCards.forEach(card => {
      const name = card.dataset.name;
      const state = card.dataset.state;
      const exam = card.dataset.exam;

      const matchesSearch = name.includes(searchText);
      const matchesState = !selectedState || state === selectedState;
      const matchesExam = !selectedExam || exam === selectedExam;

      if (matchesSearch && matchesState && matchesExam) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  searchInput.addEventListener("input", applyFilters);
  stateFilter.addEventListener("change", applyFilters);
  examFilter.addEventListener("change", applyFilters);

  clearBtn.addEventListener("click", function () {
    searchInput.value = "";
    stateFilter.value = "";
    examFilter.value = "";
    applyFilters();
  });

  applyFilters();
});
