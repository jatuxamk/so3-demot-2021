import {useState} from 'react';

function App() {

  const [tervehdys] = useState("Moikka!"); 
  
  return (
    <div className="container">
      
      <h1>Demo 1: React-perusteita</h1>

      <h2>"Hello world"</h2>

      <button className="btn btn-primary btn-block">Sano heippa!</button>

      {tervehdys}

    </div>
  );

}

export default App;
