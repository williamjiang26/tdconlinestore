import { Button } from "@/components/ui/button";
import React from "react";

const OrderProcessSection = () => {
  return (
    <div className="relative py-24 flex flex-col mx-auto max-w-xl space-y-6 ">
      <div className="max-w-xl mx-auto text-6xl">How to order</div>
      <div className="flex flex-row w-full justify-center gap-14 mx-auto max-w-xl">
        <div className="flex flex-col ">
          <div className="w-48 h-48 border-1 border-black">Image</div>
          <div>Once order is placed</div>
        </div>
        <div className="flex flex-col">
          <div className="w-48 h-48 border-1 border-black">Image</div>
          <div>Schedule a measurement - we will send you a link</div>
        </div>
        <div className="flex flex-col">
          <div className="w-48 h-48 border-1 border-black">Image</div>
          <div>Track your order - we will give you updates</div>
        </div>
        <div className="flex flex-col">
          <div className="w-48 h-48 border-1 border-black">Image</div>
          <div>We deliver and install - we will give you a call</div>
        </div>
      </div>
    </div>
  );
};

export default OrderProcessSection;
