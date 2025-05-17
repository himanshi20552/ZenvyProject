document.addEventListener('DOMContentLoaded', () => {
    fetch('json/page3.json')
      .then(res => res.json())
      .then(data => {
        setScholarship(data.scholarship);
        populateStats(data.stats);
        populateCourses(data.courses);
        populateToppers(data.toppers);
        populateFAQ(data.faq);
      })
      .catch(err => console.error('Failed to load data.json:', err));
    
    // Delegate FAQ toggle (works even before populateFAQ runs)
    document.body.addEventListener('click', ev => {
      if (ev.target.classList.contains('faq-question')) {
        const ans = ev.target.nextElementSibling;
        ans.style.display = ans.style.display === 'block' ? 'none' : 'block';
      }
    });
  });

 

 
 /* === FAQ === */
 
 function populateFAQ(faqs) {
    const section = document.querySelector('.faq');
    if (!section) return;
    // Clear out everything except the heading (h2)
    const heading = section.querySelector('h2');
    section.innerHTML = '';
    if (heading) section.appendChild(heading);
  
    faqs.forEach(item => {
      const faqItem = document.createElement('div');
      faqItem.className = 'faq-item';
  
      const btn = document.createElement('button');
      btn.className = 'faq-question';
      btn.textContent = item.question;
  
      const ans = document.createElement('div');
      ans.className = 'faq-answer';
      ans.textContent = item.answer;
  
      faqItem.append(btn, ans);
      section.appendChild(faqItem);
    });}