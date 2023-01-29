import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
// import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Backdrop from "@material-ui/core/Backdrop";
import { PlusIcon } from "./../svgs/PlusIcon";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export function SecondaryMenu(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (props.shouldOpen) {
      setOpen(true);
    }
  }, [props.shouldOpen])

  const toggleDrawer = (open) => {
    setOpen(open);
  };

  const handleClose = (index) => {
    toggleDrawer(false);
    let id = 0;
    if (index > -1) {
      if (index === 0) {
        id = 1;
      } else if (index === 1) {
        id = 2;
      } else if (index === 2) {
        id = 3;
      } else if (index === 3) {
        id = 4;
      } else if (index === 4) {
        id = 5;
      }
    }
    props.setBurgerIconToFalseAgain(id);
  }

  const list = () => (
    <div
      // className={clsx(classes.list, {
      //   [classes.fullList]: false,
      // })}
      role="presentation"
    >
      <List>
        {["WHAT IT IS", "FREQUENCY", "REVIEWS", "TEAMWORK", "FAQ"].map((text, index) => (
          <div key={index} onClick={() => {handleClose(index)}}>
            <ListItem button>
              <ListItemText primary={text} className="menu-items"/>
              <PlusIcon width="23" height="23"/>
            </ListItem>
            <div className="menu-item-divider" />
          </div>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor='left'
          open={open}
          onClose={() => {handleClose(-1)}}        
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          closeAfterTransition
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
