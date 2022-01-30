import React, { Component, useEffect, useState} from "react";
import { useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import MicroFrontend from "./MicroFrontend";
import marked from "marked";
import ReactMarkdown from 'react-markdown'

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
        <button onClick={() => history("/Readme")}> readme </button>
    </div>
  )
}

function ReadmeComponent() {
  const [markdown, setMarkdown] = useState("#NULL");


  useEffect(() => {
    fetch('http://localhost:4000/files/Readme.md')
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
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
              <Route exact path="/readme" element={<ReadmeComponent/>} />
          </Routes>
        </React.Fragment>
      </BrowserRouter>
      <img src={'/images/zad1.png'} />
    </div>
  );
}

export default App;
