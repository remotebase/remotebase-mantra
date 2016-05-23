import React from 'react';
import CompanyItem from '../containers/company_item';
import NewsletterAd from '../containers/ad_newsletter';

const CompanyList = ({companies}) => {
  let sections = companies;

  if (sections.length > 3) {
    sections.splice(3, 0, {
      _adSection: true,
      component: NewsletterAd
    });
  }

  return (
    <ul className="list-unstyled row company-view-list">
      {
        sections.map((section, idx) => {
          if (section._adSection) {
            return <section.component key={idx} />;
          }

          return <CompanyItem company={section}
            key={idx} />;
        })
      }
    </ul>
  );
}

export default CompanyList;
