import {sitemaps} from 'meteor/gadicohen:sitemaps';
import {Companies} from '/lib/collections';

export function configureSitemap() {
  sitemaps.add('/sitemap.xml', function () {
    let companies = Companies.find({hidden: {$ne: true}}).fetch();
    let sitemap = companies.map(company => {
      return {
        page: `/${company.slug}`,
        lastmod: company.updatedAt || company.createdAt
      };
    });

    sitemap.push(
      {page: '/', lastmod: new Date()}
    );

    return sitemap;
  });
}
