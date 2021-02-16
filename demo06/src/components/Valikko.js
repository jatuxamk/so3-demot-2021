import {useState} from 'react';
import {AppBar, IconButton, Menu, MenuItem, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function Valikko() {

    const [ankkuri, setAnkkuri] = useState(null);

    const suljeMenu = () => {
        setAnkkuri(null);
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit" edge="start" onClick={ (e) => {  setAnkkuri(e.currentTarget)} }>
                    <MenuIcon />
                </IconButton>
                <Menu open={Boolean(ankkuri)} anchorEl={ankkuri} onClose={suljeMenu}>
                    <MenuItem>Yleiset</MenuItem>
                    <MenuItem>Urheilu</MenuItem>
                    <MenuItem>Matkailu</MenuItem>
                    <MenuItem>Terveys</MenuItem>
                    <MenuItem>Digi</MenuItem>
                </Menu>    

                <Typography variant="h5">Demo 6: Material-UI-komponentit (2)</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Valikko
