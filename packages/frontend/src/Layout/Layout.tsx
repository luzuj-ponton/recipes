import React from "react";

import { Nav } from "./Nav/Nav";
import { Wrapper } from "./Layout.styled";
import { LayoutProps } from "./Layout.types";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <Nav />
      {children}
    </Wrapper>
  );
};
