window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var posts = new JournalApp.Collections.Posts();
    posts.fetch({
      success: function () {
        var r = new JournalApp.Routers.Posts({$el: $("#content"), posts: posts});
        var index = new JournalApp.Views.PostsIndex({collection: posts});
        $("#sidebar").html(index.render().$el)
        Backbone.history.start();
      }
    });
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
