import {useState} from 'react';
import {AppBar, IconButton, Menu, MenuItem, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

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
                    <MenuItem
                        component={Link}
                        to="/uutiset/yleiset"
                        onClick={() => {
                            suljeMenu();
                        }}
                    >Yleiset</MenuItem>
                    <MenuItem
                        component={Link}
                        to="/uutiset/urheilu"
                        onClick={() => {
                            suljeMenu();
                        }}
                    >Urheilu</MenuItem>
                    <MenuItem
                        component={Link}
                        to="/uutiset/matkailu"
                        onClick={() => {
                            suljeMenu();
                        }}
                    >Matkailu</MenuItem>
                    <MenuItem
                        component={Link}
                        to="/uutiset/terveys"
                        onClick={() => {
                            suljeMenu();
                        }}
                    >Terveys</MenuItem>
                    <MenuItem
                        component={Link}
                        to="/uutiset/digi"
                        onClick={() => {
                            suljeMenu();
                        }}
                    >Digi</MenuItem>
                    <MenuItem
                        component={Link}
                        to="/info"
                        onClick={() => {
                            suljeMenu();
                        }}
                    >Tietoa sovelluksesta</MenuItem>
                </Menu>    

                <Typography variant="h5">Demo 7: Reititys (React Router)</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Valikko
