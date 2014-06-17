window.JournalApp.Views.PostForm = Backbone.View.extend({
  template: JST["post_form"],
  
  render: function(errors) {
    var renderedContent = this.template({errors: errors});
    this.$el.html(renderedContent);
    return this;
  },
  
  events: {
    'submit form': 'submit'
  },
  
  submit: function(event) {
    event.preventDefault();
    var form_data = $(event.currentTarget).serializeJSON();
    var model = this.model;
    if (this.model.isNew()) {
      this.collection.create(form_data, {
        success: function (model) {
          console.log(arguments)
          Backbone.history.navigate('#/posts/' + model.id, {trigger: true});
        },
        error: function (model, response, options) {
          this.render(response);
        },
      });
    } else {
      var form = this;
      this.model.save(form_data, {
        success: function () {
          Backbone.history.navigate('#/posts/' + model.id, {trigger: true});
        },
        error: function (model, response, options) {
          console.log(form);
          form.render(response.responseText);
        },
      });
    }
  }
});