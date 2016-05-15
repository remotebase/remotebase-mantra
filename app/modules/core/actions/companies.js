export default {
  navToCompany({FlowRouter}, companySlug) {
    FlowRouter.go('company', {companySlug});
  },

  navToHome({FlowRouter}) {
    FlowRouter.go('home');
  }
};
