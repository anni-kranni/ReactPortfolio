import { AppBar, Typography } from "@mui/material";
import React from "react";

const Footer: React.FC = (): React.ReactElement => {
    return (
        <> <AppBar position="static"
            sx={{
                width: "100%",
                padding: "1.5em",
                backgroundColor: "#000508",
                justifySelf: "end"
            }}>
            <Typography variant="body1">© Anni Roihuvuo 2025</Typography>
        </AppBar>
        </>
    )
}

export default Footer