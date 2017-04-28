var newsController = new NewsController();
newsController.loadHeadlines();

makeUrlShowStoryIdForCurrentPage();

function makeUrlShowStoryIdForCurrentPage() {
  window.addEventListener('hashchange', showStoryForCurrentPage);
}

function showStoryForCurrentPage() {
   newsController.loadSingleStory(getStoryFromUrl(window.location));
}

function getStoryFromUrl(location) {
  return location.hash.split('#')[1];
}
