import {useState} from 'react';

function App() {

  const [tervehdys, setTervehdys] = useState(); 
  const [nimi, setNimi] = useState();
  
  const sanoHeippa = () => {

    setTervehdys(`Heippa, ${nimi}!`);

  }

  return (
    <div className="container">
      
      <h1>Demo 1: React-perusteita</h1>

      <h2>"Hello world"</h2>

      <input 
          type="text" 
          className="form-control mb-2" 
          placeholder="Anna nimesi..."  
          onChange={ (e) => {
                      setNimi(e.target.value);
                   } } 
      />

      <button className="btn btn-primary btn-block" onClick={sanoHeippa}>Sano heippa!</button>

      {(tervehdys) 
        ? (
          <div className="card card-body mt-2">
            {tervehdys}
          </div>
          )
        : null 
      }

    </div>
  );

}

export default App;
