import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60, // 1hr
      cacheTime: 1000 * 60 * 60, // 1hr
      retry: 1, // Retry failed queries once
      refetchOnWindowFocus: false, // Disable refetch on window focus
      refetchOnReconnect: true, // Refetch on reconnect
      refetchOnMount: false, // Disable refetch on component mount
    },
    mutations: {
      retry: 1, // Retry mutations once
    },
  },
});

export default queryClient;
