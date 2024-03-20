import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Header from './header';
import { Link } from 'react-router-dom';

const Yhteys: React.FC = (): React.ReactElement => {

    const [etunimi, setEtunimi] = useState('')
    const [sukunimi, setSukunimi] = useState('')
    const [paikkakunta, setPaikkakunta] = useState('')
    const [puhelinnumero, setPuhelinnumero] = useState('')
    const [email, setEmail] = useState('')
    const [sarja, setSarja] = useState('')
    const [formComplete, setFormComplete] = useState(false);
    const [error, setError] = useState(false)
    const [error2, setError2] = useState(false)

    return (

        <><Header />  <Box

            sx={{

                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center"


            }}>

            <Typography
                variant="h2">Ilmoittautuminen</Typography>
            <Box
                sx={{
                    marginTop: "2em",
                    width: "50%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    flexWrap: "wrap",
                    padding: "2em"
                }}>
                <FormControl>
                    <TextField
                        required
                        id="Etunimi" label="Etunimi" variant="outlined" value={etunimi}
                        sx={{ margin: '10px' }}

                        inputProps={{
                            minLength: 2,
                        }}
                        error={error}
                        helperText={error && 'Olehyvä ja anna nimesi, vähintään 2 merkkiä'}
                        onChange={(e) => {
                            setEtunimi(e.target.value)
                            setFormComplete(etunimi !== '' && sukunimi !== '' && email !== '' ||
                                etunimi !== '' && sukunimi !== '' && puhelinnumero !== ''
                            )
                            setError(e.target.value.length < 2);
                        }} />

                </FormControl>

                <FormControl>
                    <TextField
                        required
                        sx={{ margin: '10px' }}
                        id="Sukunimi" label="Sukunimi" variant="outlined" value={sukunimi}

                        inputProps={{
                            minLength: 2,
                        }}
                        onChange={(e) => {
                            setSukunimi(e.target.value)
                            setFormComplete(etunimi !== '' && sukunimi !== '' && email !== '' ||
                                etunimi !== '' && sukunimi !== '' && puhelinnumero !== ''
                            );
                            setError2(e.target.value.length < 2);
                        }}
                        error={error2}
                        helperText={error2 && 'Olehyvä ja anna nimesi, vähintään 2 merkkiä'} />
                </FormControl>
                <FormControl>
                    <TextField
                        sx={{
                            margin: '10px'
                        }}
                        id="Paikkakunta" label="Paikkakunta" variant="outlined" value={paikkakunta}
                        onChange={(e) => {
                            setPaikkakunta(e.target.value)
                            setFormComplete(etunimi !== '' && sukunimi !== '' && email !== '' ||
                                etunimi !== '' && sukunimi !== '' && puhelinnumero !== ''
                            );

                        }}
                    />
                </FormControl>
                <FormControl>
                    <TextField
                        required={email === ''}
                        sx={{ margin: '10px' }}
                        id="Puhelinnumero" label="Puhelinnumero" variant="outlined" value={puhelinnumero}

                        onChange={(e) => {
                            setPuhelinnumero(e.target.value)
                            setFormComplete(etunimi !== '' && sukunimi !== '' && email !== '' && sarja !== '' ||
                                etunimi !== '' && sukunimi !== '' && puhelinnumero !== '' && sarja !== ''
                            );
                        }} />

                </FormControl>

                <FormControl>
                    <TextField

                        required={puhelinnumero === ''}
                        sx={{
                            margin: '10px'
                        }}
                        id="Sähköposti" label="Sähköposti" variant="outlined" value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                </FormControl>
                <Box
                    sx={{
                        width: "100%",
                        marginTop: "1em",
                        textAlign: "start"

                    }}>
                    <FormControl>
                        <FormLabel id="Sarjat">Sarjavaihtoehdot</FormLabel>
                        <RadioGroup
                            aria-labelledby="sarjat"
                            aria-required
                            name="sarjat"
                            onChange={(event) => {
                                setSarja(event.target.value)
                                setFormComplete(etunimi !== '' && sukunimi !== '' && email !== '' && event.target.value !== '' ||
                                    etunimi !== '' && sukunimi !== '' && puhelinnumero !== '' && event.target.value !== ''
                                );
                            }}
                        >
                            <FormControlLabel value="alle15" control={<Radio />} label="Alle 15-vuotiaat" />
                            <FormControlLabel value="15-19" control={<Radio />} label="15-19 -vuotiaat" />
                            <FormControlLabel value="20-39" control={<Radio />} label="20-39 -vuotiaat" />
                            <FormControlLabel value="40-59" control={<Radio />} label="40-59 -vuotiaat" />
                            <FormControlLabel value="60-79" control={<Radio />} label="60-79 -vuotiaat" />
                            <FormControlLabel value="yli 80" control={<Radio />} label="yli 80-vuotiaat" />
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Button
                    disabled={!formComplete}
                    component={Link}
                    to="/Kiitos"
                >Lähetä ilmoittautuminen</Button>
            </Box>

        </Box >
        </>
    );
}


export default Yhteys;