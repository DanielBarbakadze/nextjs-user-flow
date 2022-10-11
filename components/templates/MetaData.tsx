import Head from "next/head";

export type MetaDataProps = {
  title?: string;
  description?: string;
  indexable?: boolean;
};

const MetaData = ({
  title = "GFE: Code Challenge",
  description = "Created for Geld Fuer Eauto code challenge",
  indexable = true,
}: MetaDataProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="robots"
        content={indexable ? "index, follow" : "noindex,nofollow"}
      />
    </Head>
  );
};

export default MetaData;
