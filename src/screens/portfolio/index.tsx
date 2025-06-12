import React from "react";
import Slider from "react-slick";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1600585152220-90363fe7e115", // cozinha
  "https://images.unsplash.com/photo-1616627562166-9b6b7ffdf179", // armário
  "https://images.unsplash.com/photo-1601979031925-18bdeff3a43e", // detalhe madeira
];

const Portfolio: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <Box
      id="portfolio"
      sx={{
        bgcolor: "#1e1207",
        color: "white",
        py: 10,
        px: 3,
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Portfólio
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: "#c1b1a1" }}>
          Veja alguns dos nossos trabalhos recentes em cozinhas personalizadas.
        </Typography>
      </motion.div>

      <Box sx={{ maxWidth: 800, mx: "auto", mb: 6 }}>
        <Slider {...settings}>
          {images.map((src, i) => (
            <Box
              key={i}
              sx={{
                px: 2,
                "& img": {
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: 3,
                  height: { xs: 220, md: 400 },
                  objectFit: "cover",
                },
              }}
            >
              <img src={src} alt={`Projeto ${i + 1}`} />
            </Box>
          ))}
        </Slider>
      </Box>

      <Button
        variant="outlined"
        sx={{
          borderColor: "#a57242",
          color: "#a57242",
          "&:hover": {
            bgcolor: "#a57242",
            color: "#fff",
          },
        }}
        size="large"
        href="https://www.instagram.com/seu_instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver mais no Instagram
      </Button>
    </Box>
  );
};

export default Portfolio;
