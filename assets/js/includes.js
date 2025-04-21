document.addEventListener('DOMContentLoaded', function() {
  // Replace all elements with data-include attribute
  document.querySelectorAll('[data-include]').forEach(element => {
    const filePath = element.getAttribute('data-include');
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        element.innerHTML = data;
        // If this is a head include, move its children to the actual head
        if (element.getAttribute('data-target') === 'head') {
          const fragment = document.createRange().createContextualFragment(data);
          document.head.appendChild(fragment);
          element.remove();
        }
      })
      .catch(error => console.error('Error loading include:', error));
  });
});