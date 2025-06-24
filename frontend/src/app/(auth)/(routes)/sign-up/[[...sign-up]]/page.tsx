// SignUpPage.tsx
"use client";

import { SignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import { useAuth, useUser } from '@clerk/nextjs';
import { createApolloClient } from '@/lib/apolloClient';
import { useEffect } from 'react';

const SIGNUP_USER = gql`
  mutation SignupUser($signupInput: SignUpInput!) {
    signupUser(signupInput: $signupInput) {
      id
      clerkId
      email
      role
      hasProfile # Add this field
    }
  }
`;

export default function SignUpPage() {
  const router = useRouter();
  const { isSignedIn, getToken } = useAuth();
  const { user } = useUser();
  const client = createApolloClient();
  const [signupUser, { data, error }] = useMutation(SIGNUP_USER, { client });

  useEffect(() => {
    if (isSignedIn && user) {
      const createUser = async () => {
        try {
          await signupUser({
            variables: {
              signupInput: {
                email: user.primaryEmailAddress?.emailAddress,
                password: '',
              },
            },
          });
          router.push('/');
        } catch (err) {
          console.error('Error creating user:', err);
        }
      };
      createUser();
    }
  }, [isSignedIn, user, signupUser, router]);

  useEffect(() => {
    if (data) {
      console.log('User created in MongoDB:', data.signupUser);
      if (data.signupUser && !data.signupUser.hasProfile) {
        router.push('/create-profile');
      } else {
        router.push('/');
      }
    }
    if (error) {
      console.error('Error creating user:', error);
    }
  }, [data, error, router]);

  return (
    <div>
      <SignUp
        afterSignUpUrl="/create-profile" // Temporary redirect
        redirectUrl="/create-profile"    // Temporary redirect
      />
    </div>
  );
}