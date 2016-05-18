export default {
  navToCompany({FlowRouter}, companySlug) {
    FlowRouter.go('company', {companySlug});
  },

  navToHome({FlowRouter}) {
    FlowRouter.go('home');
  },

  updateCompany({Meteor}, companyId, companyDoc, done) {
    Meteor.call('companies.updateCompany', companyId, companyDoc, done);
  }
};
