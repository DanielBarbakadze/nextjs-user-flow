import type { NextPage } from "next";

import Layout from "@components/templates/Layout";
import LoginPage from "@components/organisms/LoginPage";

const Home: NextPage = () => {
  return (
    <Layout
      hasInformationalAlert={false}
      hasFooter={true}
      className="items-center justify-center"
      metaData={{ title: "Login" }}
    >
      <LoginPage />
    </Layout>
  );
};

export default Home;
