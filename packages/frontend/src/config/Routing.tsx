import React from "react";

import { Route, Switch } from "react-router-dom";

import { Routes } from "../enums/routes.enum";
import { Layout } from "../Layout/Layout";

export const Routing: React.FC = () => {
  return (
<<<<<<< Updated upstream
    <Switch>
      <Route path={Routes.AddRecipe} />
      <Route path={Routes.EditRecipe} />
      <Route path={Routes.Recipe} />
      <Route path={Routes.Login} />
      <Route path={Routes.Register} />
      <Route path="/" component={Layout} />
    </Switch>
=======
    <>
      <Layout />
      <Switch>
        <Route path={Routes.AddRecipe} />
        <Route path={Routes.EditRecipe} />
        <Route path={Routes.Recipe} />
        <Route path={Routes.Login} />
        <Route path={Routes.Register} />
        <Route path={Routes.Home} />
      </Switch>
    </>
>>>>>>> Stashed changes
  );
};
