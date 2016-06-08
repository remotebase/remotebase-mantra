import {sitemaps} from 'meteor/gadicohen:sitemaps';
import {WebApp} from 'meteor/webapp';
import {Companies} from '/lib/collections';

import {compileTemplate} from '../modules/digest/builder';

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

export function configureDebugRoutes() {
  WebApp.connectHandlers.use('/debug-digest', function (req, res, next) {
    let template = compileTemplate();
    res.end(template);
  });
}
