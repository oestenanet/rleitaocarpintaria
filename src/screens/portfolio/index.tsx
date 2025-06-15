import React, { useState } from "react";
import { Box, Typography, Grid, Button, Dialog } from "@mui/material";
import { motion } from "framer-motion";

const images = [
  "https://n5pyepg4aruaejgm.public.blob.vercel-storage.com/IMG_1109-Uc5S6OUP0gjbPYMkXfHMzQe3iWnuvf.JPG",
  "https://n5pyepg4aruaejgm.public.blob.vercel-storage.com/IMG_1122-uut8yLRaKKgKAmEIdY6BrafTCM4Boc.JPG",
  "https://n5pyepg4aruaejgm.public.blob.vercel-storage.com/IMG_1105-toKF9HBwokpWeXYDav4vo9ZFcsuyBr.JPG",
  "https://n5pyepg4aruaejgm.public.blob.vercel-storage.com/IMG_1034-XXfnzcWhb4WH25tku25xb9vu0HCBha.JPG",
  "https://n5pyepg4aruaejgm.public.blob.vercel-storage.com/IMG_1040-fatcpTFgaXI7my4TxLiUzC8MB6uwPM.JPG",
  "https://n5pyepg4aruaejgm.public.blob.vercel-storage.com/IMG_1057-YGBAPQyJ7dypp8m5BsYZHK89xIHUiS.JPG",
  "https://n5pyepg4aruaejgm.public.blob.vercel-storage.com/IMG_1080-L548rwhk2fUvmH3VEYeimHfZrI7GT7.JPG",
  "https://n5pyepg4aruaejgm.public.blob.vercel-storage.com/IMG_1081-7OGQSLx5IzdU51q2SZAi5guk6woIw0.JPG",
];

const Portfolio: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpen = (src: string) => {
    setSelectedImage(src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box
      id="portfolio"
      sx={{
        bgcolor: "#f5f5f5",
        color: "#1e1207",
        py: 10,
        px: { xs: 2, md: 6 },
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Portfólio
        </Typography>
        <Typography
          variant="h6"
          sx={{ mb: 6, maxWidth: 700, mx: "auto", color: "#4d3a2a" }}
        >
          Projetos que refletem a nossa paixão pela carpintaria. Cada peça é
          feita com rigor, detalhe e dedicação.
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center">
        {images.map((src, i) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              style={{
                overflow: "hidden",
                borderRadius: "16px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
                cursor: "pointer",
              }}
              onClick={() => handleOpen(src)}
            >
              <img
                src={src}
                alt={`Projeto ${i + 1}`}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box mt={6}>
        <Button
          variant="contained"
          size="large"
          href="https://www.instagram.com/carpintariasrleitao/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            bgcolor: "#a57242",
            color: "#fff",
            px: 4,
            fontWeight: 600,
            "&:hover": {
              bgcolor: "#8d5f35",
            },
          }}
        >
          Ver mais
        </Button>
      </Box>

      {/* Modal da Imagem */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        PaperProps={{
          sx: {
            bgcolor: "transparent",
            boxShadow: "none",
            p: 0,
            display: "flex",
            justifyContent: "center",
          },
        }}
      >
        <Box
          component="img"
          src={selectedImage ?? ""}
          alt="Imagem ampliada"
          sx={{
            maxWidth: "90vw",
            maxHeight: "90vh",
            borderRadius: 2,
            boxShadow: 4,
          }}
        />
      </Dialog>
    </Box>
  );
};

export default Portfolio;
