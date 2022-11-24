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

  const handleClose = (event) => {
    toggleDrawer(false);

    let id = 0;
    const itemText = event.target.innerText;
    if (itemText === "WHAT IT IS") {
      id = 1;
    } else if (itemText === "FREQUENCY") {
      id = 2;
    } else if (itemText === "REVIEWS") {
      id = 3;
    } else if (itemText === "TEAMWORK") {
      id = 4;
    } else if (itemText === "FAQ") {
      id = 5;
    }
    props.setBurgerIconToFalseAgain(id);
  }

  const list = () => (
    <div
      // className={clsx(classes.list, {
      //   [classes.fullList]: false,
      // })}
      role="presentation"
      onClick={handleClose}
      onKeyDown={handleClose}
    >
      <List>
        {["WHAT IT IS", "FREQUENCY", "REVIEWS", "TEAMWORK", "FAQ"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor='left'
          open={open}
          onClose={handleClose}        
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
