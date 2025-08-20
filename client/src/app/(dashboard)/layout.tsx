'use client'
import React from "react";
import { useRouter } from "../../../node_modules/next/navigation";

const layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="h-20 flex flex-row justify-between p-5">
        {/* Logo */}
        <div className="text-2xl font-bold " onClick={() => router.push("/")}>
          TDC DOORS Logo
        </div>
        <div className="text-2xl font-bold" onClick={() => router.push("/checkout")}>
          Cart
        </div>
      </div>

      {/* Main content */}
      <main className="bg-gray-200 p-15 pt-25">{children}</main>
    </div>
  );
};

export default layout;
