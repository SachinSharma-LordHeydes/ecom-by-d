"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPinIcon, Package } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

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

  return (
    <div>
      {!selectedOrder && (
        <div>
          <h2 className="text-2xl font-bold mb-6">My Orders</h2>
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="border border-gray-200 rounded-lg p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-lg">{order.id}</h3>
                    <p className="text-gray-500">Placed on {order.date}</p>
                    <p className="text-sm text-gray-500">
                      {order.items} item(s)
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg">{order.total}</p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Shipped"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    className="border-nepal-red text-nepal-red"
                    onClick={() => setSelectedOrder(order)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedOrder && (
        <div>
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="outline"
              onClick={() => setSelectedOrder(null)}
              className="border-nepal-red text-nepal-red"
            >
              ← Back to Orders
            </Button>
            <h2 className="text-2xl font-bold">
              Order Details - {selectedOrder.id}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Order Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="font-semibold">{selectedOrder.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span>{selectedOrder.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      selectedOrder.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : selectedOrder.status === "Shipped"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {selectedOrder.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total:</span>
                  <span className="font-semibold text-lg">
                    {selectedOrder.total}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5" />
                  Shipping Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="text-gray-600 block mb-1">
                    Shipping Address:
                  </span>
                  <span>{selectedOrder.shippingAddress}</span>
                </div>
                <div>
                  <span className="text-gray-600 block mb-1">
                    Payment Method:
                  </span>
                  <span>{selectedOrder.paymentMethod}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {selectedOrder.products.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{product.name}</h4>
                      <p className="text-gray-600">
                        Quantity: {product.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Orders;
