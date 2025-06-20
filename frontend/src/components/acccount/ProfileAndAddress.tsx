"use client";

import { MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface AddressFormData {
  label: string;
  pinCode: string;
  locality: string;
  city: string;
  province: string;
  landmark?: string;
}

const ProfileAndAddress = () => {
  const form = useForm<AddressFormData>({
    defaultValues: {
      label: "",
      pinCode: "",
      locality: "",
      city: "",
      province: "",
      landmark: "",
    },
  });

  const onSubmit = (data: AddressFormData) => {
    console.log("New address:", data);
    form.reset();
  };

  return (
    <div className="space-y-8">
      {/* Profile Information Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              defaultValue="Ram"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-nepal-red"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              defaultValue="Bahadur"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-nepal-red"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              defaultValue="+977-98XXXXXXXX"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-nepal-red"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Alternate Phone
            </label>
            <input
              type="tel"
              defaultValue="+977-98XXXXXXXX"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-nepal-red"
            />
          </div>
        </div>
        <Button className="mt-6 bg-nepal-red hover:bg-nepal-crimson">
          Save Profile Changes
        </Button>
      </div>

      {/* Add Address Section */}
      <div className="border-t pt-8">
        <div className="flex items-center gap-2 mb-6">
          <MapPin className="h-6 w-6 text-nepal-red" />
          <h2 className="text-2xl font-bold">Add New Address</h2>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address Label *</FormLabel>
                  <Input placeholder="e.g., Home, Office" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="pinCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pin Code *</FormLabel>
                  <Input placeholder="44600" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="locality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Locality *</FormLabel>
                  <Input placeholder="Thamel, Kathmandu" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City/District *</FormLabel>
                  <Input placeholder="Kathmandu" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="landmark"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Landmark (Optional)</FormLabel>
                  <Input placeholder="Near hospital, mall, etc." {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="province"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Province *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your province" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "01)  Koshi Provence",
                      "02)  Madhesh Province",
                      "03)  Bagmati Province",
                      "04)  Gandaki Province",
                      "05)  Lumbini Province",
                      "06)  Karnali Province",
                      "07)  Sudurpashchim Province",
                    ].map((province) => (
                      <SelectItem key={province} value={province}>
                        {province}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
              className="flex-1"
            >
              Clear Form
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-nepal-red hover:bg-nepal-crimson"
            >
              Save Address
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileAndAddress;
