import {CronJob} from 'cron';
import {Actions} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import moment from 'moment';
import {digestActions} from './digest';
import {buildEmail} from './factories/email';
import {Email} from 'meteor/email';

function sendAlertEmails() {
  console.log('Sending alert emails');
  let users = Meteor.users.find({subscribedCompanyIds: {$gt: []}, 'emails.verified': true});
  users.forEach(user => {
    let actions = Actions.find({
      companyId: {$in: user.subscribedCompanyIds},
      type: 'startHiring',
      createdAt: {
        $gte: moment().subtract(7, 'days').toDate(),
        $lte: new Date()
      }
    });

    let actionDigest = digestActions(actions);
    let emailObj = buildEmail(actionDigest);

    Email.send({
      from: 'hello@remotebase.io',
      to: user.emails[0],
      subject: emailObj.subject,
      text: emailObj.text,
      html: emailObj.html
    });
  });
}

let notificationJob = new CronJob({
  cronTime: '0 8 * * 1', // Monday 8:00 AM
  // cronTime: '* * * * *', // for debug
  onTick: Meteor.bindEnvironment(sendAlertEmails),
  start: false,
  timeZone: 'America/New_York'
});

notificationJob.start();
