import React from "react";
import "./App.css";
import PrimarySearchAppBar from "./components/header/Header";
import UserAddForm from "./pages/users/UserAddForm";
import UsersTable from "./pages/users/UsersTable";
import ImgMediaCard from "./ImgMediaCard";
import useMessage from "./hooks/MessageHook";

function App() {
  const [message, updateMessage] = useMessage();
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <UserAddForm message={message} onUpdateMessage={updateMessage} />
      <UsersTable message={message} onUpdateMessage={updateMessage} />
      <ImgMediaCard />
    </div>
  );
}

export default App;
