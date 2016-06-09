import {Meteor} from 'meteor/meteor';
import juice from 'juice';
import Handlebars from 'handlebars';
import htmlToText from 'html-to-text';
import pluralize from 'pluralize';

export function buildEmail(digest) {
  let data = {
    digest,
    logoUrl: Meteor.absoluteUrl('images/logo.png')
  };

  let source = Assets.getText('email/notification.html');
  let template = Handlebars.compile(source);
  let html = template(data);

  return {
    html: juice(html),
    text: htmlToText(html),
    subject: `RemoteBase | ${pluralize('alert', digest.length, true)}`
  };
}
