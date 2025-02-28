import { Box, Card, CardActionArea, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';
import Header from './header';
import { Link } from 'react-router-dom'
import Footer from './footer';

const WebDesign: React.FC = (): React.ReactElement => {
    return (

        <>
            <Box
                sx={{
                    minHeight: "100vh",
                    width: "100%",
                    backgroundColor: "#210f19"
                }}>
                <Header />
                <Typography variant="h2" align='center' color='#eefcde' sx={{ margin: '1vh' }} >Web design</Typography>
                <Box sx={{
                    height: "100vh",

                }}>
                    <Card sx={{
                        maxWidth: 345,
                        margin: "auto"
                    }}>
                        <CardActionArea
                            component="a"
                            href="https://www.tommivanni.fi"
                            target="_blank"
                            rel="noopener noreferrer">
                            <CardHeader title="tommivanni.fi" />
                            <CardMedia
                                component="img"
                                image='/grafiikka/sokeinlogokeppi.png'
                                alt="Suomen sokein koomikko" />
                        </CardActionArea>
                    </Card>
                </Box>
                <Footer />
            </Box>
        </>
    );
}


export default WebDesign;