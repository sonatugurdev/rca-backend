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
import { FrequencyTypes } from '../helpers/utils'
import { get } from 'lodash';
import { AppLogo } from "../svgs/AppLogo";
import { ShitFace } from "../svgs/ShitFace";

function getModalStyle() {
  const top = 25;

  return {
    top: `${top}%`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '75%',
    margin: "0 4%",
    border: 'none',
    borderRadius: '6px',
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
  button: {
    textTransform: "none",
    background: "black",
    color: "white",
    height: "54px",
    width: "185px",
    marginBottom: "35px",
  },
}));

export function GetStartedModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [openModal, setOpenModal] = React.useState(false);
  const [state, setState] = React.useState({
    frequencyType: props.frequencyType,
    isLoading: false,
    shouldButtonDisabled: true,
    success: false,
  });

  const nameFieldRef = React.createRef();
  const emailFieldRef = React.createRef();

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChangeTextField = (e) => {
    const emailVal = get(emailFieldRef, 'current.value');
    const nameVal = get(nameFieldRef, 'current.value');
    
    console.log(emailVal, nameVal, !state.isLoading, 'SSSSS')
    if (emailVal &&
      nameVal && 
       !state.isLoading) {
        setState((prevState) => {
          return {
            ...prevState,
            shouldButtonDisabled: false,
          };
        });
       } else {
        setState((prevState) => {
          return {
            ...prevState,
            shouldButtonDisabled: true,
          };
        });
       }
  };

  const handleCheckBoxClicks = (event) => {
    Object.keys(state).map((item) => {
      if (event.target.name === FrequencyTypes.aficionado) {
        setState((prevState) => {
          return {
            ...prevState,
            frequencyType: FrequencyTypes.aficionado
          };
        });
      } else if (event.target.name === FrequencyTypes.apprentice) {
        setState((prevState) => {
          return {
            ...prevState,
            frequencyType: FrequencyTypes.apprentice
          };
        });
      } else {
        setState((prevState) => {
          return {
            ...prevState,
            frequencyType: FrequencyTypes.associate
          };
        });
      }
    });
  };

  const handleSubmit = async () => {
    // submitform
    const name = nameFieldRef.current.value;
    const email = emailFieldRef.current.value;

    const userData = {
      name,
      email,
      subscriptionType: state.frequencyType,
    };
    setState((prevState) => {
      return {
        ...prevState,
        isLoading: true,
      };
    });

    axios
      .post(`${window.location.href}api/users`, userData)
      .then((data) => {
        setTimeout(() => {
          setState((prevState) => {
            return {
              ...prevState,
              isLoading: false,
              success: true,
            };
          });
        }, 2000);
      })
      .catch((err) => {
        setTimeout(() => {
          setState((prevState) => {
            return {
              ...prevState,
              isLoading: false,
              success: true,
              failed: true,
            };
          });
        }, 2000);
      });
  };

  React.useEffect(() => {
    if (props.shouldOpen) {
      setOpenModal(true);
    }
  }, [props.shouldOpen]);


  React.useEffect(() => {
    setState((prevState) => {
      return {
        ...prevState,
        frequencyType: props.frequencyType
      };
    });
  }, [props.frequencyType])

  const handleButtonDisabled = () => {

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
                  checked={state.frequencyType === FrequencyTypes.aficionado}
                  onChange={handleCheckBoxClicks}
                  name={FrequencyTypes.aficionado}
                  color="primary"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              }
              label="Aficionado"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={state.frequencyType === FrequencyTypes.apprentice}
                  onChange={handleCheckBoxClicks}
                  name={FrequencyTypes.apprentice}
                  color="primary"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              }
              label="Apprentice"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.frequencyType === FrequencyTypes.associate}
                  onChange={handleCheckBoxClicks}
                  name={FrequencyTypes.associate}
                  color="primary"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              }
              label="Associate"
            />
          </div>
          <div className={classes.wrapper}>
            <Button variant="contained" onClick={handleSubmit} disabled={state.shouldButtonDisabled} className={classes.button}>
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

  const successScreen = (
    <Fade in={openModal}>
      <div style={modalStyle} className={classes.paper}>
        <div>
            <AppLogo width="100px" height="100px"/>
          </div>
        <div className="cleanestBumInTown">
        Get ready to have the cleanest bum in town.
        </div>

        <div className="weWillBeInTouch">
        We’ll be in touch with your order details shortly!
        </div>
        <ShitFace width="25px" height="25px"/>
      </div>
    </Fade>
  );

  return (
    <div>
      <Modal
        open={openModal}
        style={{
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
        }}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {!state.success ? body : successScreen}
      </Modal>
    </div>
  );
}
