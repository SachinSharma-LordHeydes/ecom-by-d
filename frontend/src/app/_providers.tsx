"use client";

import { ApolloProvider } from "@apollo/client";
import { useAuth } from "@clerk/nextjs";
import { createApolloClient } from "@/lib/apolloClient";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const { getToken } = useAuth();
  const [client, setClient] = useState<any>(null);

  useEffect(() => {
    const setup = async () => {
      const token = await getToken();
      setClient(createApolloClient(token || ""));
    };
    setup();
  }, []);

  if (!client) return null;

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
