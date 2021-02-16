import {useState} from 'react';
import {AppBar, IconButton, Menu, MenuItem, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function Valikko(props) {

    const [ankkuri, setAnkkuri] = useState(null);

    const suljeMenu = () => {
        setAnkkuri(null);
    }

    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <IconButton color="inherit" edge="start" onClick={ (e) => {  setAnkkuri(e.currentTarget)} }>
                    <MenuIcon />
                </IconButton>
                <Menu open={Boolean(ankkuri)} anchorEl={ankkuri} onClose={suljeMenu}>
                    <MenuItem
                        onClick={() => {
                            props.setKategoria("yleiset");
                            suljeMenu();
                        }}
                    >Yleiset</MenuItem>
                    <MenuItem
                        onClick={() => {
                            props.setKategoria("urheilu");
                            suljeMenu();
                        }}
                    >Urheilu</MenuItem>
                    <MenuItem
                        onClick={() => {
                            props.setKategoria("matkailu");
                            suljeMenu();
                        }}
                    >Matkailu</MenuItem>
                    <MenuItem
                        onClick={() => {
                            props.setKategoria("terveys");
                            suljeMenu();
                        }}
                    >Terveys</MenuItem>
                    <MenuItem
                        onClick={() => {
                            props.setKategoria("digi");
                            suljeMenu();
                        }}
                    >Digi</MenuItem>
                </Menu>    

                <Typography variant="h5">Demo 6: Material-UI-komponentit (2)</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Valikko
