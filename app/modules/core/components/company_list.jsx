import React from 'react';
import CompanyItem from '../containers/company_item';
import NewsletterAd from '../containers/ad_newsletter';

const CompanyList = ({companies}) => {
  let sections = companies;

  if (sections.length > 2) {
    sections.splice(2, 0, {
      _adSection: true,
      component: NewsletterAd
    });
  }

  return (
    <ul className="list-unstyled row">
      {
        sections.map((section) => {
          if (section._adSection) {
            return <section.component/>;
          }

          return <CompanyItem company={section}
            key={section._id} />;
        })
      }
    </ul>
  );
}

export default CompanyList;
