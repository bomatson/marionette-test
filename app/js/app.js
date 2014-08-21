var ContactManager = new Marionette.Application({
  Models: {},
  Collections: {},
  Views: {}
});

ContactManager.addRegions({
  mainRegion: '.main-container'
});

ContactManager.addInitializer(function(data) {
  var router = new ContactManager.Router(),
      user = new ContactManager.Models.User(),
      controller = new ContactManager.Controller({
        router: router,
        mainRegion: this.mainRegion,
        user: user
      });

  router.processAppRoutes(controller, {
    'users/new': 'newUser',
    'users/personal': 'personalDetails',
    'rate': 'showRate'
  });
});

ContactManager.on('initialize:after', function(options){
  if (Backbone.history){
    Backbone.history.start();
  }
});
