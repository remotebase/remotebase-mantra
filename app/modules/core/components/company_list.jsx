import React from 'react';
import CompanyItem from '../containers/company_item';
import NewsletterAd from '../containers/ad_newsletter';

const CompanyList = ({companies}) => {
  let sections = companies;

  // if (sections.length > 2) {
  //   sections.splice(2, 0, {
  //     _adSection: true,
  //     component: NewsletterAd
  //   });
  // }

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
