import { useState, useEffect } from "react";

function App() {

  const [henkilot, setHenkilot] = useState([]);

  const haeTiedot = async () => {

    const yhteys = await fetch("https://jsonplaceholder.typicode.com/users");
    const tiedot = await yhteys.json();

    setHenkilot(tiedot);

  }

  useEffect(() => {

    haeTiedot();

  }, [] );

  return (
    <div className="container">

      <h1>Demo 3: Tietojen hakeminen palvelimelta</h1>

      {JSON.stringify(henkilot)}

    </div>
  );
}

export default App;
