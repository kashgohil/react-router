import React from "react";
import { useSearchParams } from "./useSearchParams";

export function getPathParams(pathname: string) {
  const pathParams: string[] = [];
  let path = "";

  for (let index = 0; index < pathname.length; index++) {
    if (index === 0 && pathname[index] === "/") {
      continue;
    } else if (pathname[index] === "/") {
      pathParams.push(path);
      path = "";
    } else {
      path = path + pathname[index];
    }
  }

  return pathParams;
}

export function useParams() {
  const searchParams = useSearchParams();

  const params = React.useMemo(() => {
    const { hash, origin, pathname } = window.location;

    const pathParams = getPathParams(pathname);

    return { pathParams, hash, origin };
  }, [window.location.href]);

  return { ...params, searchParams };
}
