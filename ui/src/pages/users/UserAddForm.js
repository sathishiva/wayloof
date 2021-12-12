import React, { useReducer } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function UserAddForm({ message, onUpdateMessage }) {
  const [open, setOpen] = React.useState(false);
  // User State Management
  const initialUserState = {
    email: "",
    first_name: "",
    last_name: "",
    dob: "",
    mobil: "",
    zip_code: "",
  };
  const userReducer = (state, action) => {
    switch (action.type) {
      case "SET_USER":
        return { ...state, [action.field]: action.value };
      case "CLEAR_USER":
        return { ...state, ...initialUserState };
      default:
        return state;
    }
  };
  const [userState, dispatchUser] = useReducer(userReducer, initialUserState);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAddUser = () => {
    console.log("handleAddUser");
    // if (
    //   userState.first_name === "" ||
    //   userState.last_name === "" ||
    //   userState. === ""
    // ) {
    //   dispatchMsg({
    //     type: "SET_MSG",
    //     payload: {
    //       openMsg: true,
    //       msgSeverity: "warning",
    //       msg: "Please enter all the inputs",
    //     },
    //   });
    //   setFocusOnField("firstname");
    //   return;
    // }

    const reqBody = {
      email: userState.email,
      first_name: userState.first_name,
      last_name: userState.last_name,
      dob: userState.dob,
      mobile: userState.mobile,
      zip_code: userState.zip_code,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqBody),
    };
    fetch("http://localhost:5000/users", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // dispatchMsg({
        //   type: "SET_MSG",
        //   payload: {
        //     openMsg: true,
        //     msgSeverity: "success",
        //     msg: `Added "${data.firstname} ${data.lastname}" Successfully!`,
        //   },
        // });
        onUpdateMessage({
          code: "NEW_USER_ADDED",
          detail: `Added "${data.first_name} ${data.last_name}" Successfully!`,
        });
        console.log("data", data);
        dispatchUser({ type: "CLEAR_USER" });
        setOpen(false);
        // setFocusOnField("firstname");
        // getAllUsers();
      })
      .catch((error) => {
        // dispatchMsg({
        //   type: "SET_MSG",
        //   payload: {
        //     openMsg: true,
        //     msgSeverity: "error",
        //     msg: `Failed to add users. Details: ${error}`,
        //   },
        // });
      });
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add User
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogTitle>Create New User</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter user details</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e) =>
              dispatchUser({
                field: "email",
                value: e.target.value,
                type: "SET_USER",
              })
            }
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            id="first_name"
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) =>
              dispatchUser({
                field: "first_name",
                value: e.target.value,
                type: "SET_USER",
              })
            }
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            id="last_name"
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) =>
              dispatchUser({
                field: "last_name",
                value: e.target.value,
                type: "SET_USER",
              })
            }
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            id="dob"
            label="DOB"
            type="date"
            fullWidth
            variant="standard"
            onChange={(e) =>
              dispatchUser({
                field: "dob",
                value: e.target.value,
                type: "SET_USER",
              })
            }
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            id="mobile"
            label="Mobile"
            type="tel"
            fullWidth
            variant="standard"
            onChange={(e) =>
              dispatchUser({
                field: "mobile",
                value: e.target.value,
                type: "SET_USER",
              })
            }
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            id="zip_code"
            label="Zip Code"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) =>
              dispatchUser({
                field: "zip_code",
                value: e.target.value,
                type: "SET_USER",
              })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleAddUser}>
            Add
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
