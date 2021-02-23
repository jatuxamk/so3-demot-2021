import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    otsikko : {
                fontSize : 22,
                marginTop : 10
    },
    kappale : {
                marginTop : 10,
                marginBottom : 10
              }
});

function Info() {

    const tyylit = useStyles();

    return (
        <Container>

            <Typography 
                className={tyylit.otsikko}
            >Info</Typography>
            
            <Typography
                className={tyylit.kappale}
            >Tässä demotaan reititys-ominaisuuksia React Router -kirjastolla.            
            </Typography>

            <Button
                component={Link}
                to="/"
                variant="contained"
                color="primary"
                fullWidth
            >
                Palaa alkuun
            </Button>

        </Container>
    )
}

export default Info;