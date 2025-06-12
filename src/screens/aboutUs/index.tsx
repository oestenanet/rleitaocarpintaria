import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <Box
      id="sobre"
      sx={{
        bgcolor: "#f9f6f3", // fundo claro tipo madeira clara
        color: "#1e1207", // texto castanho escuro
        py: 10,
        px: 3,
      }}
    >
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="center"
        maxWidth="lg"
        mx="auto"
      >
        {/* Texto com animação */}
        <Grid size={{ xs: 12, md: 7 }}>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Sobre nós
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#3a2b1a", lineHeight: 1.8 }}
            >
              Com décadas de experiência na arte da carpintaria, a{" "}
              <strong>Carpintarias Rui Leitão</strong> destaca-se pela
              dedicação, precisão e paixão com que transforma madeira em obras
              únicas.
              <br />
              <br />
              Cada projeto é personalizado, desenhado com atenção ao detalhe e
              executado com os melhores materiais, garantindo qualidade,
              durabilidade e beleza.
              <br />
              <br />
              Desde cozinhas modernas até portas clássicas, colocamos sempre o
              cliente no centro, ouvindo, aconselhando e superando expectativas.
            </Typography>
          </motion.div>
        </Grid>

        {/* Imagem com animação */}
        <Grid size={{ xs: 12, md: 5 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Box display="flex" justifyContent="center">
              <Avatar
                alt="Imagem de carpintaria"
                src="https://n5pyepg4aruaejgm.public.blob.vercel-storage.com/IMG_1108-mK5KIilCLmc3j2GvQcWVdeo2UpNvzf.JPG"
                variant="rounded"
                sx={{
                  width: { xs: 280, md: 380 },
                  height: { xs: 200, md: 260 },
                  boxShadow: 4,
                }}
              />
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
