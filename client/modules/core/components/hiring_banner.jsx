import React from 'react';

const HiringBanner = ({company}) => {
  if (!company.is_hiring) {
    return (
      <div className="banner not-hiring-banner">
        No open position
      </div>
    );
  }

  return (
    <div className="banner hiring-banner">
      {company.name} is hiring
    </div>
  );
};

export default HiringBanner;
