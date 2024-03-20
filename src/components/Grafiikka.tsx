import { Backdrop, Box, Fade, Modal } from '@mui/material';
import React, { useState } from 'react';
import Header from './header';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';




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
                minHeight: "1000px",
                width: "100%",
                backgroundColor: "#210f19"
            }}>
            <Header />


            <ImageList sx={{
                width: 900,
                height: 1000,
                margin: "auto"
            }}>
                <ImageListItem key="Subheader" cols={2}>

                </ImageListItem>
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
            // BackdropComponent={Backdrop}
            // BackdropProps={{
            //     timeout: 500,
            // }}
            >
                <Fade in={open}>
                    <Box
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
        </Box>

    );
}

const graffat = [
    {
        img: '/grafiikka/filmi.jpg',
        title: 'F[r]ee Documentary screening',
        rows: 2,
        cols: 2,
    },
    {
        img: '/grafiikka/HoiSieMuovi.jpg',
        title: 'Muovi Makkonen',
        rows: 2,
        cols: 2,
    },
    {
        img: '/grafiikka/munkki1.3.jpg',
        title: 'Onnen Munkki',
        rows: 2,
        cols: 2,
    },
    {
        img: '/grafiikka/SokeinSooloLippu.jpg',
        title: 'Suomen Sokein Soolo',
        rows: 2,
        cols: 2,
    },
    {
        img: '/grafiikka/SokeinTreeni.jpg',
        title: 'Suomen Sokein Treeniklubi',
        rows: 2,
        cols: 2,
    },
    {
        img: '/grafiikka/TekinPaluuKeltainenJPG.jpg',
        title: 'NääsTek: Rave Wars',
        rows: 2,
        cols: 2,
    },
    {
        img: '/grafiikka/tiistaiperfect.jpg',
        title: 'Foil On: Perfect Tuesday',
        rows: 2,
        cols: 2,
    },
    {
        img: '/grafiikka/TrashyBassy.jpg',
        title: 'Trashy Bassy Halloween Cabarét',
        rows: 2,
        cols: 2,
    }
]
export default Grafiikka;