import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage:
          "url('https://n5pyepg4aruaejgm.public.blob.vercel-storage.com/IMG_1108-mK5KIilCLmc3j2GvQcWVdeo2UpNvzf.JPG')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "#fff",
      }}
    >
      {/* Overlay escura com gradiente */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.85))",
          zIndex: 0,
        }}
      />

      {/* Conteúdo com animações */}
      <Box sx={{ zIndex: 1, px: 3, maxWidth: "800px" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3.5rem",
              },
            }}
          >
            A madeira com alma e propósito.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <Typography
            variant="h6"
            component="p"
            sx={{
              maxWidth: 600,
              margin: "0 auto",
              color: theme.palette.grey[300],
              fontStyle: "italic",
            }}
            gutterBottom
          >
            Design sob medida para cozinhas, roupeiros e portas que contam a sua
            história.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 4,
              px: 4,
              py: 1.5,
              fontWeight: 600,
              fontSize: "1rem",
              backgroundColor: "#a57242",
              color: "#fff",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#8b5e36",
              },
            }}
            onClick={() => {
              const el = document.getElementById("servicos");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Ver Serviços
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default HeroSection;
