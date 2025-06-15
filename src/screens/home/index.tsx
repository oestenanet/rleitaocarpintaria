// src/pages/Home.jsx
import { Box } from "@mui/material";
import HeroSection from "../../components/heroSection";
import { useState } from "react";
import Loader from "../../components/loader";
import ServicesPage from "../services";
import About from "../aboutUs";
import Portfolio from "../portfolio";
import ContactSection from "../contact";
import Footer from "../../components/footer";

const Home = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <Box>
          <HeroSection />
          <About />
          <ServicesPage />
          <Portfolio />
          <ContactSection />
          <Footer />
        </Box>
      )}
    </>
  );
};

export default Home;
