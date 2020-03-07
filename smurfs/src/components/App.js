import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import SmurfContext from '../contexts/SmurfContext';
import SmurfList from "./SmurfList";

const App = () => {
  const [ smurf, setSmurf ] = useState([]);
  const addSmurf = item => {
    setSmurf([ ...smurf, item ])
  };
  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log("res: ", res);
        console.log("res.data: ", res.data);
        setSmurf(res.data);
    })
      .catch(err => {
        return('Data is all smurfed up', err);
      });
  }, []);

  return (
    <SmurfContext.Provider value= {{ addSmurf, smurf }} >
      <div className="App">
        <SmurfList />
      </div>
    </SmurfContext.Provider>
  );
};
export default App;
