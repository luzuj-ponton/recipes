import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { Routes } from "src/enums/routes.enum";
import { StorageKeys } from "src/enums/storageKeys.enum";
import { useLocalStorage } from "src/hooks/useLocalStorage";

interface ProtecedRouteProps extends RouteProps {
  component: React.FC;
}

export function ProtectedRoute({ component: Component, ...rest }: ProtecedRouteProps): JSX.Element {
  const [isAuthenticated] = useLocalStorage(StorageKeys.Token);
  return <Route {...rest}>{isAuthenticated ? <Component /> : <Redirect to={Routes.Home} />}</Route>;
}
