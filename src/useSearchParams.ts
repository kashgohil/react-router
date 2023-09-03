import React from "react";

export function useSearchParams() {
  const searchParams = React.useMemo(() => {
    const searchParams: Record<string, string> = {};
    const search = new URLSearchParams(window.location.search);

    for (let [key, value] of search) {
      searchParams[key] = value;
    }

    return searchParams;
  }, [window.location.search]);

  return searchParams;
}
