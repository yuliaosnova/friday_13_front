import { useEffect, useRef, useState } from "react";

import * as API from "../servises/api.js";
import  { Gallery } from "../components/DealsGallery/DealsGallery.jsx";
import Hero from "../components/Hero/Hero.jsx";

const HomePage = () => {
  const [deals, setDeals] = useState([]);

  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

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
      <Hero onClick={handleClick} />
		<Gallery ref={ref} deals={deals} />
    </>
  );
};

export default HomePage;
