import { AppBar, CssBaseline, Typography } from "@mui/material";
import React, { ReactElement } from "react";

const Footer: React.FC = (): React.ReactElement => {
    return (
        <> <AppBar position="static"
            sx={{
                padding: "1.5em",
                backgroundColor: "#000508",
                justifySelfSelf: "end"
            }}>
            <Typography variant="body1">© Anni Roihuvuo 2025</Typography>
        </AppBar>
        </>
    )
}

export default Footer