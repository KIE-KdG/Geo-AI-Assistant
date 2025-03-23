// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Document loaded and ready');
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 20,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Example function to toggle additional content visibility
  const expandButtons = document.querySelectorAll('.expand-button');
  if (expandButtons) {
      expandButtons.forEach(button => {
          button.addEventListener('click', function() {
              const content = this.nextElementSibling;
              if (content.style.display === 'none' || content.style.display === '') {
                  content.style.display = 'block';
                  this.textContent = 'Show Less';
              } else {
                  content.style.display = 'none';
                  this.textContent = 'Show More';
              }
          });
      });
  }
});