// src/pages/Home.jsx
import { Box } from "@mui/material";
import HeroSection from "../../components/heroSection";
import { useState } from "react";
import Loader from "../../components/loader";
import ServicesPage from "../services";
import About from "../aboutUs";
import Portfolio from "../portfolio";

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
          {/* 
          <CEOSection />
          <CTASection /> */}
        </Box>
      )}
    </>
  );
};

export default Home;
