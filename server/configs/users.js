import {Accounts} from 'meteor/accounts-base';

export function configureEmailTemplates() {
  Accounts.emailTemplates.verifyEmail.from = 'RemoteBase <hello@remotebase.io>';
  Accounts.emailTemplates.verifyEmail.subject = function () {
    return 'Verify email address for RemoteBase';
  };
}
