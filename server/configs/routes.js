import {sitemaps} from 'meteor/gadicohen:sitemaps';
import {WebApp} from 'meteor/webapp';
import {Companies} from '/lib/collections';

// For debug
import {Actions} from '/lib/collections';
import {digestActions} from '/server/modules/notification/digest';
import {buildEmail} from '/server/modules/notification/factories/email';

import {compileTemplate} from '../modules/notification/factories/email';

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
    let actions = Actions.find().fetch();
    let actionDigest = digestActions(actions);
    let emailObj = buildEmail(actionDigest);
    res.end(emailObj.html);
  });
}
