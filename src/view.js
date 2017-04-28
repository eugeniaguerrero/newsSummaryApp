(function(exports) {
  function View(stories) {
    this.stories = stories;
  };

View.prototype.viewStories = function() {
  var storyText = [];
  for (i = 0; i < this.stories.length; i++) {
    storyText.push('<a href=#' + i + ">" + this.stories[i].webTitle + "</a></div><div><img src=" + this.stories[i].fields.thumbnail)
  };
  return "<ul><li><div>" + storyText.join("></div></li><li><div>") + "</a></div></li></ul>"
};
  exports.View = View;
})(this);
