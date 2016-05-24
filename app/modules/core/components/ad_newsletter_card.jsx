import React from 'react';
import {OverlayTrigger, Popover, Button} from 'react-bootstrap';

let popover = (
  <Popover placement="bottom" title="RemoteBase weekly">
    <div className="row">
      <form action="//remotebase.us13.list-manage.com/subscribe/post?u=7435b0b28de119d328c0583bb&amp;id=d21d3fc1f9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
        <div className="col-xs-12 cta">
          Get weekly digests of best remote companies and jobs.
        </div>
        <div className="col-xs-12">
          <input type="text" name="NAME" className="form-control" placeholder="Name" required />
        </div>
        <div className="col-xs-12">
          <input type="email" name="EMAIL" className="form-control" placeholder="Email" required />
        </div>
        <div className="col-xs-12">
          <input type="submit" value="Subscribe" className="btn signup-btn" />
        </div>

        {/*real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
        <div style={{position: 'absolute', left: '-5000px', ariaHidden:'true'}}>
          <input type="text" name="b_7435b0b28de119d328c0583bb_d21d3fc1f9" tabIndex="-1" value="" />
        </div>
      </form>
    </div>
  </Popover>
);

const AdNewsLetterCard = () => (
  <li>
    <div className="company-item-container">
      <div className="company-item ad-newsletter">
        <p>
          <span className="fa-stack fa-lg newsletter-icon">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-newspaper-o fa-stack-1x fa-inverse"></i>
          </span>
          <span className="title">
            RemoteBase weekly
          </span>
        </p>
        <p>
          Best remote companies and jobs in your inbox
        </p>
        <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popover}>
          <Button bsStyle="success" className="btn-md">Subscribe</Button>
        </OverlayTrigger>
      </div>
    </div>
  </li>
);

export default AdNewsLetterCard;
