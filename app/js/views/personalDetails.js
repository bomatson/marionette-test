BorrowerFunnel.Views.PersonalDetails = Marionette.ItemView.extend({
  template: '#tpl-personal-details',

  ui: {
    firstName: '.first-name-input',
    lastName: '.last-name-input',
    middleInitial: '.middle-initial-input',
    salary: '.salary-input'
  },

  events: {
    'submit .personal-form': 'onFormSubmit'
  },

  onFormSubmit: function(e) {
    e.preventDefault();

    var attrs = {
      firstName: this.ui.firstName.val(),
      lastName: this.ui.lastName.val(),
      middleInitial: this.ui.middleInitial.val(),
      salary: this.ui.salary.val()
    }

    this.model.set(attrs);
    $.post('http://localhost:4567/apply', this.model.attributes)
      .done(function(response) {
        BorrowerFunnel.vent.trigger('rate:submitted', response);
      })
  }
});
