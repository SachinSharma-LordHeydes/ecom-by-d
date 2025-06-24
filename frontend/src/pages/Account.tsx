"use client";

import Orders from "@/components/acccount/Orders";
import ProfileAndAddress from "@/components/acccount/ProfileAndAddress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useClerk } from "@clerk/nextjs";
import {
  Bell,
  Globe,
  LogOut,
  Settings,
  Shield,
  ShoppingCart,
  User,
} from "lucide-react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const Account = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const { signOut } = useClerk();

  const menuItems = [
    { id: "profile", label: "Profile & Address", icon: User },
    { id: "orders", label: "My Orders", icon: ShoppingCart },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const orders = [
    {
      id: "#NM001234",
      date: "2024-01-15",
      status: "Delivered",
      total: "NPR 15,500",
      items: 2,
      products: [
        {
          name: "Samsung Galaxy S23",
          price: "NPR 12,000",
          quantity: 1,
          image: "/placeholder.svg",
        },
        {
          name: "Wireless Earbuds",
          price: "NPR 3,500",
          quantity: 1,
          image: "/placeholder.svg",
        },
      ],
      shippingAddress: "Thamel, Kathmandu, Nepal",
      paymentMethod: "eSewa",
    },
    {
      id: "#NM001235",
      date: "2024-01-10",
      status: "Shipped",
      total: "NPR 3,200",
      items: 1,
      products: [
        {
          name: "Nike Running Shoes",
          price: "NPR 3,200",
          quantity: 1,
          image: "/placeholder.svg",
        },
      ],
      shippingAddress: "Lalitpur, Bagmati Province, Nepal",
      paymentMethod: "Cash on Delivery",
    },
    {
      id: "#NM001236",
      date: "2024-01-05",
      status: "Processing",
      total: "NPR 8,750",
      items: 3,
      products: [
        {
          name: "Laptop Stand",
          price: "NPR 2,500",
          quantity: 1,
          image: "/placeholder.svg",
        },
        {
          name: "USB Cable",
          price: "NPR 800",
          quantity: 2,
          image: "/placeholder.svg",
        },
        {
          name: "Power Bank",
          price: "NPR 4,650",
          quantity: 1,
          image: "/placeholder.svg",
        },
      ],
      shippingAddress: "Pokhara, Gandaki Province, Nepal",
      paymentMethod: "Khalti",
    },
  ];

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (err) {
      console.error("Error during logout:", err);
    }
  };

  const methods = useForm();

  return (
    <div className="min-h-screen">
      <section className="bg-nepal-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Account</h1>
            <p className="text-xl opacity-90">Manage your profile and orders</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                  <div className="w-16 h-16 bg-nepal-gradient rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Ram Bahadur</h3>
                    <p className="text-gray-500">ram.bahadur@email.com</p>
                  </div>
                </div>

                <nav className="space-y-2">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                          activeTab === item.id
                            ? "bg-nepal-red text-white"
                            : "hover:bg-gray-100 text-gray-700"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        {item.label}
                      </button>
                    );
                  })}
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left hover:bg-red-50 text-red-600 mt-4"
                  >
                    <LogOut className="h-5 w-5" />
                    Logout
                  </button>
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                {activeTab === "profile" && (
                  <FormProvider {...methods}>
                    <ProfileAndAddress />
                  </FormProvider>
                )}

                {activeTab === "orders" && <Orders />}

                {activeTab === "settings" && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">
                      Account Settings
                    </h2>

                    <div className="space-y-8">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Bell className="h-5 w-5" />
                            Notifications
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label
                                htmlFor="email-notifications"
                                className="text-base font-medium"
                              >
                                Email Notifications
                              </Label>
                              <p className="text-sm text-gray-600">
                                Receive order updates and promotional emails
                              </p>
                            </div>
                            <Switch id="email-notifications" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label
                                htmlFor="sms-notifications"
                                className="text-base font-medium"
                              >
                                SMS Notifications
                              </Label>
                              <p className="text-sm text-gray-600">
                                Get order status updates via SMS
                              </p>
                            </div>
                            <Switch id="sms-notifications" />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label
                                htmlFor="marketing-emails"
                                className="text-base font-medium"
                              >
                                Marketing Emails
                              </Label>
                              <p className="text-sm text-gray-600">
                                Receive special offers and deals
                              </p>
                            </div>
                            <Switch id="marketing-emails" defaultChecked />
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Shield className="h-5 w-5" />
                            Privacy & Security
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label
                                htmlFor="two-factor"
                                className="text-base font-medium"
                              >
                                Two-Factor Authentication
                              </Label>
                              <p className="text-sm text-gray-600">
                                Add an extra layer of security to your account
                              </p>
                            </div>
                            <Switch id="two-factor" />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label
                                htmlFor="data-sharing"
                                className="text-base font-medium"
                              >
                                Data Sharing
                              </Label>
                              <p className="text-sm text-gray-600">
                                Allow sharing data for personalized
                                recommendations
                              </p>
                            </div>
                            <Switch id="data-sharing" defaultChecked />
                          </div>
                          <div>
                            <Button
                              variant="outline"
                              className="border-nepal-red text-nepal-red"
                            >
                              Change Password
                            </Button>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Globe className="h-5 w-5" />
                            Preferences
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div>
                            <Label className="text-base font-medium mb-2 block">
                              Language
                            </Label>
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-nepal-red">
                              <option value="en">English</option>
                              <option value="ne">नेपाली (Nepali)</option>
                              <option value="hi">हिन्दी (Hindi)</option>
                            </select>
                          </div>
                          <div>
                            <Label className="text-base font-medium mb-2 block">
                              Currency
                            </Label>
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-nepal-red">
                              <option value="npr">NPR (Nepali Rupee)</option>
                              <option value="usd">USD (US Dollar)</option>
                              <option value="inr">INR (Indian Rupee)</option>
                            </select>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label
                                htmlFor="dark-mode"
                                className="text-base font-medium"
                              >
                                Dark Mode
                              </Label>
                              <p className="text-sm text-gray-600">
                                Switch to dark theme
                              </p>
                            </div>
                            <Switch id="dark-mode" />
                          </div>
                        </CardContent>
                      </Card>

                      <div className="pt-6">
                        <Button className="bg-nepal-red hover:bg-nepal-crimson">
                          Save All Settings
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
