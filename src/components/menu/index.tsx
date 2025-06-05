import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const sections = [
  { label: "Serviços", id: "servicos" },
  { label: "Portfólio", id: "portfolio" },
  { label: "Contactos", id: "contactos" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleItemClick = (id: string) => {
    scrollToSection(id);
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          zIndex: 1100,
          height: 80,
          justifyContent: "center",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", height: "100%" }}>
          {/* Logótipo + nome */}
          <Box display="flex" alignItems="center">
            <img
              src="https://n5pyepg4aruaejgm.public.blob.vercel-storage.com/Design%20sem%20nome-ezkCEMRtGHbhhWt7Ezr1e7Nvy8AULS.png"
              alt="Logo"
              style={{ height: 50, marginRight: 12 }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Carpintarias Rui Leitão
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton edge="end" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box display="flex" alignItems="center">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  sx={{
                    color: "black",
                    fontWeight: 500,
                    mx: 1,
                    textTransform: "none",
                    "&:hover": {
                      color: "#a57242",
                    },
                  }}
                >
                  {section.label}
                </Button>
              ))}
              <Button
                variant="contained"
                sx={{
                  ml: 2,
                  backgroundColor: "#a57242",
                  color: "white",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#8b5e36",
                  },
                }}
                onClick={() => scrollToSection("contactos")}
              >
                Fala connosco
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer mobile */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ "& .MuiDrawer-paper": { width: 240 } }}
      >
        <List>
          {sections.map((section) => (
            <ListItem key={section.id} disablePadding>
              <ListItemButton onClick={() => handleItemClick(section.id)}>
                <ListItemText primary={section.label} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleItemClick("contactos")}
              sx={{ mt: 2 }}
            >
              <ListItemText
                primary="Fala connosco"
                primaryTypographyProps={{
                  fontWeight: "bold",
                  color: "#a57242",
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
