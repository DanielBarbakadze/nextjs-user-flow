import { Alert } from "antd";
import classNames from "classnames";

import Header from "@components/organisms/Header";
import Footer from "@components/organisms/Footer";

import MetaData, { MetaDataProps } from "./MetaData";

export type LayoutProps = {
  className?: string;
  hasHeader?: boolean;
  hasFooter?: boolean;
  metaData?: MetaDataProps;
  children: React.ReactNode;
  hasInformationalAlert?: boolean;
};

const MESSAGE_TEXT = "This is code challenge for GFE(Geld für eAuto) company";

const LayoutContent = ({
  className,
  hasHeader = true,
  hasFooter = true,
  metaData,
  children,
  hasInformationalAlert = false,
}: LayoutProps) => {
  return (
    <>
      <MetaData {...metaData} />

      <div className="flex flex-col justify-between min-h-screen">
        <div className="flex flex-col grow">
          {hasInformationalAlert && (
            <Alert banner closable type="info" message={MESSAGE_TEXT} />
          )}

          {hasHeader && <Header />}

          <main className={classNames("main flex flex-col grow", className)}>
            {children}
          </main>
        </div>

        {hasFooter && <Footer />}
      </div>
    </>
  );
};

export default LayoutContent;
