import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import Header from './header';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Footer from './footer';




const Grafiikka: React.FC = (): React.ReactElement => {


    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleOpen = (imageUrl: string) => {
        setSelectedImage(imageUrl);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    return (

        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                backgroundColor: "#210f19"
            }}>
            <Header />
            <Typography variant="h2" align='center' color='#eefcde' sx={{ margin: '1vh' }}>Grafiikka</Typography>

            <ImageList sx={{
                width: 1100,
                height: "auto",
                margin: "auto"
            }}>

                {graffat.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                            onClick={() => handleOpen(item.img)}
                        />
                        <ImageListItemBar
                            title={item.title}

                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition

            >
                <Fade in={open}>
                    <Box
                        onClick={handleClose}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            outline: 'none',
                        }}
                    >
                        <img
                            src={selectedImage || undefined}
                            alt="Full size image"
                            style={{ maxWidth: '90%', maxHeight: '90%' }}
                        />
                    </Box>
                </Fade>
            </Modal>
            <Footer />
        </Box>

    );
}

const graffat = [
    {
        img: '/grafiikka/sokeinlogokeppi.png',
        title: 'Suomen sokein koomikko - Logo nettisivulle 2024',
        rows: 2,
        cols: 3,
    },
    {
        img: '/grafiikka/jaapep.png',
        title: 'ÄÄ$$T€K - Tapahtumagrafiikka 2024',
        rows: 2,
        cols: 3,
    },
    {
        img: '/grafiikka/filmi.jpg',
        title: 'F[r]ee Documentary screening - Tapahtumagrafiikka 2024',
        rows: 2,
        cols: 3,
    },
    {
        img: '/grafiikka/HoiSieMuovi.jpg',
        title: 'Muovi Makkonen - Tapahtumagrafiikka 2023',
        rows: 2,
        cols: 3,
    },
    {
        img: '/grafiikka/munkki1.3.jpg',
        title: 'Onnenmunkki - Somegrafiikka 2023',
        rows: 2,
        cols: 3,
    },
    {
        img: '/grafiikka/SooloKapsakkiSyksy24.png',
        title: 'Suomen Sokein Soolo - Tapahtumagrafiikka 2024',
        rows: 2,
        cols: 3,
    },
    {
        img: '/grafiikka/SokeinTreeni.jpg',
        title: 'Suomen Sokein Treeniklubi - Tapahtumagrafiikka 2023',
        rows: 2,
        cols: 3,
    },
    {
        img: '/grafiikka/TekinPaluuKeltainenJPG.jpg',
        title: 'NääsTek: Rave Wars - Tapahtumagrafiikka 2023',
        rows: 2,
        cols: 3,
    },
    {
        img: '/grafiikka/tiistaiperfect.jpg',
        title: 'Foil On: Perfect Tuesday - Tapahtumagrafiikka 2023',
        rows: 2,
        cols: 3,
    },
    {
        img: '/grafiikka/TrashyBassy.jpg',
        title: 'Trashy Bassy Halloween Cabarét - Tapahtumagrafiikka 2023',
        rows: 2,
        cols: 3,
    }

]
export default Grafiikka;