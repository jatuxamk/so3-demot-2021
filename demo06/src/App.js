import Valikko from './components/Valikko';
import Uutiset from './components/Uutiset';
import { useState } from 'react';

function App() {

  const [kategoria, setKategoria] = useState("yleiset");

  return (
    <>
            
      <Valikko  setKategoria={setKategoria} />
      <Uutiset kategoria={kategoria} />

    </>
  );
}

export default App;
