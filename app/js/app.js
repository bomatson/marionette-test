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
      controller = new ContactManager.Controller({
        router: router,
        mainRegion: this.mainRegion
      });

  router.processAppRoutes(controller, {
    'users/new': 'newUser',
    'rate': 'showRate'
  });
});

ContactManager.on('initialize:after', function(options){
  if (Backbone.history){
    Backbone.history.start();
  }
});
