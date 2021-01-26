import { useState, useEffect } from "react";

function App() {

  const [data, setData] = useState({
                                      henkilot : [],
                                      tiedotHaettu : false,
                                      virhe : null
                                   });

  const haeTiedot = async () => {

    try {

      const yhteys = await fetch("https://jsonplaceholder.typicode.com/users");
      const tiedot = await yhteys.json();
  
      setData({
                ...data,
                henkilot : tiedot,
                tiedotHaettu : true
              });

    } catch (e) {

      setData({
        ...data,
        tiedotHaettu : false,
        virhe : "Yhteyttä palvelimeen ei voitu muodostaa. Yritä hetken kuluttua uudestaan."
      });


    }

  }

  useEffect(() => {

    haeTiedot();

  }, [] );

  return (
    <div className="container">

      <h1>Demo 3: Tietojen hakeminen palvelimelta</h1>

      <ul className="list-group">

      {(!data.virhe)
        ? (data.tiedotHaettu)
          ? data.henkilot.map((henkilo, idx) => {

                                                  return (
                                                          <li className="list-group-item" key={idx}>
                                                            <h5>{henkilo.name}</h5>
                                                            {henkilo.email}
                                                          </li>
                                                        )

            })
          : <p>Tietoja haetaan... odota hetki.</p>
        : <div className="alert alert-danger">
            {data.virhe}
          </div>
      }

      </ul>
    </div>
  );
}

export default App;
