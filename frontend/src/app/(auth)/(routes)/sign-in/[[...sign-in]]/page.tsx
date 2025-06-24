// SignInPage.tsx
"use client";

import { createApolloClient } from "@/lib/apolloClient";
import { gql, useQuery } from "@apollo/client";
import { SignIn, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

const ME_QUERY = gql`
  query Me {
    me {
      id
      clerkId
      email
      role
      hasProfile # Add this field to track profile completion
    }
  }
`;

export default function SignInPage() {
  const router = useRouter();
  const { isSignedIn, getToken } = useAuth();

  console.log("token on signin --->",getToken())

  const client = useMemo(() => createApolloClient(getToken), [getToken]);

  const { data, error, loading } = useQuery(ME_QUERY, {
    client,
    skip: !isSignedIn,
  });

  useEffect(() => {
    if (data && !loading) {
      console.log('User fetched:', data.me);
      if (data.me && !data.me.hasProfile) {
        router.push('/create-profile');
      } else {
        router.push('/');
      }
    }
    if (error) {
      console.error('Error fetching user:', error);
    }
  }, [data, error, loading, router]);

  return (
    <div>
      <SignIn
        afterSignInUrl="/create-profile" // Temporary redirect
        redirectUrl="/create-profile"    // Temporary redirect
      />
    </div>
  );
}