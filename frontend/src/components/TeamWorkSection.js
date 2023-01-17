import React from "react";
import { CommunityOrientedIcon } from "../svgs/CommunityOrientedIcon";
import { CleanAssGuarantee } from "../svgs/CleanAssGuarantee";
import { Biodegradable } from "../svgs/Biodegradable";
import { CancelAnyTime } from "../svgs/CancelAnyTime";
import { FreeShipping } from "../svgs/Freeshipping";
import { CustomerSupport } from "../svgs/CustomerSupport";

export function TeamWorkSection(props) {
  return (
    <div className="App-section5">
          <div className="section-divider" />
          <p className="section5-title">TeamWork</p>
          <p className="section5-body1">
            Here are some reason why you can trust our product
          </p>
          <div className="teamwok-tiles">
            <div className="teamwork-tiles-each-row">
              <div>
                <CommunityOrientedIcon />
                <div className="section5-body-text">Community Oriented</div>
              </div>
              <div>
                <CleanAssGuarantee />
                <div className="section5-body-text">Clean Ass Guarentee</div>
              </div>
            </div>
            <div className="teamwork-tiles-each-row">
              <div>
                <Biodegradable />
                <div className="section5-body-text">Biodegradable</div>
              </div>
              <div>
                <CancelAnyTime />
                <div className="section5-body-text">Cancel Anytime</div>
              </div>
            </div>
            <div className="teamwork-tiles-each-row">
              <div>
                <FreeShipping />
                <div className="section5-body-text">Free Shipping</div>
              </div>
              <div>
                <CustomerSupport />
                <div className="section5-body-text">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
  );
}
