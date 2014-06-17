window.JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts_index"],
  
  render: function() {
    var renderedContent = this.template(this.collection);
    this.$el.html(renderedContent);
    return this;
  },
  
  events: {
    "click .remove": "destroy"
  },
  
  destroy: function(event) { 
    var button = $(event.currentTarget);
    var id = button.data("id");
    this.collection.findWhere({id: id}).destroy();
  },
  
  initialize: function() {
    this.listenTo(this.collection, "add", this.render);
    this.listenTo(this.collection, "change:title", this.render);
    this.listenTo(this.collection, "remove", this.render);
    this.listenTo(this.collection, "reset", this.render);
  }
  
});