ContactManager.Views.UserForm = Marionette.ItemView.extend({
  template: '#tpl-new-contact',

  ui: {
    loanAmount: '.contact-name-input',
    loanPurpose: '.contact-email-input',
    creditScore: '.contact-tel-input'
  },

  events: {
    'submit .contract-form': 'onFormSubmit'
  },

  serializeData: function() {
    return _.extend(this.model.toJSON(), {
      isNew: this.model.isNew()
    });
  },

  onFormSubmit: function(e) {
    e.preventDefault();

    this.trigger('form:submitted', {
      loanAmount: this.ui.loanAmount.val(),
      loanPurpose: this.ui.loanPurpose.val(),
      creditScore: this.ui.creditScore.val()
    });
  }
});
