import { Box, Container, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import Header from './header';

const Tuottaja: React.FC = (): React.ReactElement => {
    return (

        <><Header />

            <Box sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap"
            }}>
                <Typography
                    variant='h2'>Säännöt</Typography>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap"
                    }}>
                    <Box
                        sx={{
                            width: "40%",
                            minWidth: "300px",
                            maxWidth: "400px",
                            borderStyle: "solid",
                            borderWidth: "1px",
                            borderColor: "#302B2F",
                            borderRadius: "20px",
                            margin: "1em",
                            padding: "1em"
                        }}>
                        <Typography> Kilpailussa kilpaillaan seuraavissa sarjoissa:
                            Henkilökohtaisista mestaruuksista:
                            <List>
                                <ListItem>- miesten sarjassa (18-59 -vuotiaat miehet)</ListItem>
                                <ListItem>- veteraanien sarjassa (≥60 -vuotiaat)</ListItem>
                                <ListItem> - naisten sarjassa (≥18-vuotiaat naiset)</ListItem>
                                <ListItem> - alle 18 ja yli 15 vuotiaiden nuorten sarjassa.</ListItem>
                                <ListItem> - alle 15-vuotiaiden nuorten sarjassa</ListItem>
                                <ListItem> - harrastesarjassa (sekasarja)</ListItem>
                            </List>
                            Alle 18-vuotiaiden sarjoissa kilpailevat kilpailuvuonna 17 vuotta täyttävät. Sarjan kaikki osallistujat
                            palkitaan.
                            Aikuisten sarjoissa kilpailuvuonna ikärajan saavuttaneet kuuluvat vuoden alusta alkaen kyseiseen
                            sarjaan. </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: "40%",
                            minWidth: "300px",
                            maxWidth: "400px",
                            borderStyle: "solid",
                            borderWidth: "1px",
                            borderColor: "#302B2F",
                            borderRadius: "20px",
                            margin: "1em",
                            padding: "1em"
                        }}>
                        <Typography>Kilpailun järjestäjä vahvistaa vuosittain kilpailun osanottomaksut. Ohjeena pidetään
                            <ListItem>20€/henkilö</ListItem>
                            <ListItem>20€/joukkue</ListItem>
                            <ListItem>10€/nuori</ListItem>
                            <ListItem>10€/nuorten joukkue.</ListItem>
                            <ListItem>Jälki-ilmoittautuminen paikan päällä 30€/henkilö,
                                käteismaksu.</ListItem></Typography>
                    </Box>
                    <Box
                        sx={{
                            width: "40%",
                            minWidth: "300px",
                            maxWidth: "400px",
                            borderStyle: "solid",
                            borderWidth: "1px",
                            borderColor: "#302B2F",
                            borderRadius: "20px",
                            margin: "1em",
                            padding: "1em"
                        }}>
                        <Typography>§ Kilpailija saa käyttää vain yhtä (1) onkea kerrallaan vedessä. Kiellettyjä ovat pilkit, joihin on
                            kiinnitetty useampi kuin yksi (1) yksi- tai useampihaarainen koukku, poisluettuna tasapainopilkit,
                            joissa sallitaan enintään kaksi (2) yksihaaraista kiintokoukkua ja rungon alapuolella oleva yksi- tai
                            useampihaarainen irtokoukku, joka saa olla kiinnitettynä tasapainon vatsalenkkiin korkeintaan
                            yhdellä renkaalla tai hakasella. Koukku ei saa olla kiinnitettynä pilkin ja vavan väliseen siimaan
                            Lisäpainojen käyttö on sallittu, mutta painojen tulee sijaita koukun yläpuolella. Mormuska
                            rinnastetaan koukkuun. Kaikki syötit ovat sallittuja, mutta syötin on oltava pilkin koukussa.
                            Houkuttimien ja hajusteiden kuten mäskin, ryynien, matojen, toukkien tms. pudottaminen avantoon
                            on kielletty kilpailun aikana sekä kilpailua edeltävän harjoittelukiellon aikana. Kilpailualueella on
                            liikuttava jalan. Tuomarineuvosto voi myöntää liikuntarajoitteiselle poikkeusluvan myös
                            muunlaiseen liikkumiseen. </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: "40%",
                            minWidth: "300px",
                            maxWidth: "400px",
                            borderStyle: "solid",
                            borderWidth: "1px",
                            borderColor: "#302B2F",
                            borderRadius: "20px",
                            margin: "1em",
                            padding: "1em"
                        }}>
                        <Typography>Kilpailijoiden paremmuuden ratkaisee saaliin paino. Jos se on henkilökohtaisten- tai
                            joukkuesarjojen kohdalla sama, jaetaan mitalisija(t) ja jätetään seuraava(t) sija(t) jakamatta. Muiden
                            kuin mitalisijojen kohdalla saaliin ollessa sama, sijoitus ratkaistaan arvalla.
                            Kilpailun järjestäjä on velvollinen huolehtimaan siitä, että jokaista vaakaa kohden on vähintään yksi
                            seula ja riittävä määrä seulojia. Kaikkien kilpailijoiden kalat tulee seuloa ja sitä on myös valvottava.</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}


export default Tuottaja;