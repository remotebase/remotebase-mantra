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
  let inlinedHtml = juice(html);

  return {
    html: inlinedHtml,
    text: htmlToText.fromString(inlinedHtml, {
      tables: [ '.body-wrap', '.footer-wrap' ]
    }),
    subject: `RemoteBase | ${pluralize('alert', digest.length, true)}`
  };
}
