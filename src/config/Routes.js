import { Home, About, Projects } from "../page/AllPages";

const ROUTES = {
  HOME: "/",
  ABOUT: "About",
  PROJECTS: "Projects",
};

const ROUTES_CONFIG = [
  {
    path: ROUTES.HOME,
    page: Home,
  },
  {
    path: ROUTES.ABOUT,
    page: About,
  },
  {
    path: ROUTES.PROJECTS,
    page: Projects,
  },
];

export default ROUTES;
export { ROUTES_CONFIG };
