(function(exports){
  function SingleStoryView(singleStory) {
    this.singleStory = singleStory;
  }

  SingleStoryView.prototype.viewStory = function () {
    var HtmlString = "<div id='full-article'><div><h1>" + this.singleStory.webTitle + "</h1></div><div><img src=" + this.singleStory.fields.thumbnail + "></div>" + this.singleStory.blocks.body["0"].bodyHtml + "</div>";
    return HtmlString;
  };

  exports.SingleStoryView = SingleStoryView;
})(this);
