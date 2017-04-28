(function(exports){
  function NewsController() {
    this.story = [];
    this.url = "https://content.guardianapis.com/politics";
    this.apiKey = "?api-key=56c1d77d-a2c7-4831-97a1-12dc38bf11fc&show-fields=thumbnail";
    this.apiData;
    this.apiCall();
    this.addStories();
  }

  NewsController.prototype.apiCall = function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", this.url + this.apiKey, false);
    xhr.send();
    this.apiData = JSON.parse(xhr.response).response;
  };

  NewsController.prototype.addStories = function() {
    for (i = 1; i < this.apiData.results.length; i++) {
      this.story.push(this.apiData.results[i]);
    };
  };

  NewsController.prototype.listStories = function() {
    var storiesView = new View(this.story);
    return storiesView.viewStories();
  };

  NewsController.prototype.renderStories = function() {
    var element = document.getElementById('news');
    element.innerHTML = this.listStories();
  };
  exports.NewsController = NewsController;
})(this);
