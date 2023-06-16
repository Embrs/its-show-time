const routesPaths = import.meta.glob("@/views/web/pages/**/*.vue");

// 資料準備
const routes = Object.keys(routesPaths).map((routesPath) => {
  const path: string = routesPath.replace("/src/views/web/pages/", "").replace(".vue", "");
  return {
    path: path === "home" ? "/" : `/${path}`,
    name: path.replace(/\//g, "_"),
    component: routesPaths[routesPath]
  };
});
export default routes;
