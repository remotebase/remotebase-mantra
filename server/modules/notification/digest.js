import {Meteor} from 'meteor/meteor';
import {Companies} from '/lib/collections';

export function digestActions(actions) {
  let digest = [];

  function dispatch(action) {
    switch (action.type) {
      case 'startHiring':
        for (var i = 0; i < digest.length; i++) {
          let summary = digest[i];
          if (summary.companyId === action.companyId) {
            if (action.type === 'startHiring') {
              summary.startHiring = true;
            }
            return;
          }
        }

        // If for loop terminates without returning, no match. Create one.
        let company = Companies.findOne(action.companyId);
        digest.push({
          companyId: action.companyId,
          companyName: company.name,
          companyLogoUrl: Meteor.absoluteUrl(company.logo_url.replace(/^\//g, '')),
          profileUrl: Meteor.absoluteUrl(company.slug),
          startHiring: true
        });
    }
  }

  actions.forEach(dispatch);

  return digest;
}
