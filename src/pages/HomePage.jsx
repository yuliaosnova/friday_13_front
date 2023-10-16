import { useEffect, useState } from "react";

import * as API from "../servises/api.js";
import DealsGallery from "../components/DealsGallery/DealsGallery.jsx";

import Hero from "../components/Hero/Hero.jsx";

const HomePage = () => {
  const [deals, setDeals] = useState([]);
  useEffect(() => {
    API.fetchDeals()
      .then((response) => {
        setDeals(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Hero />
      <DealsGallery deals={deals} />
    </>
  );
};

export default HomePage;
