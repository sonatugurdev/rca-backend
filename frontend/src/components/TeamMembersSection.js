import React from "react";

export function TeamMembersSection(props) {
  return (
    <div className="App-section6">
      <div className="section-divider" />
      <div className="section6-title">Literally our team</div>
      <img src={require("../pngs/AriProfile.png")} alt="sonatprofile" />

      <div className="profile-pictures">Ari Newman</div>
      <div className="profile-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </div>
      <img src={require("../pngs/SonatProfile.png")} alt="sonatprofile" />
      <div className="profile-pictures">Sonat Ugur</div>
      <div className="profile-description">
        Remembering myself as a 13-year-old boy missing the school bus every
        other day because of my notoriously irregular poop schedule, the idea of
        helping people in either the comfort of their home or the most unxpected
        occasions clicked with me deeply.{" "}
      </div>
      <img src={require("../pngs/DerinProfile.png")} alt="sonatprofile" />
      <div className="profile-pictures">Derin Kivaner</div>
      <div className="profile-description"> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </div>
    </div>
  );
}
