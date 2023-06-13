
const routesPaths = import.meta.glob("@/views/bgm/pages/**/*.vue");

// 資料準備
const routes = Object.keys(routesPaths).map((routesPath) => {
  const path: string = routesPath.replace("/src/views/bgm/pages/", "bgm/").replace(".vue", "");
  return {
    path: path === "bgm/" ? "/bgm" : `/${path}`,
    name: path.replace(/\//g, "_"),
    component: routesPaths[routesPath]
  };
});
export default routes;
