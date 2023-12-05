import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [advice, setAdvice] = useState(); // a state hook for setting random advice 

  useEffect (() => {  //a hook that manipulates the dom of a browser which shows fetchadvice function 
    fetchAdvice();
  }, []);

  const fetchAdvice = () => { //a callback function which receives response from the api requests send by the user 
    axios.get('https://api.adviceslip.com/advice') //using axios for sending get api requests 
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice); //updating random advice fetched from an api 
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='app'>
      <div className='card'>
        <h1 className='heading'>{advice}</h1>
        <button className='button' onClick={fetchAdvice}> 
        {/* calling fetchadvice function on a button that fetches random advice from api  */}
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
