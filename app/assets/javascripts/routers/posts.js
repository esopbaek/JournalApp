"use strict";

window.JournalApp.Routers.Posts = Backbone.Router.extend({
  routes: {
    "": "root",
    "posts/new": "new",
    "posts/:id": "show",
    "posts/:id/edit": "edit",
  },
  
  root: function() {
    var index = new JournalApp.Views.PostsIndex({collection: this.posts});
    this.$el.html(index.render().$el)
  },
  
  show: function(id) {
    var post = this.posts.get(id);
    if (!post) {
      this.root();
      return;
    }
    var show = new JournalApp.Views.PostShow({model: post});
    this.$el.html(show.render().$el)
  },
  
  edit: function(id) {
    var post = this.posts.get(id);
    var edit = new JournalApp.Views.PostForm({model: post});
    this.$el.html(edit.render().$el)
  },
  
  new: function() {
    var post = new JournalApp.Models.Post;
    var new_form = new JournalApp.Views.PostForm({collection: this.posts, model: post});
    this.$el.html(new_form.render().$el)
  },
  
  initialize: function(options) {
    this.$el = options.$el;
    this.posts = options.posts;
  }
});