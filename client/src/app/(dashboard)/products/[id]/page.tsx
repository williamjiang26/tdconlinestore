"use client";
import { useParams } from "next/navigation";
import Link from "../../../../../node_modules/next/link";
import Products from "../../../../assets/products.json";
import { ArrowLeft } from "lucide-react";

import Door1 from "../../../../assets/IMG_0022.jpg";
import Door2 from "../../../../assets/IMG_0033.jpg";
import Door3 from "../../../../assets/tdcdashboard.png";
import Image from "../../../../../node_modules/next/image";
import { Button } from "@/components/ui/button";

const productUrls = [Door1, Door2, Door3];
const Details = () => {
  const params = useParams();
  const id = params.id; //
  const product = Products[id - 1];

  return (
    <div className="w-300 bg-white rounded-lg p-5 shadow-md overflow-hidden">
      {/* Back Button */}
      <div className="">
        <Link
          href="/products"
          className="mb-6 flex flex-row items-center space-x-1 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 duration-200 transition-all"
          />
          <span>Back</span>
        </Link>
      </div>

      {/* Horizontal Image (main preview) */}
      <div className="mb-4">
        <Image
          src={productUrls[id - 1]}
          alt={product.type}
          className=" max-h-120 object-cover rounded-lg"
        />
      </div>

      {/* Image Gallery (if multiple images) */}
      <div className="flex gap-3 mb-6 overflow-x-auto">
        {/* {product.gallery?.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${product.type}-${i}`}
            className="w-24 h-24 object-cover rounded-md border"
          />
        ))} */}
      </div>

      {/* Product Details */}
      <div className="">
        <div className="text-lg font-semibold pb-2">TD-031</div>
        <div className="text-sm text-gray-400 pb-2">ID: {product.id}</div>
        <div className="text-sm">Type: {product.type}</div>
        <div className="text-sm">Color: {product.color}</div>
        <div className="text-sm">Finish: {product.finish}</div>
        <div className="text-sm">Glass: {product.glass}</div>
        <div className="text-sm">Width: {product.width}</div>
        <div className="text-sm">Height: {product.height}</div>
        <div className="text-xl font-bold mt-3">${product.price}</div>
      </div>

      <div className="flex flex-end">
        <Button>Add to cart</Button>
      </div>
    </div>
  );
};

export default Details;
