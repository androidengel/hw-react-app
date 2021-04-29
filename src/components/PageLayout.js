import React from "react";
import GlobalStyles from "../styles/GlobalStyles";

const PageLayout = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
);

export default PageLayout;
