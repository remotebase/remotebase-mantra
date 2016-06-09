import React from 'react';

const SignInDialogue = ({company, closeSignInDialogue, loginWithTwitter, subscribeToCompany}) => {
  function handleCloseDialogue(e) {
    e.preventDefault();

    closeSignInDialogue();
  }

  function handleTwitterLogin() {
    loginWithTwitter(function (err) {
      if (err) {
        return console.log(err);
      }

      closeSignInDialogue();
      subscribeToCompany(company._id);
    });
  }

  return (
    <div className="sign-in-dialogue">
      <p>
        Sign in to subscribe to <b>{company.name}</b> and <b>190+</b> other remote companies.
      </p>
      <p>
        Get notified when <b>{company.name}</b> updates profile or posts a job.
      </p>
      <div>
        <button className="btn rb-btn-primary rb-btn-twitter"
          onClick={handleTwitterLogin.bind(this)}>
          <i className="fa fa-twitter"></i>
          Sign in with Twitter
        </button>
        <a href="#"
          onClick={handleCloseDialogue}
          className="go-back">Go back</a>
      </div>
    </div>
  );
};

export default SignInDialogue;
