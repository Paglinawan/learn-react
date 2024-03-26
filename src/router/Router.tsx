import { Routes, Route } from "react-router-dom";
import { pageRoutes } from "./PageRoutes";

const Router = () => {
  return (
    <Routes>
      {pageRoutes.map((route) => {
        return (
          <Route key={route.path} path={route.path} element={route.children} />
        );
      })}
    </Routes>
  );
};

export default Router;
