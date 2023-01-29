import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { PlusIcon } from "./../svgs/PlusIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

export function FAQ(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="App-section7">
      <div className="section-divider" />
      <div className="section7-title">FAQ</div>
      <div className={classes.root}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<PlusIcon />}>
            <div className="FAQ-summary">
              <span style={{ marginRight: "10px" }}>01</span>How do I get
              started with RCA?
            </div>
          </AccordionSummary>
          <AccordionDetails className="FAQ-details">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<PlusIcon />}
            aria-controls="panel1a-content"
          >
            <div className="FAQ-summary">
              <span style={{ marginRight: "10px" }}>02</span>How do I get
              started with RCA?
            </div>
          </AccordionSummary>
          <AccordionDetails className="FAQ-details">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<PlusIcon />}
            aria-controls="panel1a-content"
          >
            <div className="FAQ-summary">
              <span style={{ marginRight: "10px" }}>03</span>How do I get
              started with RCA?
            </div>
          </AccordionSummary>
          <AccordionDetails className="FAQ-details">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<PlusIcon />}
            aria-controls="panel1a-content"
          >
            <div className="FAQ-summary">
              <span style={{ marginRight: "10px" }}>04</span>How do I get
              started with RCA?
            </div>
          </AccordionSummary>
          <AccordionDetails className="FAQ-details">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
