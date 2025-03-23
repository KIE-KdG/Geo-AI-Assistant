/**
 * Multiple Medium Articles Embed Script
 * This script handles loading multiple Medium articles via their embed API
 * with fallbacks in case the embeds fail.
 */

// Wait for the document to be ready
$(document).ready(function() {
  // Array of article objects with URL, container ID, and title/description for fallback
  const mediumArticles = [
    {
      url: "https://medium.com/@yourusername/your-article-slug-1",
      containerId: "medium-widget-1",
      title: "Geo AI Assistant: Transforming Spatial Data Access",
      description: "Our comprehensive article explores how we built a Text-to-SQL solution specifically optimized for geographic data."
    },
    {
      url: "https://medium.com/@yourusername/your-article-slug-2",
      containerId: "medium-widget-2",
      title: "Technical Deep Dive: Building Text-to-SQL for Spatial Data",
      description: "A technical exploration of the architecture and implementation details of our Geo AI Assistant."
    },
    {
      url: "https://medium.com/@yourusername/your-article-slug-3",
      containerId: "medium-widget-3",
      title: "Case Study: Real-World Applications of Geo AI Assistant",
      description: "How organizations are using our Text-to-SQL solution to simplify access to geographic data."
    }
  ];
  
  // Load each Medium article
  mediumArticles.forEach(article => {
    loadMediumPost(article);
  });
});

/**
 * Attempts to load a Medium post via the API
 * Falls back to a static card if the API call fails
 * 
 * @param {Object} article - Article object with url, containerId, title and description
 */
function loadMediumPost(article) {
  $.ajax({
    url: `https://api.medium.com/v1/embed?url=${encodeURIComponent(article.url)}`,
    method: "GET",
    dataType: "json",
    success: function(data) {
      $(`#${article.containerId}`).html(data.html);
    },
    error: function() {
      showFallbackCard(article);
    }
  });
}

/**
 * Displays a fallback card with a link to the Medium article
 * 
 * @param {Object} article - Article object with url, title and description
 */
function showFallbackCard(article) {
  $(`#${article.containerId}`).html(`
    <div class="medium-fallback">
      <h3>${article.title}</h3>
      <p>${article.description}</p>
      <a href="${article.url}" target="_blank" class="btn">Read on Medium</a>
    </div>
  `);
}