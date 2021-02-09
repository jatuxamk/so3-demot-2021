import { useState } from 'react';
import Otsikko from './components/Otsikko';
import Tehtavalista from './components/Tehtavalista';
import UusiTehtava from './components/UusiTehtava';

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

      <Otsikko>Demo 4: React-komponentit</Otsikko>

      <Otsikko tyyli="pieni">Tehtävälista</Otsikko>

      <UusiTehtava lisaaTehtava={lisaaTehtava} />

      <Tehtavalista tehtavat={tehtavat} merkitseSuoritetuksi={merkitseSuoritetuksi} />

      <p><small>Klikkaa tehttävän nimeä merkataksesi sen suoritetuksi</small></p>

    </div>
  );
}

export default App;
