import React, { useState } from "react";
import { useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import MicroFrontend from "./MicroFrontend";

const defaultHistory = createBrowserHistory();

const {
  REACT_APP_FIBBONACCI_HOST: fibbonacciHost,
} = process.env;

function Fibbonacci({ history })
{
  return <MicroFrontend history={history} host = {fibbonacciHost} name="Fibbonacci" />
}

function Home({ history }){
  return (
    <div className="App"> <header className="App-header"> Realizacja zadania nr1 w ramach laboratorium PFSwCO Jakub Rusek</header></div>
  )
}

function Menu(){
  let history = useNavigate();
  return (
    <div>
        <button onClick={() => history("/")}> main </button>
        <button onClick={() => history("/fibbonacci")}> fibbonacci </button>
        <button onClick={() => history("/files/Readme.md")}> readme </button>
    </div>
  )
}

function App() {
  return (
    <div>
      <BrowserRouter>
      <Menu />
        <React.Fragment>
          <Routes>
              <Route exact path ="/" element={<Home/>} />
              <Route exact path="/fibbonacci" element={<Fibbonacci/>} />
          </Routes>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
