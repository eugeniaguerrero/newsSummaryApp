(function(exports) {
  function View(stories) {
    this.stories = stories;
    this.url = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=";
  }

View.prototype.viewStories = function() {
  var storyText = [];
  for (i = 0; i < this.stories.length; i++) {
    storyText.push('<a href=#' + i + ">" + this.stories[i].webTitle + "</a></div><div><img src=" + this.stories[i].fields.thumbnail + "><div>" + this.storySummary(i));
  }
  return "<ul><li><div>" + storyText.join("</div></li><li><div>") + "</a></div></li></ul>";
};

View.prototype.storySummary = function(index) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", this.url + this.stories[index].webUrl, false);
  xhr.send();
  this.AylienSummary = JSON.parse(xhr.response);
  return this.AylienSummary.sentences;
};

  exports.View = View;
})(this);


//this.stories[i].blocks.body["0"].elements["0"].textTypeData.html
