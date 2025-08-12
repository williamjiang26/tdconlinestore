import { Button } from "@/components/ui/button";
import React from "react";

const ContactSection = () => {
  return (
    <div className="flex flex-col space-y-6 mx-auto max-w-xl text-center text-4xl pb-10 ">
      <div className="text-3xl">Our team is ready to help!</div>
      <div className="">Call: 718-788-2888</div>
      <div className="text-lg">
        or fill out this questionaire and we'll get to you shortly
      </div>
      <Button className="rounded-none w-48 mx-auto max-w-xl">
        Pre-sales questionaire form
      </Button>
    </div>
  );
};

export default ContactSection;
