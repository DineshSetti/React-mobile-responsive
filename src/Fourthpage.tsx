import { Button, Typography, Box } from "@mui/material";
import React from "react";
import imageSrc from "./images (3).png";

function Fourthpage() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop: "5rem",
        gap: "5rem",
        justifyContent: "center",
        flexDirection: { xs: "column-reverse", md: "row" },
        textAlign: { xs: "center", md: "initial" },
      }}
    >
      <div>
        <Typography variant="h1" sx={{ fontSize: 40 }}>
          <b>
            We Work how you
            <br /> work everyday
          </b>
        </Typography>
        <p>
          Since the easiest things to use actually get used, we
          <br /> adapt to the way your team works - not the other
          <br /> way around.
        </p>
        <Button variant="contained">Get started free</Button>
      </div>
      <div>
        <img src={imageSrc} alt="image" style={{ maxWidth: "100%" }} />
      </div>
    </Box>
  );
}

export default Fourthpage;
