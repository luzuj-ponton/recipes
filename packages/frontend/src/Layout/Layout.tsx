import React from "react";

import { Nav } from "./Nav/Nav";
import { Wrapper } from "./Layout.styled";
import { LayoutProps } from "./Layout.types";
import { useLocation } from "react-router-dom";
import { Routes } from "src/enums/routes.enum";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const hideNavigaion = pathname === Routes.Login || pathname === Routes.Register;
  return (
    <Wrapper>
      {hideNavigaion ? null : <Nav />}
      {children}
    </Wrapper>
  );
};
