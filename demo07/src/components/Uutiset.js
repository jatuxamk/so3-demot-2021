import { useState, useEffect } from 'react';
import { Backdrop, 
         CircularProgress, 
         Container, 
         List, 
         ListItemText, 
         Typography
        } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    uutisrivi : {
                    marginBottom : 20,
                    paddingBottom : 10,
                    borderBottom : "solid 1px #CCC"    
    },
    alaotsikko : {
        marginTop : 10,
        fontSize : 16
    }    
});

function Uutiset(props) {

    const tyylit = useStyles();

    const [data, setData] = useState({
        uutiset : [],
        tiedotHaettu : false,
        virhe : null
     });

    const haeTiedot = async (kategoria) => {

    try {

        const yhteys = await fetch(`https://so3server.herokuapp.com/uutiset/${kategoria}`);
        const tiedot = await yhteys.json();

        setData({
            ...data,
            uutiset : tiedot,
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

        haeTiedot(props.match.params.kategoria);

    }, [props.match.params.kategoria] );

    return (
        <Container style={{
                            marginTop : 10,                            
                          }}>

            <Typography variant="h6">Iltalehden uutisia</Typography>

            <Typography className={tyylit.alaotsikko}>Kategoria: {props.match.params.kategoria}</Typography>

            {(data.tiedotHaettu) 
                ? <List>
                    { data.uutiset.map((uutinen) => {
                        return ( <ListItemText 
                                    key={uutinen.aikaleima}
                                    primary={uutinen.otsikko}
                                    secondary={uutinen.pvm} 
                                    className={tyylit.uutisrivi}
                                 />

                        );
                    }) }
                  </List>
                : <Backdrop open={true}>
                     <CircularProgress color="inherit" />
                  </Backdrop>
            }




        </Container>
    )
}

export default Uutiset