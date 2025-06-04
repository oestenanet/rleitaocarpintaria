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
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Carpintarias Rui Leitão
          </Typography>

          {isMobile ? (
            <IconButton edge="end" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box>
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
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer lateral */}
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
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
