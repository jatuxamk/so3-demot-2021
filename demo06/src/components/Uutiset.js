import { useState, useEffect } from 'react';
import { Backdrop, 
         CircularProgress, 
         Container, 
         List, 
         ListItemText, 
         Typography
        } from '@material-ui/core';

function Uutiset() {

    const [data, setData] = useState({
        uutiset : [],
        tiedotHaettu : false,
        virhe : null
     });

    const haeTiedot = async () => {

    try {

        const yhteys = await fetch("https://so3server.herokuapp.com/uutiset");
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

        haeTiedot();

    }, [] );

    return (
        <Container style={{
                            marginTop : 10,                            
                          }}>

            <Typography variant="h6">Iltalehden uutisia</Typography>

            {(data.tiedotHaettu) 
                ? <List>
                    { data.uutiset.map((uutinen) => {
                        return ( <ListItemText 
                                    key={uutinen.aikaleima}
                                    primary={uutinen.otsikko}
                                    secondary={uutinen.pvm} 
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