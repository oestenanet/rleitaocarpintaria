import React from "react";
import { Box, Typography, Link } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import { motion } from "framer-motion";

const Brevemente: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#2c1b0c",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        textAlign: "center",
        px: 2,
      }}
    >
      {/* Ícone animado */}
      <motion.div
        animate={{ rotate: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ConstructionIcon sx={{ fontSize: 80, color: "#f2c17d" }} />
      </motion.div>

      {/* Texto principal */}
      <Typography variant="h4" fontWeight="bold" mt={2}>
        O nosso site está em construção
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ maxWidth: 500, mt: 1, color: "#ddd" }}
      >
        Estamos a preparar algo especial com dedicação, madeira e precisão.
      </Typography>

      {/* Footer fixo */}
      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          textAlign: "center",
          fontSize: "0.9rem",
          color: "#bbb",
        }}
      >
        Site em desenvolvimento por{" "}
        <Link
          href="https://etronicdigitals.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{ color: "#f2c17d", fontWeight: 500 }}
        >
          Etronic Digitals
        </Link>
      </Box>
    </Box>
  );
};

export default Brevemente;
