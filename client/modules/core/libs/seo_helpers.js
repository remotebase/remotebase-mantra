import {DocHead} from 'meteor/kadira:dochead';
import {Meteor} from 'meteor/meteor';

export function getDescription(company) {
  let overviewPhrase = `${company.name} is a ${company.getDistrbituedPercent()}% remote team of ${company.team_size} people. `;
  let hiringPhrase = company.is_hiring ? 'They are currently hiring. ' : '';
  let ctaPhrase = `Check out their profile and see available remote job positions.`;

  return `${overviewPhrase}${hiringPhrase}${ctaPhrase}`;
}

export function getTwitterDescription(company) {
  return `${company.name} is ${company.getDistrbituedPercent()}% remote team of ${company.team_size} people. See their RemoteBase profile.`;
}

export function setCompanyMeta(company) {
  let companyName = company.name;
  let title = `${companyName} for Remote Jobs | RemoteBase`;
  let logoUrl = Meteor.absoluteUrl(company.logo_url.replace(/^\//, ''));
  let description = getDescription(company);
  let twitterDescription = getTwitterDescription(company);

  // reset any dynamically set tags in <head> previously
  DocHead.removeDocHeadAddedTags();
  DocHead.setTitle(title);
  DocHead.addMeta({name: 'description', content: description});
  DocHead.addMeta({name: 'twitter:card', content: 'summary'});
  DocHead.addMeta({name: 'twitter:site', content: '@remotebase'});
  DocHead.addMeta({name: 'twitter:title', content: title});
  DocHead.addMeta({name: 'twitter:image', content: logoUrl});
  DocHead.addMeta({name: 'twitter:description', content: twitterDescription});
  DocHead.addMeta({property: 'og:title', content: title});
  DocHead.addMeta({property: 'og:site_name', content: 'RemoteBase'});
  DocHead.addMeta({property: 'og:image', content: logoUrl});
  DocHead.addMeta({property: 'og:description', content: description});
}
