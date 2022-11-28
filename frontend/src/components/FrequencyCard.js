import React from "react";
import { ShitFace } from "../svgs/ShitFace";
import { TickMark } from "../svgs/TickMark";

export function FrequencyCard(props) {
  return (
    <div className={props.selected ? "frequencyCardSelected" : "frequencyCard"}>
      <div className="shitFaceContainer">
        <ShitFace />
        {props.frequencyType === 'apprentice' && <ShitFace />}
        {props.frequencyType === 'aficionado' && <React.Fragment><ShitFace /><ShitFace /></React.Fragment>}

      </div>
      <div className="frequencycard-text">
        <div className="frequencycard-text-1">
          {props.frequencyType === 'aficionado' && "Real Clean Aficionado"}
          {props.frequencyType === 'apprentice' && "Real Clean Apprentice"}
          {props.frequencyType === 'associate' && "Real Clean Associate"}
        </div>

        <ul className="frequencycard-text-list">
          <li>Delivered every month</li>
          <li>No Cancellation Fee and Free Shipping</li>
        </ul>
      </div>
      {props.selected && (
        <div className="frequencycard-tick">
          <TickMark />
        </div>
      )}
    </div>
  );
}
