import {sitemaps} from 'meteor/gadicohen:sitemaps';
import {Companies} from '/lib/collections';

export function configureSitemap() {
  sitemaps.add('/sitemap.xml', function () {
    let companies = Companies.find().fetch();
    let sitemap = companies.map(company => {
      return {
        page: `/${company.slug}`,
        lastmod: new Date()};
    });

    return sitemap;
  });
}
