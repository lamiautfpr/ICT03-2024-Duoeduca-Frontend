import { appRoutes } from "../constants/appRoutes";

export function checkIsPublicRoute(asPath: string) {
  const appPublicRoutes = Object.values(appRoutes.public);

  return appPublicRoutes.includes(asPath);
}