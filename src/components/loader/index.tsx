import React, { useEffect, useState } from "react";
import { Box, Typography, Fade, CircularProgress } from "@mui/material";

const Loader: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 1000);
    const finishTimer = setTimeout(() => onFinish(), 3500);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: 9999,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        bgcolor: "#2c1b0c", // tom de madeira escura
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="inherit" />
      <Fade in={showText} timeout={1000}>
        <Box mt={4} textAlign="center">
          <Typography variant="h4" fontWeight="bold">
            Bem-vindo
          </Typography>
          <Typography variant="subtitle1">Onde a madeira ganha vida</Typography>
        </Box>
      </Fade>
    </Box>
  );
};

export default Loader;
