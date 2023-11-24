import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import PropertyProjects from "~~/components/home/PropertyProjects";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <PropertyProjects name="Property Projects" />
      <PropertyProjects name="Audacious Projects" />
    </>
  );
};

export default Home;
