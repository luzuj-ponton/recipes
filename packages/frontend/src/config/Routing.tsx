import React from "react";

import { Route, Switch } from "react-router-dom";

import { Routes } from "@/enums/routes.enum";

export const Routing: React.FC = () => {
  return (
    <Switch>
      <Route path={Routes.AddRecipe} />
      <Route path={Routes.EditRecipe} />
      <Route path={Routes.Recipe} />
      <Route path={Routes.Login} />
      <Route path={Routes.Register} />
      {/* <Route path="/" component={Layout} /> */}
    </Switch>
  );
};
