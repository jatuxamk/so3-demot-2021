import { useState, useEffect } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button, Checkbox, TextField, FormControlLabel } from '@material-ui/core';

function App() {

  const [tiedotOk, setTiedotOk] = useState(false);
  const [nimi, setNimi] = useState(null);
  const [email, setEmail] = useState(null);
  const [ehdot, setEhdot] = useState(false);

  useEffect(() => {
    
    if (nimi && email && ehdot) {
      setTiedotOk(true);
    } else {
      setTiedotOk(false);
    }
     
  }, [nimi, email, ehdot])

  return (
    <Container maxWidth="sm">

      <Typography variant="h5">Demo 5: Material-UI -komponentit</Typography>

      <Typography variant="h6" className="marginaali">Uutiskirjeen tilaus</Typography>

      <TextField
        label="Nimi"
        variant="outlined"
        fullWidth={true}
        placeholder="Etunimi Sukunimi"
        className="marginaali"
        onChange={ (e) => { setNimi(e.target.value) } }
      />

      <TextField
        label="Sähköposti"
        variant="outlined"
        fullWidth={true}
        className="marginaali"
        onChange={ (e) => { setEmail(e.target.value) } }
      />

      <FormControlLabel 
        control={<Checkbox onChange={ (e) => { setEhdot(e.target.checked) } }/>}
        label="Hyväksyn käyttöehdot"
      />

      <Button 
        variant="contained" 
        color="primary"
        size="large"
        fullWidth={true}
        disabled={!tiedotOk}
        className="marginaali"
        onClick={() => { alert("Uutiskirje tilattu, kiitos!") }}
      >Tilaa uutiskirje</Button>

    </Container>
  );
}

export default App;
