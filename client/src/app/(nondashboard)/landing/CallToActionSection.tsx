"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "../../../../node_modules/next/navigation";
import HeroPhoto from "../../../assets/tdcdashboard.png";

const CallToActionSection = () => {
  const router = useRouter();

  return (
    <div className="relative py-24 flex flex-col mx-auto max-w-xl space-y-6 ">
      <div className="max-w-xl mx-auto text-4xl">
        {" "}
        Explore our variety of products
      </div>
      <Button
        className="w-32 aspect-[2/4] max-w-xl mx-auto rounded-none text-sm"
        onClick={() => router.push("/products")}
      >
        Browse
      </Button>
      <div className="flex flex-row w-full justify-center gap-14 mx-auto max-w-xl">
        <div className="flex flex-col ">
          <div className="w-48 h-48 border-1 border-black">Image</div>
          <div></div>
        </div>
        <div className="flex flex-col">
          <div className="w-48 h-48 border-1 border-black">Image</div>
          <div></div>
        </div>
        <div className="flex flex-col">
          <div className="w-48 h-48 border-1 border-black">Image</div>
          <div></div>
        </div>
        <div className="flex flex-col">
          <div className="w-48 h-48 border-1 border-black">Image</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
