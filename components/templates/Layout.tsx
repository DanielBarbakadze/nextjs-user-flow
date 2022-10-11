import { memo } from "react";

import LayoutContent, { LayoutProps } from "./LayoutContent";

const Layout = (props: LayoutProps) => {
  return (
    // Wrap with Providers HERE in future if needed
    <LayoutContent {...props} />
  );
};

export default memo(Layout);
