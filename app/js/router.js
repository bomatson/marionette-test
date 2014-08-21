BorrowerFunnel.Router = Marionette.AppRouter.extend({
  routes: {
    '': 'home'
  },

  home: function() {
    this.navigate('users/new', {
      trigger: true,
      replace: true
    });
  }
});
