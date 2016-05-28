import React from 'react';

class EmailChangeForm extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          Change email preferences
        </div>
        <div className="card-block">
          <form>
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <label>
                  Email
                  <input type="text" className="form-control"/>
                </label>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12">
                <label>
                  <input type="checkbox" /> Receive email if there's an important update in RemoteBase
                </label>
              </div>
            </div>

            <input type="submit" value="Change" className="mt10 btn btn-success" />
          </form>
        </div>
      </div>
    );
  }
}

export default EmailChangeForm;
