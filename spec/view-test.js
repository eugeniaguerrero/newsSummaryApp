function ViewTest() {
  function headlines(){};
  headlines.prototype = {
    webTitle: function() {
      return "Hello";
    }
  };
  var headlines = new headlines();
  var view = new View(headlines);
  assert.toEqual(view.viewStories(), "<ul><li><div><a href=#0>Hello</a></div></li></ul>")
};

ViewTest();
