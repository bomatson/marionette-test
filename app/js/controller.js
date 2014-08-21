ContactManager.Controller = Marionette.Controller.extend({
  initialize: function(options) {
    this._router = options.router;
    this._mainRegion = options.mainRegion;
  },

  showRate: function() {
    var rateView = new ContactManager.Views.Rate({
      model: this.model
    });

    /* this.listenTo(rateView, 'addContact:clicked', this.newUser); */

    ContactManager.mainRegion.show(rateView);

    this._router.navigate('rate');
  },

  newUser: function() {
    var newUserForm = new ContactManager.Views.UserForm({
      model: new ContactManager.Models.User()
    });

    this.listenTo(newUserForm, 'form:submitted', function(attrs) {
      this.showRate();
    });

    ContactManager.mainRegion.show(newUserForm);

    this._router.navigate('users/new');
  }
});
