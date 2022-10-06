import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";

function getModalStyle() {
  const top = 25;

  return {
    top: `${top}%`,
    margin: "0 auto",
    // transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
}));

export function GetStartedModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [openModal, setOpenModal] = React.useState(false);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
    checkedC: false,
    isLoading: false,
    button: false
  });
  const nameFieldRef = React.createRef();
  const emailFieldRef = React.createRef();

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChangeTextField = (e) => {
    console.log(e.target.value);
  };

  const handleCheckBoxClicks = (event) => {
    Object.keys(state).map((item) => {
      if (event.target.name === "Aficionado") {
        setState((prevState) => {
          return {
            ...prevState,
            checkedA: true,
            checkedB: false,
            checkedC: false,
          };
        });
      } else if (event.target.name === "Associate") {
        setState((prevState) => {
          return {
            ...prevState,
            checkedA: false,
            checkedB: true,
            checkedC: false,
          };
        });
      } else {
        setState((prevState) => {
          return {
            ...prevState,
            checkedA: false,
            checkedB: false,
            checkedC: true,
          };
        });
      }
    });
  };

  const getSubscriptionType = () => {
    if (state.checkedA) {
      return "Aficionado";
    } else if (state.checkedB) {
      return "Associate";
    } else {
      return "Apprentice";
    }
  };

  const handleSubmit = () => {
    // submitform
    const name = nameFieldRef.current.value;
    const email = emailFieldRef.current.value;
    const subscriptionType = getSubscriptionType();

    const userData = {
      name,
      email,
      subscriptionType,
    };
    console.log(userData);
    setState((prevState) => {
      return {
        ...prevState,
        isLoading: true,
      };
    });
    axios
      .post("http://localhost:5000/api/v1/users", userData)
      .then((data) => {
        console.log(data);
        setState((prevState) => {
          return {
            ...prevState,
            isLoading: false,
          };
        });
        setOpenModal(false);
      })
      .catch((err) => {
        setState((prevState) => {
          return {
            ...prevState,
            isLoading: false,
          };
        });
        setOpenModal(false);
        alert("Something went wrong. Please try again!");
      });
  };

  React.useEffect(() => {
    if (props.shouldOpen) {
      setOpenModal(true);
    }
  }, [props.shouldOpen]);

  const handleButtonDisabled = () => {
    console.log(emailFieldRef.current.value, nameFieldRef.current.value, !state.isLoading)
    if (emailFieldRef.current.value &&
       nameFieldRef.current.value && 
       !state.isLoading) {
         return false;
       } else {
         return true;
       }
  }

  const body = (
    <Fade in={openModal}>
      <div style={modalStyle} className={classes.paper}>
        <form className={classes.root}>
          <div>
            <b>Name</b>
          </div>
          <TextField
            id="outlined-required"
            label="Required"
            placeholder="Full Name"
            variant="outlined"
            onChange={handleChangeTextField}
            inputProps={{ ref: nameFieldRef }}
          />
          <div>
            <b>Email</b>
          </div>
          <TextField
            id="outlined-required"
            label="Required"
            placeholder="Email"
            onChange={handleChangeTextField}
            variant="outlined"
            inputProps={{ ref: emailFieldRef }}
          />
          <div>
            <p>
              <b>Subscription box frequency</b>
            </p>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={handleCheckBoxClicks}
                  name="Aficionado"
                  color="primary"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              }
              label="Aficionado"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedB}
                  onChange={handleCheckBoxClicks}
                  name="Associate"
                  color="primary"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              }
              label="Associate"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedC}
                  onChange={handleCheckBoxClicks}
                  name="Apprentice"
                  color="primary"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              }
              label="Apprentice"
            />
          </div>
          <div className={classes.wrapper}>
            <Button variant="contained" onClick={handleSubmit} disabled={handleButtonDisabled}>
              Subscribe
            </Button>
            {state.isLoading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
        </form>
      </div>
    </Fade>
  );

  return (
    <div>
      <Modal
        open={openModal}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {body}
      </Modal>
    </div>
  );
}
