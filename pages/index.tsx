import type { NextPage } from "next";

import Layout from "@components/templates/Layout";
import HomePage from "@components/organisms/HomePage";

const Home: NextPage = () => {
  return (
    <Layout
      hasInformationalAlert={true}
      hasFooter={true}
      className="items-center justify-center"
    >
      <main>
        <HomePage />
      </main>
    </Layout>
  );
};

export default Home;
