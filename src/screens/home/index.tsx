// src/pages/Home.jsx
import { Box } from "@mui/material";
import HeroSection from "../../components/heroSection";
import { ServicesSection } from "./shards/servicesSections";
import { CTASection } from "./shards/ctaSection";
import CEOSection from "./shards/ceoSection";
import { useState } from "react";
import Loader from "../../components/loader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <Box>
          <HeroSection />
          <ServicesSection />
          <CEOSection />
          <CTASection />
        </Box>
      )}
    </>
  );
};

export default Home;
