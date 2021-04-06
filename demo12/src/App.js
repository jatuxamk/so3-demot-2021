import {useState} from 'react';

function App(props) {

  const [tervehdys, setTervehdys] = useState(); 
  const [nimi, setNimi] = useState();
  
  const sanoHeippa = () => {

    const tunti = (props.tunti) ? props.tunti : new Date().getHours();

    if (tunti >= 6 && tunti < 10) {

      setTervehdys(`Huomenta, ${nimi}!`);

    }

    if (tunti >= 10 && tunti < 16) {

      setTervehdys(`Hyvää päivää, ${nimi}!`);

    }

    if (tunti >= 16 && tunti < 22) {

      setTervehdys(`Hyvää iltaa, ${nimi}!`);

    }
    
    if ((tunti >= 22 && tunti <= 23) || (tunti > 0 && tunti < 6)) {

      setTervehdys(`Hyvää yötä, ${nimi}!`);

    }


  }

  return (
    <div className="container">
      
      <h1>Demo 12: React-yksikkötestusta</h1>

      <h2>Hello world</h2>

      <input 
          data-testid="nimi"
          type="text" 
          className="form-control mb-2" 
          placeholder="Anna nimesi..."  
          onChange={ (e) => {
                      setNimi(e.target.value);
                   } } 
      />

      <button 
        data-testid="nappi"
        className="btn btn-primary btn-block" 
        onClick={sanoHeippa}
      >Sano heippa!</button>

      {(tervehdys) 
        ? (
          <div 
            data-testid="ilmoitus" 
            className="card card-body mt-2">
            {tervehdys}
          </div>
          )
        : null 
      }

    </div>
  );

}

export default App;
