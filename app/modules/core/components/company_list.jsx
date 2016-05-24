import React from 'react';

import CompanyItem from '../containers/company_item';
import NewsletterAd from '../containers/ad_newsletter';

class CompanyList extends React.Component {
  render() {
    const {companies} = this.props;

    let sections = companies;

    if (sections.length > 6) {
      sections.splice(6, 0, {
        _adSection: true,
        component: NewsletterAd
      });
    }

    if (sections.length > 3 && sections.length <= 6) {
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
}

export default CompanyList;
