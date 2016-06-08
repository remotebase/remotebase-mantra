import {Meteor} from 'meteor/meteor';
import {Companies} from '/lib/collections';
import juice from 'juice';
import Handlebars from 'handlebars';

export function getCompanies() {
  let companies = Companies.find({name: {$in: ['Ghost', 'Bithive', 'Aha!', 'CleverTech']}}, {limit: 4}).fetch();

  companies.map(company => {
    let logoRelativeUrl = company.getLogoUrl().replace(/^\//, '');
    company.logoAbsoluteUrl = Meteor.absoluteUrl(logoRelativeUrl);
  });

  return companies;
}

export function compileTemplate() {
  // let content = fs.readFileSync('/server/modules/digest/private/digest.html', 'utf-8');
  let companies = getCompanies();

  let data = {
    companies,
    logoUrl: Meteor.absoluteUrl('images/logo.png')
  };

  let source = Assets.getText('email/digest.html');
  let template = Handlebars.compile(source, companies);
  let html = template(data);
  let inlined = juice(html);

  return inlined;
}
