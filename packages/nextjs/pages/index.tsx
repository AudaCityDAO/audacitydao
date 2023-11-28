import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import PropertyProjects from "~~/components/home/PropertyProjects";
import { audaciousProjects, propertyProjects } from "~~/constants";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <PropertyProjects name="Property Projects" data={propertyProjects} />
      <PropertyProjects name="Audacious Projects" data={audaciousProjects} />
    </>
  );
};

export default Home;
