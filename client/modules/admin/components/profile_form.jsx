import React from 'react';

import TwitterShareBtn from '/client/modules/core/containers/twitter_share_btn';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {successMessage: null};
  }

  handleSubmit() {
    const {company, updateCompany} = this.props;

    function makeArray(str) {
      let arr = str.split(',');

      return arr.map(elm => {
        return elm.trim();
      });
    }

    let companyDoc = {
      headquarters: this.refs.headquarters.value,
      short_description: this.refs.short_description.value,
      website: this.refs.website.value,
      founded_year: parseInt(this.refs.founded_year.value, 10),
      vc_funded: this.refs.vc_funded.checked,
      team_size: parseInt(this.refs.team_size.value, 10),
      non_remote_team_size: this.refs.non_remote_team_size.value,
      is_hiring: this.refs.is_hiring.checked,
      job_page: this.refs.job_page.value,
      salary_lower_bound: parseInt(this.refs.salary_lower_bound.value, 10),
      salary_upper_bound: parseInt(this.refs.salary_upper_bound.value, 10),
      num_retreats_per_year: parseInt(this.refs.num_retreats_per_year.value, 10),
      location_based_salary: this.refs.location_based_salary.checked,
      funded_vacation: this.refs.funded_vacation.checked,
      is_agency: this.refs.is_agency.checked,
      offers_equity: this.refs.offers_equity.checked,
      family_leave: this.refs.family_leave.checked,
      healthcare: this.refs.healthcare.checked,
      unlimited_vacation: this.refs.unlimited_vacation.checked,
      communication_methods: makeArray(this.refs.communication_methods.value),
      collaboration_methods: makeArray(this.refs.collaboration_methods.value),
      technologies: makeArray(this.refs.technologies.value)
    };

    updateCompany(company._id, companyDoc, () => {
      this.setState({successMessage: 'You successfully updated the company profile.'});
      window.scrollTo(0,0); // Scroll to top to show the message

      setTimeout(() => {
        this.setState({successMessage: null});
      }, 60000);
    });
  }

  render() {
    const {company} = this.props;

    return (
      <div>
        {
          this.state.successMessage ?
          <div className="row">
            <div className="col-xs-12">
              <div className="alert alert-success text-xs-center">
                {this.state.successMessage}
                <div>
                  <TwitterShareBtn dataUrl={`https://remotebase.io/${company.slug}`}
                    dataText={`I just updated ${company.name}'s profile on @remotebase. Do you #remotework? Join us there`} />
                </div>
              </div>
            </div>
          </div> : <span></span>
        }
        <div className="row">
          <div className="field">
            <div className="col-xs-12 col-sm-4">
              <label>
                Company name
              </label>
            </div>
            <div className="col-xs-12 col-sm-8">
              {company.name}
            </div>
          </div>

          <div className="field">
            <div className="col-xs-12 col-sm-4">
              <label>
                Headquarters
              </label>
            </div>
            <div className="col-xs-12 col-sm-8">
              <input type="text" defaultValue={company.headquarters} className="form-control" ref="headquarters" />
            </div>
          </div>

          <div className="field">
            <div className="col-xs-12 col-sm-4">
              <label>
                Short description
              </label>
            </div>
            <div className="col-xs-12 col-sm-8">
              <input type="text" defaultValue={company.short_description}
                className="form-control" ref="short_description" />
            </div>
          </div>

          <div className="field">
            <div className="col-xs-12 col-sm-4">
              <label>
                Website
              </label>
            </div>
            <div className="col-xs-12 col-sm-8">
              <input type="text" defaultValue={company.website}
                className="form-control" ref="website" />
            </div>
          </div>

          <div className="field">
            <div className="col-xs-12 col-sm-4">
              <label>
                Year founded
              </label>
            </div>
            <div className="col-xs-12 col-sm-8">
              <input type="text" defaultValue={company.founded_year}
                className="form-control" ref="founded_year" />
            </div>
          </div>

          <div className="field">
            <div className="col-xs-12 col-sm-4">
              <label>
                Team size
              </label>
            </div>
            <div className="col-xs-12 col-sm-8">
              <input type="text" defaultValue={company.team_size}
                className="form-control" ref="team_size" />
            </div>
          </div>

          <div className="field">
            <div className="col-xs-12 col-sm-4">
              <label>
                Non-remote team size
              </label>
            </div>
            <div className="col-xs-12 col-sm-8">
              <input type="text" defaultValue={company.non_remote_team_size}
                className="form-control" ref="non_remote_team_size" />
            </div>
          </div>

          <div className="field">
            <div className="col-xs-12 col-sm-4">
              <label>
                Are you an agency?
              </label>
            </div>
            <div className="col-xs-12 col-sm-8">
              <input type="checkbox" defaultChecked={company.is_agency}
                className="form-control" ref="is_agency" />
            </div>
          </div>

          <div className="field">
            <div className="col-xs-12 col-sm-4">
              <label>
                Retreats per year
              </label>
            </div>
            <div className="col-xs-12 col-sm-8">
              <input type="text" defaultValue={company.num_retreats_per_year}
                className="form-control" ref="num_retreats_per_year" />
            </div>
          </div>

          <div className="field">
            <div className="col-xs-12 col-sm-4">
              <label>
                Backed by venture capitals?
              </label>
            </div>
            <div className="col-xs-12 col-sm-8">
              <input type="checkbox" defaultChecked={company.vc_funded}
                className="form-control" ref="vc_funded" />
            </div>
          </div>

          <div className="field">
            <div className="col-xs-12 col-sm-4">
              <label>
                Currently hiring?
              </label>
            </div>
            <div className="col-xs-12 col-sm-8">
              <input type="checkbox" defaultChecked={company.is_hiring}
                className="form-control" ref="is_hiring" />
            </div>
          </div>

          <div className="field">
            <div className="col-xs-12 col-sm-4">
              <label>
                Job page
              </label>
            </div>
            <div className="col-xs-12 col-sm-8">
              <input type="text" defaultValue={company.job_page}
                className="form-control" ref="job_page" />
            </div>
          </div>

          <div className="field">
            <div className="col-xs-12">
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <label>
                    Approximate salary range
                  </label>
                </div>
                <div className="col-xs-5 col-sm-3">
                  <input type="text" defaultValue={company.salary_lower_bound}
                    className="form-control" ref="salary_lower_bound" />
                </div>
                <div className="col-xs-2 col-sm-1">
                  ~
                </div>
                <div className="col-xs-5 col-sm-3">
                  <input type="text" defaultValue={company.salary_upper_bound}
                    className="form-control" ref="salary_upper_bound" />
                </div>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="col-xs-12 col-sm-4">
              <label>
                Location based salary?
              </label>
            </div>
            <div className="col-xs-12 col-sm-8">
              <input type="checkbox" defaultChecked={company.location_based_salary}
                className="form-control" ref="location_based_salary" />
            </div>
          </div>

          <div className="field">
            <div className="col-xs-12 col-sm-4">
              <label>
                Funded vacation?
              </label>
            </div>
            <div className="col-xs-12 col-sm-8">
              <input type="checkbox" defaultChecked={company.funded_vacation}
                className="form-control" ref="funded_vacation" />
            </div>
          </div>

          <div className="field">
            <div className="col-xs-12 col-sm-4">
              <label>
                Self-managed timeoff (unlimited vacation)?
              </label>
            </div>
            <div className="col-xs-12 col-sm-8">
              <input type="checkbox" defaultChecked={company.unlimited_vacation}
                className="form-control" ref="unlimited_vacation" />
            </div>
          </div>

          <div className="field">
            <div className="col-xs-12 col-sm-4">
              <label>
                Offers equity?
              </label>
            </div>
            <div className="col-xs-12 col-sm-8">
              <input type="checkbox" defaultChecked={company.offers_equity}
                className="form-control" ref="offers_equity" />
            </div>
          </div>

          <div className="field">
            <div className="col-xs-12 col-sm-4">
              <label>
                Offers healthcare?
              </label>
            </div>
            <div className="col-xs-12 col-sm-8">
              <input type="checkbox" defaultChecked={company.healthcare}
                className="form-control" ref="healthcare" />
            </div>
          </div>

          <div className="field">
            <div className="col-xs-12 col-sm-4">
              <label>
                Offers family leave?
              </label>
            </div>
            <div className="col-xs-12 col-sm-8">
              <input type="checkbox" defaultChecked={company.family_leave}
                className="form-control" ref="family_leave" />
            </div>
          </div>

          <div className="field">
            <div className="col-xs-12 col-sm-4">
              <label>
                Communication methods
              </label>
            </div>
            <div className="col-xs-12 col-sm-8">
              <input type="text" defaultValue={company.communication_methods}
                className="form-control" placeholder="e.g. Slack, Skype, SMS" ref="communication_methods" />
            </div>
          </div>

          <div className="field">
            <div className="col-xs-12 col-sm-4">
              <label>
                Collaboration methods
              </label>
            </div>
            <div className="col-xs-12 col-sm-8">
              <input type="text" defaultValue={company.collaboration_methods}
                className="form-control" placeholder="e.g. Google Apps, Evernote" ref="collaboration_methods" />
            </div>
          </div>

          <div className="field">
            <div className="col-xs-12 col-sm-4">
              <label>
                Technologies
              </label>
            </div>
            <div className="col-xs-12 col-sm-8">
              <input type="text" defaultValue={company.technologies}
                className="form-control" placeholder="e.g. node.js, ruby, AWS" ref="technologies" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 text-sm-center">
            <button className="btn btn-lg btn-success" onClick={this.handleSubmit.bind(this)}>
              <i className="fa fa-save"></i>
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default ProfileForm;
