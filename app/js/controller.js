BorrowerFunnel.Controller = Marionette.Controller.extend({
  initialize: function(options) {
    this._router = options.router;
    this._mainRegion = options.mainRegion;
    this._user = options.user;
  },

  showRate: function(response) {
    var rateView = new BorrowerFunnel.Views.Rate({
      model: new BorrowerFunnel.Models.Rate({
        rate: response.rate,
        firstName: response.first_name,
        lastName: response.last_name,
        middleInitial: response.middle_initial,
        loanPurpose: response.loan_purpose,
        loanAmount: response.loan_amount,
        salary: response.salary,
        creditScore: response.credit_score
      })
    });

    BorrowerFunnel.mainRegion.show(rateView);

    this._router.navigate('rate');
  },

  personalDetails: function() {
    var personalDetails = new BorrowerFunnel.Views.PersonalDetails({
      model: this._user
    })

    this.listenTo(BorrowerFunnel.vent, 'rate:submitted', function(response) {
      this.showRate(response);
    });

    BorrowerFunnel.mainRegion.show(personalDetails);
    this._router.navigate('users/personal');
  },

  newUser: function() {
    var newUserForm = new BorrowerFunnel.Views.UserForm({
      model: this._user
    });

    this.listenTo(newUserForm, 'user:submitted', function() {
      this.personalDetails();
    });

    BorrowerFunnel.mainRegion.show(newUserForm);

    this._router.navigate('users/new');
  }
});
