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
      url: "https://medium.com/@lukasnackmayr/geoai-assistant-empowering-non-technical-users-with-natural-language-database-queries-1eb50e93a015",
      containerId: "medium-widget-1",
      title: "GeoAI Assistant: Empowering Non-Technical Users with Natural Language Database Queries",
      description: "A comprehensive article that showcases the project overall."
    },
    {
      url: "https://medium.com/@mkruts03/adapting-text-2-sql-for-large-scale-databases-c5fc62604bfa",
      containerId: "medium-widget-2",
      title: "Adapting Text‑2‑SQL for Large‑Scale Databases",
      description: "A technical exploration of the Text2SQL of our Geo AI Assistant."
    },
    {
      url: "https://medium.com/@gagliarducci.antonio/implementing-document-search-with-llms-using-langchain-01624867d07a",
      containerId: "medium-widget-3",
      title: "Implementing Document Search with LLMs Using LangChain",
      description: "A deeper dive into the document search architecture implemented in our Geo AI Assistant"
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