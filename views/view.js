(function(exports) {
  function View(stories) {
    this.stories = stories;
    this.url = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=";
  }

View.prototype.viewStories = function() {
  var storyText = [];
  for (i = 0; i < this.stories.length; i++) {
    storyText.push('<a id="anchor-headline" href=#' + i + ">" + this.stories[i].webTitle + "</a></div><div><img src=" + this.stories[i].fields.thumbnail + "><div>" + this.storySummary(i));
  }
  return "<ul><div><li><div>" + storyText.join("</div></li></div><div><li><div>") + "</a></div></li></div></ul>";
};

View.prototype.storySummary = function(index) {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", this.url + this.stories[index].webUrl, false);
//   xhr.send();
//   this.AylienSummary = JSON.parse(xhr.response);
//   return this.AylienSummary.sentences;
    return "<p>So, there's a man crawling through the desert. He'd decided to try his SUV in a little bit of cross-country travel, had great fun zooming over the badlands and through the sand, got lost, hit a big rock, and then he couldn't get it started again. There were no cell phone towers anywhere near, so his cell phone was useless. He had no family, his parents had died a few years before in an auto accident, and his few friends had no idea he was out here. He stayed with the car for a day or so, but his one bottle of water ran out and he was getting thirsty.</p>";

};

  exports.View = View;
})(this);


//this.stories[i].blocks.body["0"].elements["0"].textTypeData.html
