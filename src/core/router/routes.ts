import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  list: string;
  detail: string;
}

export const switchRoutes: SwitchRoutes = {
  list: "/",
  detail: "detail/:id",
};

interface Routes extends Omit<SwitchRoutes, "detail"> {
  detail: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  detail: (id: string) => generatePath(switchRoutes.detail, { id }),
};
