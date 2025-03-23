/**
 * Article Filter Functionality
 * Handles filtering of article cards based on category
 */

$(document).ready(function() {
  // Set up click handlers for article filters
  $('.article-filter').on('click', function() {
    // Get the filter value
    const filterValue = $(this).data('filter');
    
    // Update active class on buttons
    $('.article-filter').removeClass('active');
    $(this).addClass('active');
    
    // Filter the articles
    if (filterValue === 'all') {
      // Show all articles
      $('.article-container').show();
    } else {
      // Hide all articles first
      $('.article-container').hide();
      // Then show only those with the matching category
      $(`.article-container[data-category="${filterValue}"]`).show();
    }
  });
});