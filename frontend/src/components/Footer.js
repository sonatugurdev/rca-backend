import React from "react";

export function Footer(props) {
  return (
    <div className="App-footer">
      <p className="contact-us">
        Contact us at: <span className="underlined">hello@rca.com</span>
      </p>
      <div className="divider" />
      <div className="support-careers-privacy-terms">
        <span>Support</span>
        <span>Careers</span>
        <span>Privacy</span>
        <span>Terms</span>
      </div>
      <img
        src={process.env.PUBLIC_URL + "/assets/footerSocials.png"}
        className="footer-socials"
      />
      <div className="privacy-policy">
        <span>Terms of Service</span>
      </div>
      <div className="rights-reserved">
        © 2022 Real Clean Associations. All rights reserved.
      </div>
    </div>
  );
}
