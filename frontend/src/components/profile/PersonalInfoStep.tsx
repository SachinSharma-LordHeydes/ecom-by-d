import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { PersonalInfo } from './AddressStep';

interface PersonalInfoStepProps {
  onNext: (data: PersonalInfo) => void;
  initialData?: PersonalInfo;
}

const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({ onNext, initialData }) => {
  const form = useForm<PersonalInfo>({
    defaultValues: initialData || {
      firstName: '',
      lastName: '',
      phoneNumber: ''
    }
  });

  const onSubmit = (data: PersonalInfo) => {
    onNext(data);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
        <p className="text-gray-600">Step 1 of 2 - Tell us about yourself</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="firstName"
            rules={{ required: "First name is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            rules={{ required: "Last name is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            rules={{
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Please enter a valid 10-digit phone number"
              }
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Next Step
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PersonalInfoStep;
