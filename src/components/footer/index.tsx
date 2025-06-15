import React from "react";
import { Box, Typography, Link, IconButton, Stack } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0f0a05",
        color: "#fff",
        pt: 6,
        pb: 3,
        px: 3,
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Nome e contacto */}
        <Typography variant="h6" gutterBottom>
          Carpintarias Rui Leitão
        </Typography>
        <Typography variant="body2" color="gray" mb={2}>
          Caldas da Rainha, Portugal{" | "}
          <Link
            href="tel:+351912345678"
            sx={{ color: "#d4c3b8", textDecoration: "none" }}
          >
            +351 915 308 156
          </Link>
          {" | "}
          <Link
            href="rmcleitao@gmail.com"
            sx={{ color: "#d4c3b8", textDecoration: "none" }}
          >
            rmcleitao@gmail.com
          </Link>
        </Typography>

        {/* Redes sociais */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mb: 3 }}
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <IconButton
              component="a"
              href="https://www.instagram.com/carpintariasrleitao/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#d4c3b8" }}
            >
              <InstagramIcon />
            </IconButton>
          </motion.div>

          {/* Facebook opcional */}
          <motion.div whileHover={{ scale: 1.2 }}>
            <IconButton
              component="a"
              href="https://www.facebook.com/carpintariasruileitao"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#d4c3b8" }}
            >
              <FacebookIcon />
            </IconButton>
          </motion.div>
        </Stack>

        {/* Créditos finais */}
        <Typography variant="caption" sx={{ color: "#999" }}>
          © {new Date().getFullYear()} Todos os direitos reservados.
          <br />
          Desenvolvido por{" "}
          <Link
            href="https://etronicdigitals.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#a57242",
              textDecoration: "none",
              fontWeight: 500,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Etronic Digitals
          </Link>
        </Typography>
      </motion.div>
    </Box>
  );
};

export default Footer;
