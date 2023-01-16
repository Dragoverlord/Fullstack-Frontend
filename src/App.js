import React from "react";
import "./App.css";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <>
     <video id="background-video" loop autoPlay muted>
        <source src={require("./image/video.mp4")} type="video/mp4" />
      </video>
      <MainRoutes />
    </>
  );
};

export default App;
