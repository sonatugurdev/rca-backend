import React from "react";
import { ShitFace } from "../svgs/ShitFace";
import { TickMark } from "../svgs/TickMark";

export function FrequencyCard(props) {

  const displayShitFaceContainer = () => {
    if (props.frequencyType === 'aficionado') {
      return (
        <div className="shitFaceContainer">
        <div style={{position: 'absolute', top: '5%', left: '32%'}}>
        <ShitFace />
        </div>
        <div style={{position: 'absolute', bottom: '5%', left: '5%'}}>

        <ShitFace />
        </div>
        <div style={{position: 'absolute', bottom: '5%', right: '5%'}}>

        <ShitFace />
        </div>
      </div>
      )
    } else if (props.frequencyType === 'apprentice'){
      return (
        <div className="shitFaceContainer">
        <div style={{position: 'absolute', bottom: '15%', left: '19%'}}>
        <ShitFace />
        </div>
        <div style={{position: 'absolute', top: '15%', right: '13%'}}>
        <ShitFace width="18px" height="18px"/>
        </div>
      </div>
      )
    } else {
      return (
        <div className="shitFaceContainer">
        <div style={{position: 'absolute', top: '32%', left: '32%'}}>
        <ShitFace />
        </div>
      </div>
      )
    }
  }

  return (
    <div className={props.selected ? "frequencyCardSelected" : "frequencyCard"}>
      {displayShitFaceContainer()}

      <div className="frequencycard-text">
        <div className="frequencycard-text-1">
          {props.frequencyType === 'aficionado' && "Real Clean Aficionado"}
          {props.frequencyType === 'apprentice' && "Real Clean Apprentice"}
          {props.frequencyType === 'associate' && "Real Clean Associate"}
        </div>

        <div className="frequencycard-text-list">
          <div>• Delivered every month</div>
          <div>• No Cancellation Fee and Free Shipping</div>
        </div>
      </div>
      {props.selected && (
        <div className="frequencycard-tick">
          <TickMark />
        </div>
      )}
    </div>
  );
}
