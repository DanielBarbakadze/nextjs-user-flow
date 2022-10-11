import type { NextPage } from "next";

import Layout from "@components/templates/Layout";
import RegisterPage from "@components/organisms/RegisterPage";

const Home: NextPage = () => {
  return (
    <Layout
      hasInformationalAlert={false}
      hasFooter={true}
      className="items-center mt-32 md:mt-64"
      metaData={{ title: "Registration Flow" }}
    >
      <RegisterPage />
    </Layout>
  );
};

export default Home;
