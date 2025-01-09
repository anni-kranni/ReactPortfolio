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
                    height: "1000px",
                    width: "100%",
                    backgroundColor: "#210f19"
                }}>
                <Header />
                <Typography variant="h1" align='center' color='#eefcde' >Web design</Typography>
                <Box sx={{ padding: "1em" }}>
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

            </Box>
        </>
    );
}


export default WebDesign;