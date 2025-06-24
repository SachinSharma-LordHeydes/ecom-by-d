// "use client"

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { useForm } from "react-hook-form";

const PROVINCE_MAP: Record<string, string> = {
  "01": "Koshi Province",
  "02": "Madhesh Province",
  "03": "Bagmati Province",
  "04": "Gandaki Province",
  "05": "Lumbini Province",
  "06": "Karnali Province",
  "07": "Sudurpashchim Province",
};

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface AddressInfo {
  provinceNumber: string;
  addressLabel: string;
  provinceName: string;
  pinCode: string;
  locality: string;
  city: string;
  landMark?: string;
}

export interface ProfileData {
  personalInfo: PersonalInfo;
  address: AddressInfo;
}

interface AddressStepProps {
  onComplete: (data: AddressInfo) => void;
  onBack: () => void;
  initialData?: AddressInfo;
}

const AddressStep: React.FC<AddressStepProps> = ({
  onComplete,
  onBack,
  initialData,
}) => {
  const form = useForm<AddressInfo>({
    defaultValues: initialData || {
      provinceNumber: "",
      addressLabel: "",
      provinceName: "",
      pinCode: "",
      locality: "",
      city: "",
      landMark: "",
    },
  });

  const watchProvinceNumber = form.watch("provinceNumber");

  React.useEffect(() => {
  if (watchProvinceNumber && PROVINCE_MAP[watchProvinceNumber]) {
    form.setValue("provinceName", PROVINCE_MAP[watchProvinceNumber]);
  }
}, [watchProvinceNumber, form]);


  const onSubmit = (data: AddressInfo) => {
    onComplete(data);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Address Information</h2>
        <p className="text-gray-600">Step 2 of 2 - Where do you live?</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="addressLabel"
            rules={{ required: "Address label is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address Label</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Home, Office" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="provinceNumber"
            rules={{ required: "Province is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Province</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select province" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.entries(PROVINCE_MAP).map(([number, name]) => (
                      <SelectItem key={number} value={number}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pinCode"
            rules={{
              required: "PIN code is required",
              pattern: {
                value: /^[1-9][0-9]{4}$/,
                message: "Invalid Nepali postal code (e.g., 44600)",
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>PIN Code</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 44600" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="locality"
            rules={{ required: "Locality is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Locality</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your locality" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            rules={{ required: "City is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your city" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="landMark"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Landmark (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Enter a nearby landmark" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
              className="flex-1"
            >
              Back
            </Button>
            <Button type="submit" className="flex-1">
              Complete Profile
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddressStep;
