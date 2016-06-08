import {Accounts} from 'meteor/accounts-base';

export function configureVerification() {
  Accounts.onEmailVerificationLink(function (token) {
    Accounts.verifyEmail(token);
  });
}
