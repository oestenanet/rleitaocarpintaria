import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import KitchenIcon from "@mui/icons-material/Kitchen";
import DoorFrontIcon from "@mui/icons-material/DoorFront";
import CheckroomIcon from "@mui/icons-material/Checkroom";

const servicos = [
  {
    titulo: "Cozinhas",
    descricao:
      "Desenhamos e construímos cozinhas por medida, funcionais e esteticamente marcantes. Utilizamos materiais de alta qualidade e trabalhamos cada detalhe para criar espaços únicos, confortáveis e adaptados ao seu dia a dia.",
    icon: <KitchenIcon sx={{ fontSize: 60, color: "#f2c17d" }} />,
  },
  {
    titulo: "Roupeiros",
    descricao:
      "Criamos roupeiros embutidos ou modulares, sempre com foco na organização e aproveitamento de espaço. Personalize com portas de correr, interiores ajustáveis e acabamentos à sua medida. Funcionalidade com elegância.",
    icon: <CheckroomIcon sx={{ fontSize: 60, color: "#f2c17d" }} />,
  },
  {
    titulo: "Portas",
    descricao:
      "Produzimos portas interiores e exteriores em madeira maciça ou folheada, com acabamento artesanal. Oferecemos soluções seguras, duradouras e visualmente harmoniosas com o restante ambiente da sua casa.",
    icon: <DoorFrontIcon sx={{ fontSize: 60, color: "#f2c17d" }} />,
  },
];

const scrollToContactos = () => {
  const el = document.getElementById("contactos");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const ServicesPage: React.FC = () => {
  return (
    <Box
      id="servicos"
      sx={{
        bgcolor: "#2c1b0c",
        color: "white",
        py: 10,
        px: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Os nossos serviços
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ mb: 6, maxWidth: 700, mx: "auto", color: "#ddd" }}
      >
        Transformamos madeira em soluções únicas para o seu espaço. Conheça o
        que podemos criar para si.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {servicos.map((servico, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Card
              sx={{
                bgcolor: "#3a2614",
                color: "white",
                height: "100%",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                },
              }}
              elevation={4}
            >
              <CardContent sx={{ textAlign: "center", p: 4 }}>
                <Box mb={2}>{servico.icon}</Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {servico.titulo}
                </Typography>
                <Typography variant="body2" sx={{ color: "#ccc" }}>
                  {servico.descricao}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Botão fale connosco */}
      <Box mt={8}>
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: "#a57242",
            color: "white",
            textTransform: "none",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            "&:hover": {
              bgcolor: "#8d5c33",
            },
          }}
          onClick={scrollToContactos}
        >
          Fale connosco
        </Button>
      </Box>
    </Box>
  );
};

export default ServicesPage;
