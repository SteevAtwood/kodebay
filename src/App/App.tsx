import React from "react";
import Header from "./Components/Header/Header";
import MainTitle from "./Components/MainTitle/MainTitle";
import EventDescription from "./Components/EventDescription/EventDescription";
import Prizes from "./Components/Prizes/Prizes";
import Schedule from "./Components/Schedule/Schedule";
import TargetAudience from "./Components/TargetAudience/TargetAudience";
import Registration from "./Components/Registration/Registration";
import ContactInfo from "./Components/ContactInfo/ContactInfo";
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <MainTitle />
      <Schedule />
      <EventDescription />
      <Prizes />

      <TargetAudience />
      <Registration />
      <ContactInfo />
      <FAQ />
      <Footer />
    </>
  );
};
