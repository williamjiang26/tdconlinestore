"use client";
import React from "react";
import Image from "../../../../node_modules/next/image";
import Products from "../../../assets/products.json";
import Door1 from "../../../assets/IMG_0022.jpg";
import Door2 from "../../../assets/IMG_0033.jpg";
import Door3 from "../../../assets/tdcdashboard.png";
import { useRouter } from "../../../../node_modules/next/navigation";
import AppSidebar from "@/app/(components)/Sidebar";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const page = () => {
  const router = useRouter();
  const productUrls = [Door1, Door2, Door3];

  return (
    <SidebarProvider>
      {/* <AppSidebar /> */}
      {/* mini page  */}
      <div className="bg-white rounded-xl w-full flex flex-row shadow-lg">
        <div className="w-64 bg-gray-100 rounded-l-xl  text-black flex flex-col p-4 ">
          {/* Sidebar Title */}
          <div className="font-semibold text-2xl pb-10">Shop Products</div>
          <div className="space-y-6">
            <div>Featured</div>
            <div>Double</div>
            <div>Single</div>
          </div>
        </div>
        <div className="p-15">
        <div className="font-semibold text-6xl pb-7">Featured Products</div>{" "}
          {/* Sub Heading */}
          <div className="font-semibold text-3xl pb-2">Double</div>{" "}
          <Carousel
            opts={{ align: "start" }}
            className="w-full max-w-7xl" // 9xl is not a Tailwind default, so reduce
          >
            <CarouselContent className="gap-4">
              {Products.map((product, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="   text-white rounded-none border-none shadow-none relative overflow-hidden">
                    <CardContent className="relative aspect-square p-0">
                      {/* Image */}
                      <Image
                        src={productUrls[index]}
                        alt="door image"
                        className="object-cover w-full h-full rounded-lg shadow-md"
                      />

                      {/* Tags overlay (absolute inside card) */}
                      <div className="absolute bottom-2 left-2 flex flex-wrap gap-2 shadow-md">
                        <span className="bg-gray-700/65 text-md px-2 py-1 rounded-full">
                          {product.type}
                        </span>
                        <span className="bg-gray-700/65 text-md px-2 py-1 rounded-full">
                          {product.finish}
                        </span>
                        <span className="bg-gray-700/65 text-md px-2 py-1 rounded-full">
                          {product.glass}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="font-semibold text-3xl pb-2">Single</div>{" "}
          <div className="font-semibold text-3xl pb-2">Railings</div>{" "}
          <div className="font-semibold text-3xl pb-2">Canopies</div>{" "}
          <div className="font-semibold text-3xl pb-2">Round Top</div>{" "}
          <div className="font-semibold text-3xl pb-2">Round Top Double</div>{" "}
        </div>
      </div>
      {/* products */}
    </SidebarProvider>
  );
};

export default page;
