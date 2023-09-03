import React from "react";
import { useParams } from "./useParams";

interface RouteParams {
  path: string;
  optional: boolean;
  constant: boolean;
}

export function getRouteParams(route: string) {
  const routeParams: RouteParams[] = [];
  let path = "";

  for (let index = 0; index < route.length; index++) {
    if (index === 0 && route[index] === "/") {
      continue;
    } else if (route[index] === "/") {
      routeParams.push({
        path,
        constant: !!path && path[0] !== ":",
        optional: !!path && path[path.length - 1] === "?",
      });

      path = "";
    } else {
      path = path + route[index];
    }
  }

  return routeParams;
}

export function matchParams(pathParams: string[], routeParams: RouteParams[]) {
  let answer = true;

  for (let index = 0; index < routeParams.length; index++) {
    const { path, optional, constant } = routeParams[index];
    const pathParam = pathParams[index];

    if (constant) {
      answer = answer && path === pathParam;
    } else if (optional) {
      continue;
    } else {
      answer = answer && !!pathParam;
    }

    if (!answer) return false;
  }

  return true;
}

export function useRouter(configuration: Record<string, React.FC>) {
  const { pathParams } = useParams();

  const Component = React.useMemo(() => {
    for (let path of Object.keys(configuration)) {
      const routeParams = getRouteParams(path);

      if (matchParams(pathParams, routeParams)) {
        return configuration[path];
      }
    }
  }, [window.location.pathname]);

  return Component;
}
