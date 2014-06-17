window.JournalApp.Views.PostShow = Backbone.View.extend({
  template: JST["post_show"],
  
  render: function() {
    var renderedContent = this.template(this.model);
    this.$el.html(renderedContent);
    return this;
  },
  
  events: {
    'click .back': 'back',
    'dblclick p': 'input_body',
    'blur label.body': 'save_body',

    'dblclick h1': 'input_title',
    'blur label.title': 'save_title'
  },
  
  back: function(event) {
    event.preventDefault();
    Backbone.history.navigate("#/", { trigger: true });
  },
  
  input_body: function(event) {
    var $p = $(event.currentTarget);
    $p.replaceWith('<label class="body">body<textarea>' + $p.text() + '</textarea></label>');
  },
  
  save_body: function(event) {
    var $label = $(event.currentTarget);
    var $textarea = $label.find("textarea");
    this.model.save({body: $textarea.val()});
    $label.replaceWith('<p>' + $textarea.val() + '</p>')
  },
  
  input_title: function(event) {
    var $h1 = $(event.currentTarget);
    $h1.replaceWith('<label class="title">title<input type="text" value="' + $h1.text() + '"></label>');
  },
  
  save_title: function(event) {
    var $label = $(event.currentTarget);
    var $input = $label.find("input");
    this.model.save({title: $input.val()});
    $label.replaceWith('<h1>' + $input.val() + '</h1>')
  },
  
});