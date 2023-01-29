import React from "react";
import { FrequencyCard } from "../components/FrequencyCard";
import Button from "@material-ui/core/Button";
import { FrequencyTypes } from "../helpers/utils";

export function ChooseFrequencySection(props) {
  return (
    <div className="App-section3">
      <div className="section-divider" />
      <p className="section3-title">Choose your frequency</p>
      <p className="section3-body1">
        Select from the following subscription choices:
      </p>
      <div onClick={() => props.handleClickAficionado()}>
        <FrequencyCard
          frequencyType={FrequencyTypes.aficionado}
          selected={props.frequencyType === FrequencyTypes.aficionado}
        />
      </div>
      <div onClick={() => props.handleClickApprentice()}>
        <FrequencyCard
          frequencyType={FrequencyTypes.apprentice}
          selected={props.frequencyType === FrequencyTypes.apprentice}
        />
      </div>
      <div onClick={() => props.handleClickAssociate()}>
        <FrequencyCard
          frequencyType={FrequencyTypes.associate}
          selected={props.frequencyType === FrequencyTypes.associate}
        />
      </div>

      <div className="Section3-packaging-mock">Packaging Mock</div>
      <Button
        className={props.classes.root}
        variant="contained"
        onClick={props.handleGetStarted}
      >
        Subscribe
      </Button>
    </div>
  );
}
