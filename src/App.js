import Home from "./Home";
import { React, useContext } from "react";
import { AppContext } from "./context";
import Modal from "./Modal";
import Sidebar from "./Sidebar";

function App() {
  const data = useContext(AppContext);
  console.log(data);
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
}

export default App;
