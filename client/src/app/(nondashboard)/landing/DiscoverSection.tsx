"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "../../../../node_modules/next/link";
import HeroPhoto from "@/assets/tdcdashboard.png";


const containerVariants = {
  hidden: { opactiy: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const DiscoverSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={containerVariants}
      className="py-12 bg-white mb-16"
    >
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
        <motion.div variants={itemVariants} className="my-12 text-center">
          <h2 className="text-3xl font-semibold leading-tight text-gray-800">
            Organize
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Organize your business with our operations tools to scale and succeed
          </p>
          <p className="mt-2 text-gray-500 max-w-3xl mx-auto">
            Our systems are proven create a clear strategy for your business to succeed. 
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {[
            {
              imageSrc: "",
              title: "Proven Successful Systems",
              description:
                "Successfully manage your business operations with our proven systems",
            },
            {
              imageSrc: "/landing-icon-calendar.png",
              title: "Logical, Intuitive and Aesthetic Interface",
              description: "Utilize our logical workflows ",
            },
            {
              imageSrc: "/landing-icon-heart.png",
              title: "Robust and Scalable Storage",
              description: "Robust storage",
            },
          ].map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <DiscoverCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const DiscoverCard = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) => (
  <div className="px-4 py-12 shadow-lg rounded-lg bg-primary-50 md:h-72">
    <div className="bg-primary-700 p-[0.6rem] rounded-full mb-4 h-10 w-10 mx-auto">
      <Image
        src={imageSrc}
        width={30}
        height={30}
        className="w-full h-full"
        alt={title}
      />
    </div>
    <h3 className="mt-4 text-xl font-medium text-gray-800">{title}</h3>
    <p className="mt-2 text-base text-gray-500">{description}</p>
  </div>
);

export default DiscoverSection;
