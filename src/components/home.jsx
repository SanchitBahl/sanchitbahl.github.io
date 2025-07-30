// Home.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";

const interests = [
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Data Science",
  "Artificial Intelligence",
  "Web Development",
  "Open Source",
];

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Hi, I'm Sanchit Bahl
      </Typography>

      <Typography variant="h5" gutterBottom>
        I love to play with
      </Typography>

      <Typography variant="h4" color="primary">
        <Typewriter
          words={interests}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </Typography>
    </Box>
  );
};

export default Home;
