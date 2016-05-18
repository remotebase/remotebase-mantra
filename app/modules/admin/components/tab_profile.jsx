import React from 'react';

import ProfileForm from './profile_form';

const TabProfile = ({company, updateCompany}) => (
  <div className="row">
    <div className="col-xs-12">
      <div className="dashboard">
        <ProfileForm company={company} updateCompany={updateCompany} />
      </div>
    </div>
  </div>
);

export default TabProfile;
