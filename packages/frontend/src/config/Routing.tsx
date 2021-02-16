import React from "react";

import { Route, Switch } from "react-router-dom";
import { Login } from "src/Views/auth/Login";
import { Register } from "src/Views/auth/Register";

import { Routes } from "../enums/routes.enum";
import { Layout } from "../Layout/Layout";

export const Routing: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path={Routes.AddRecipe} />
        <Route path={Routes.EditRecipe} />
        <Route path={Routes.Recipe} />
        <Route path={Routes.Login} component={Login} />
        <Route path={Routes.Register} component={Register} />
        <Route path={Routes.Home} />
      </Switch>
    </Layout>
  );
};
