import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";
const queryClient = new QueryClient();

const Example = () => {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
  axios.get(
    "/data"
  ).then((res) => res.data)
);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default function App() {
 

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        
        <Example />
      </div>
    </QueryClientProvider>
  );
}
