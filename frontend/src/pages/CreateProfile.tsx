"use client";
import AddressStep, {
  AddressInfo,
  PersonalInfo,
  ProfileData,
} from "@/components/profile/AddressStep";
import PersonalInfoStep from "@/components/profile/PersonalInfoStep";
import { useToast } from "@/hooks/use-toast";
import { createApolloClient } from "@/lib/apolloClient";
import { gql, useMutation } from "@apollo/client";
import { useAuth } from "@clerk/nextjs"; // Import useAuth
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react"; // Import useMemo

const CREATE_PROFILE = gql`
  mutation CreateProfile($input: CreateProfileInput!) {
    createProfile(input: $input) {
      id
      firstName
      lastName
      phoneNumber
    }
  }
`;

const CREATE_ADDRESS = gql`
  mutation createAddress($input: CreateAddressInput!) {
    createAddress(input: $input) {
      provinceNumber
      addressLabel
      provinceName
      pinCode
      locality
      city
      landMark
    }
  }
`;

const CreateProfile: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  // Get getToken from useAuth
  const { getToken } = useAuth();

  // Create Apollo client with getToken
  const client = useMemo(() => createApolloClient(getToken), [getToken]);

  const [createProfile, { loading, error, data }] = useMutation(
    CREATE_PROFILE,
    { client }
  );

  const [createAddress] = useMutation(CREATE_ADDRESS, { client });

  const handlePersonalInfoNext = (data: PersonalInfo) => {
    setPersonalInfo(data);
    setCurrentStep(2);
  };

  const handleAddressComplete = async (addressData: AddressInfo) => {
    if (!personalInfo) return;

    const profileData: ProfileData = {
      personalInfo,
      address: addressData,
    };

    console.log("Profile data to save:", profileData);

    try {
      await createProfile({
        variables: { input: personalInfo },
      });

      await createAddress({
        variables: { input: addressData },
      });

      toast({
        title: "Profile Created Successfully!",
        description: "Your profile has been set up.",
      });

      router.push("/");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "Error",
        description: "Failed to save profile.",
        variant: "destructive",
      });
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-2xl">
        {/* Progress indicator */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex items-center justify-between">
            <div
              className={`flex items-center ${
                currentStep >= 1 ? "text-primary" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= 1 ? "bg-primary text-white" : "bg-gray-200"
                }`}
              >
                1
              </div>
              <span className="ml-2 text-sm">Personal Info</span>
            </div>

            <div
              className={`flex-1 h-1 mx-4 ${
                currentStep >= 2 ? "bg-primary" : "bg-gray-200"
              }`}
            />

            <div
              className={`flex items-center ${
                currentStep >= 2 ? "text-primary" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= 2 ? "bg-primary text-white" : "bg-gray-200"
                }`}
              >
                2
              </div>
              <span className="ml-2 text-sm">Address</span>
            </div>
          </div>
        </div>

        {/* Step content */}
        {currentStep === 1 ? (
          <PersonalInfoStep
            onNext={handlePersonalInfoNext}
            initialData={personalInfo || undefined}
          />
        ) : (
          <AddressStep onComplete={handleAddressComplete} onBack={handleBack} />
        )}
      </div>
    </div>
  );
};

export default CreateProfile;
