"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "../../../../node_modules/next/link";
import HeroPhoto from "../../../assets/tdcdashboard.png";

const FeaturesSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Full background image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={HeroPhoto}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      {/* Optional overlay for better text contrast */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60" />

      {/* Animated text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        className="absolute bottom-20 left-8 text-white"
      >
        <div className="text-8xl">TDC</div>
        <div className="text-4xl">Reimagine your home</div>
      </motion.div>
    </div>
  );
};

const FeatureCard = ({
  imageSrc,
  title,
  description,
  linkText,
  linkHref,
}: {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}) => (
  <div className="text-center">
    <div className="p-4 rounded-lg mb-4 flex items-center justify-center h-48">
      <Image
        src={HeroPhoto}
        width={400}
        height={400}
        className="w-full h-full object-contain"
        alt={title}
      />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="mb-4">{description}</p>
    <Link
      href={linkHref}
      className="inline-block border border-gray-300 rounded px-4 py-2 hover:bg-gray-100"
      scroll={false}
    >
      {linkText}
    </Link>
  </div>
);

export default FeaturesSection;
