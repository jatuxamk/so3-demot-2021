import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

function App() {
  return (
    <Container maxWidth="sm">

      <Typography variant="h5">Demo 5: Material-UI -komponentit</Typography>

      <Button 
        variant="contained" 
        color="primary"
        size="large"
        fullWidth={true}
      >Tilaa uutiskirje</Button>

    </Container>
  );
}

export default App;
