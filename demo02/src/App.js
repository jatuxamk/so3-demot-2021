import { useState } from 'react';
import './App.css';

function App() {

  const [tehtavat, setTehtavat] = useState([
                                             {
                                               nimi : "Siivoa",
                                               suoritettu : false
                                             },
                                             {
                                               nimi : "Käy kaupassa",
                                               suoritettu : true
                                             },
                                             {
                                               nimi : "Ulkoiluta koiraa",
                                               suoritettu : false
                                             }
                                            ]);

  const lisaaTehtava = (uusiTehtava) => {

    let apuTehtava = {
                        nimi: uusiTehtava,
                        suoritettu : false
                      }

    setTehtavat([...tehtavat, apuTehtava]);

  }

  const merkitseSuoritetuksi = (indeksi) => {

    tehtavat[indeksi].suoritettu = !tehtavat[indeksi].suoritettu;

    setTehtavat([...tehtavat]);

  }

  return (
    <div className="container">

      <h1>Demo 2: React-perusteita</h1>

      <h2>Tehtävälista</h2>

      <input 
        className="form-control mb-2" 
        placeholder="Anna tehtävä ja paina Enter..." 
        onKeyPress={ (e) => {
                        if (e.key === "Enter") {
                          lisaaTehtava(e.target.value);
                          e.target.value = null; 
                        }
                        
                    } }
      />

      <ul className="list-group">

      { tehtavat.map((tehtava, idx) => {

        return (<li 
                  className="list-group-item" 
                  key={idx}
                  onClick={ () => { 
                                    merkitseSuoritetuksi(idx);                                    
                                  }}
                >
                { (tehtava.suoritettu) 
                    ? <del>{tehtava.nimi}</del>
                    : tehtava.nimi
                }</li>)

      }) }

      </ul>

      <p><small>Klikkaa tehttävän nimeä merkataksesi sen suoritetuksi</small></p>

    </div>
  );
}

export default App;
