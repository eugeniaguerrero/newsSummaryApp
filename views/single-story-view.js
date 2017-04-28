(function(exports){
  function SingleStoryView(singleStory) {
    this.singleStory = singleStory;
  }

  SingleStoryView.prototype.viewStory = function () {
    var HtmlString = "<div><h1>" + this.singleStory.webTitle + "</h1></div><br><div><img src=" + this.singleStory.fields.thumbnail + "></div>" + this.singleStory.blocks.body["0"].bodyHtml;
    return HtmlString;
  };

  exports.SingleStoryView = SingleStoryView;
})(this);
