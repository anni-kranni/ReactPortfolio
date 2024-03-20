import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import React from 'react';
import Header from './header';
// import { link } from 'fs';
import { Link } from 'react-router-dom';


const Aloitus: React.FC = (): React.ReactElement => {

    const TypoStyles = {
        color: "#eefcde"
    }
    return (
        <   >
            <Box
                sx={{
                    height: "1000px",
                    width: "100%",
                    backgroundColor: "#210f19"
                }}>
                <Header />
                <Box
                    sx={{
                        display: "flex",

                    }}>
                    <Box

                        sx={{
                            display: "flex",
                            alignItems: "flex-end",
                            flexDirection: "column",
                            width: "50%"
                        }}>
                        <Box
                            sx={{
                                width: "40%",
                                minWidth: "300px",
                                // borderStyle: "solid",
                                // borderWidth: "1px",
                                // borderColor: "#302B2F",
                                // borderRadius: "20px",
                                // boxShadow: "5px 5px 5px red",
                                margin: "1em",
                                padding: "1em"
                            }}>
                            <Typography
                                style={TypoStyles}>Anni Roihuvuo on Tamperelainen tietojenkäsittelyn opiskelija, tuottaja ja tanssija.</Typography>

                        </Box>
                        <Box
                            sx={{
                                width: "40%",
                                minWidth: "300px",
                                maxWidth: "550px",
                                borderStyle: "solid",
                                borderWidth: "1px",
                                borderColor: "#302B2F",
                                borderRadius: "20px",
                                margin: "1em",
                                marginTop: "0em",
                                padding: "1em",

                            }}>

                            <List>
                                {/* <ListItem>
                                    <ListItemButton
                                        component={Link}
                                        to="/"
                                    ><ListItemText style={TypoStyles} primary="Aloitus" />

                                    </ListItemButton>
                                </ListItem> */}
                                <ListItem>
                                    <ListItemButton
                                        component={Link}
                                        to="/Grafiikka/"
                                    ><ListItemText
                                            style={TypoStyles} primary="Grafiikka" />

                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton
                                        component={Link}
                                        to="/Tuottaja/"
                                    ><ListItemText style={TypoStyles} primary="Tuottaja" />

                                    </ListItemButton>
                                </ListItem>

                                <ListItem>
                                    <ListItemButton
                                        component={Link}
                                        to="/Yhteys/"
                                    ><ListItemText style={TypoStyles} primary="Yhteys" />

                                    </ListItemButton>
                                </ListItem>
                            </List>

                        </Box>
                    </Box>
                    <Box
                        sx={{
                            marginTop: "1em",
                            padding: "1em"
                        }}>
                        <img src="./Anni Roihuvuo-0106.jpg" alt="Anni"
                            height="400px" /></Box>
                </Box>
            </Box>
        </>
    );
}

export default Aloitus;