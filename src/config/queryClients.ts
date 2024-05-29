import { QueryClient } from "@tanstack/react-query";

const oneHour = 60 * 60 * 1000;

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: oneHour,
      gcTime: oneHour,
    },
  },
});
