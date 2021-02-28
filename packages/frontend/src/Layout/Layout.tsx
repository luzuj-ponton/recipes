import React from "react";

import { Nav } from "./Nav/Nav";
import { Newsletter } from "./Newsletter/Newsletter";
import { Footer } from "./Footer/Footer";
import { Wrapper } from "./Layout.styled";
import { LayoutProps } from "./Layout.types";

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Wrapper>
    <Nav />
    {children}
    <Newsletter />
    <Footer />
  </Wrapper>
);
