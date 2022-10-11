import { Route, Routes } from "react-router-dom";
import { ROUTES_CONFIG } from "./config/Routes";

function RoutesLib() {
  return (
    <Routes>
      {ROUTES_CONFIG.map((route) => {
        const Page = route.page;
        return <Route key={Page} path={route.path} element={<Page />}></Route>;
      })}
    </Routes>
  );
}

export default RoutesLib;