var BorrowerFunnel = new Marionette.Application({
  Models: {},
  Collections: {},
  Views: {}
});

BorrowerFunnel.addRegions({
  mainRegion: '.main-container'
});

BorrowerFunnel.addInitializer(function(data) {
  var router = new BorrowerFunnel.Router(),
      user = new BorrowerFunnel.Models.User(),
      controller = new BorrowerFunnel.Controller({
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

BorrowerFunnel.on('initialize:after', function(options){
  if (Backbone.history){
    Backbone.history.start();
  }
});
