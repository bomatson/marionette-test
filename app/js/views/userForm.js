BorrowerFunnel.Views.UserForm = Marionette.ItemView.extend({
  template: '#tpl-new-contact',

  ui: {
    loanAmount: '.contact-name-input',
    loanPurpose: '.contact-email-input',
    creditScore: '.contact-tel-input'
  },

  events: {
    'submit .contract-form': 'onFormSubmit'
  },

  onFormSubmit: function(e) {
    e.preventDefault();

    var attrs = {
      loanAmount: this.ui.loanAmount.val(),
      loanPurpose: this.ui.loanPurpose.val(),
      creditScore: this.ui.creditScore.val()
    }
    this.model.set(attrs);
    this.trigger('user:submitted');
  }
});
