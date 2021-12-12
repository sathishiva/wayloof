import React, { useState, useEffect, useReducer, useContext } from "react";

import UsersTableData from "./UsersTableData";

export default function UsersTable({ message, onUpdateMessage }) {
  const [users, setUsers] = useState([]);

  // Message State Management
  const initialMsgState = {
    msg: "",
    openMsg: false,
    msgSeverity: "info",
  };

  const msgReducer = (state, action) => {
    switch (action.type) {
      case "SET_MSG":
        return { ...state, ...action.payload };
      case "CLOSE_MSG":
        return { ...state, openMsg: false };
      default:
        return state;
    }
  };

  const [msgState, dispatchMsg] = useReducer(msgReducer, initialMsgState);

  const getAllUsers = () => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setUsers(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  useEffect(() => {
    if (
      message?.code === "NO_MESSAGE" ||
      message?.code === "NEW_USER_ADDED" ||
      message?.code === "USER_DELETED"
    ) {
      getAllUsers();
    }
  }, [message]);

  const header = [
    {
      id: "email",
      numeric: false,
      disablePadding: true,
      label: "Email",
    },
    {
      id: "first_name",
      numeric: false,
      disablePadding: true,
      label: "First Name",
    },
    {
      id: "last_name",
      numeric: false,
      disablePadding: true,
      label: "Last Name",
    },
    {
      id: "dob",
      numeric: false,
      disablePadding: true,
      label: "DOB",
    },
    {
      id: "mobile",
      numeric: true,
      disablePadding: true,
      label: "Mobile",
    },
    {
      id: "zip_code",
      numeric: true,
      disablePadding: true,
      label: "Zip Code",
    },
  ];
  console.log("users", users);
  return (
    <UsersTableData
      headData={header}
      rowData={users}
      onUpdateMessage={onUpdateMessage}
    />
  );
}
