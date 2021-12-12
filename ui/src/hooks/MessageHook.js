import React, { useState } from "react";

const useMessage = () => {
  const initialState = {
    code: "NO_MESSAGE",
    detail: "",
  };
  const [message, setMessage] = useState(initialState);

  const updateMessage = (newMessage) => {
    console.log("message should be update to..", newMessage);
    setMessage(newMessage);
  };

  return [message, updateMessage];
};

export default useMessage;
