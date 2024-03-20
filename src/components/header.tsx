import { AppBar, CssBaseline, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header: React.FC = (): React.ReactElement => {

    const [valikkoAuki, setValikkoAuki] = useState<boolean>(false);


    return (
        <CssBaseline>

            <AppBar
                position="static"
                sx={{
                    padding: "1.5em",
                    backgroundColor: "#000508"
                }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                    <Typography
                        variant='h2'
                        sx={{ color: "#eefcde" }}
                    >Anni Roihuvuo
                    </Typography>
                    <IconButton
                        sx={{
                            color: "#eefcde",
                            padding: "1em"
                        }}
                        edge="end"

                        onClick={() => setValikkoAuki(true)}
                    >
                        <MenuIcon
                            sx={{ fontSize: "45px" }}
                        />
                    </IconButton>
                    <Drawer
                        sx={{
                            padding: "1.5em",
                            backgroundColor: "#000508"
                        }}
                        open={valikkoAuki}
                        onClose={() => setValikkoAuki(false)}
                        anchor='right'


                    ><List
                        onClick={() => setValikkoAuki(false)}
                        sx={{
                            width: "300px",
                            textAlign: "center"
                        }}>
                            <ListItem>
                                <ListItemButton
                                    component={Link}
                                    to="/"
                                ><ListItemText primary="Aloitus" />

                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton
                                    component={Link}
                                    to="/Grafiikka"
                                ><ListItemText primary="Grafiikka" />

                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton
                                    component={Link}
                                    to="/Tuottaja"
                                ><ListItemText primary="Tuottaja" />

                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton
                                    component={Link}
                                    to="/Yhteys"
                                ><ListItemText primary="Yhteys" />

                                </ListItemButton>
                            </ListItem>
                        </List></Drawer>
                </Toolbar>

            </AppBar>
        </CssBaseline>
    );
}

export default Header

