import './App.css';
import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./components/header";
// import Card from './components/card';




function App() {
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    const getDataListner = async () => {
      try {
        const dAta = await axios.get("https://d3dyfaf3iutrxo.cloudfront.net/general/upload/c7e096eae87840b8a56d4a0107b359db-data.json")
          .then((response) => setGetData(response.data));
      
      
        console.log(dAta.data);
         setGetData(dAta.data);
       } catch (e) {
         console.log(e);
       }
     };
    getDataListner();
  }, []);

  return (
    <div className="App">
      <div className='header'><Header getData={getData} /></div>
    </div>
  );
}

export default App;
