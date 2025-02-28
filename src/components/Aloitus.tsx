import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import React from 'react';
import Header from './header';
// import { link } from 'fs';
import { Link } from 'react-router-dom';
import Footer from './footer';


const Aloitus: React.FC = (): React.ReactElement => {

    const TypoStyles = {
        color: "#eefcde"
    }
    return (

        <Box
            sx={{

                width: "100%",
                backgroundColor: "#210f19"
            }}>
            <Header />
            <Box
                sx={{
                    height: "99vh",
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
                            margin: "1em",
                            padding: "1em"
                        }}>
                        <Typography
                            style={TypoStyles}>Anni Roihuvuo on vuonna 1989 syntynyt Tamperelainen tietojenkäsittelyn opiskelija ja graafinen suunnittelija.</Typography>

                    </Box>
                    <Box
                        sx={{
                            width: "40%",
                            minWidth: "300px",
                            maxWidth: "550px",
                            borderStyle: "solid",
                            borderWidth: "1px",
                            borderColor: "#302B2F",
                            // borderRadius: "20px",
                            margin: "1em",
                            marginTop: "0em",
                            padding: "1em",

                        }}>

                        <List>

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
                                    to="/WebDesign/"
                                ><ListItemText style={TypoStyles} primary="Web design" />

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

            <Footer />

        </Box>
    );
}

export default Aloitus;