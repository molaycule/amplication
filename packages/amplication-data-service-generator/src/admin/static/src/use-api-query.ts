import { useQuery, QueryResult } from "react-query";
import { getHeaders } from "./api.util";

export function useAPIQuery<T>(
  key: string,
  path: string,
  init?: RequestInit
): QueryResult<T, Error> {
  return useQuery<T, Error>(key, async () => {
    const headers = getHeaders(init?.headers);
    return fetch(path, { ...init, headers }).then((res) => res.json());
  });
}
