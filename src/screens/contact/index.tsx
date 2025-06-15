import React from "react";
import { Box, Grid, Typography, Link, Button } from "@mui/material";
import { motion } from "framer-motion";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const ContactSection: React.FC = () => {
  return (
    <Box
      id="contactos"
      sx={{
        bgcolor: "#1e1207",
        color: "#fff",
        py: 10,
        px: { xs: 3, md: 6 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
          Contactos
        </Typography>
      </motion.div>

      <Grid
        container
        spacing={6}
        maxWidth="lg"
        mx="auto"
        alignItems="center"
        justifyContent="center"
      >
        {/* Contact Info */}
        <Grid size={{ xs: 12, md: 5 }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography variant="h6" gutterBottom>
              <RoomIcon sx={{ verticalAlign: "middle", mr: 1 }} />
              Caldas da Rainha, Portugal
            </Typography>
            <Typography variant="h6" gutterBottom>
              <PhoneIcon sx={{ verticalAlign: "middle", mr: 1 }} />
              <Link
                href="tel:+351912345678"
                sx={{ color: "#fff", textDecoration: "none" }}
              >
                +351 915 308 156
              </Link>
            </Typography>
            <Typography variant="h6" gutterBottom>
              <EmailIcon sx={{ verticalAlign: "middle", mr: 1 }} />
              <Link
                href="mailto:rmcleitao@gmail.com"
                sx={{ color: "#fff", textDecoration: "none" }}
              >
                rmcleitao@gmail.com
              </Link>
            </Typography>
            <Typography variant="body1" sx={{ mt: 4, color: "#d4c3b8" }}>
              Estamos disponíveis para esclarecer dúvidas ou agendar uma visita
              ao seu projeto.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              href="https://api.whatsapp.com/send/?phone=%2B351915308156&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                mt: 2,
                borderColor: "white",
                color: "white",
                "&:hover": {
                  borderColor: "lightGrey",
                  color: "lightGrey",
                },
              }}
            >
              Contacte-nos
            </Button>
          </motion.div>
        </Grid>

        {/* Google Map Embed */}
        <Grid size={{ xs: 12, md: 7 }}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                width: "100%",
                height: { xs: 300, md: 400 },
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 3,
              }}
            >
              <iframe
                title="Google Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3123.573316759044!2d-8.630908684652812!3d40.64050587933715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd232dc1cf8fd9a7%3A0x8b300e385d0f53f!2sAveiro!5e0!3m2!1spt-PT!2spt!4v1717535630000!5m2!1spt-PT!2spt"
              ></iframe>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
