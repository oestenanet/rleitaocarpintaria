import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source
          src="https://player.vimeo.com/external/7492602.sd.mp4"
          type="video/mp4"
        />
        O seu navegador não suporta vídeos HTML5.
      </video>

      {/* Sobreposição escura para melhor legibilidade */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 0,
        }}
      />

      {/* Conteúdo da hero section */}
      <Box sx={{ zIndex: 1, px: 2 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Transformamos madeira em arte para o seu lar.
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Projetos personalizados de carpintaria que refletem o seu estilo.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 4 }}
          onClick={() => {
            const element = document.getElementById("servicos");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Ver Serviços
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
