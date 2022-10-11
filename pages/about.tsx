import type { NextPage } from "next";

import Layout from "@components/templates/Layout";
import AboutPage from "@components/organisms/AboutPage";

const About: NextPage = () => {
  return (
    <Layout
      hasInformationalAlert={false}
      hasFooter={true}
      className="items-center justify-center"
      metaData={{ title: "About" }}
    >
      <AboutPage />
    </Layout>
  );
};

export default About;
