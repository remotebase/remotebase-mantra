import React from 'react';
import classnames from 'classnames';

import ProfileForm from './profile_form';

const TabProfile = ({company, updateCompany, isActive}) => (
  <div className={classnames({hidden: !isActive})}>
    <div className="row">
      <div className="col-xs-12">
        <div className="dashboard">
          <ProfileForm company={company} updateCompany={updateCompany} />
        </div>
      </div>
    </div>
  </div>
);

export default TabProfile;
