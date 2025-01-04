import { FeatureCard } from "@/Components/ui/FeatureCard";
import {
  FolderSearch,
  History,
  LockKeyhole,
  MessageCircleHeart,
  Search,
  TabletSmartphone,
  UserPlus,
} from "lucide-react";
import React from "react";

const CardData = [
  {
    icon: <LockKeyhole />,
    title: "Secure Profiles",
    description:
      "Your privacy and security are our priority. All profiles are verified..",
  },
  {
    icon: <Search />,
    title: "Advanced Search",
    description:
      "Our filters help you find matches that fit your preferences efficiently.",
  },
  {
    icon: <History />,
    title: "Matching",
    description: "We analyze your preferences for better matches.",
  },
  {
    icon: <TabletSmartphone />,
    title: "Mobile-Friendly",
    description:
      "Use our mobile app to browse matches easily on your smartphone.",
  },
];

export default function FeatureSection() {
  return (
    <>
      <div className="text-start mx-auto flex-col container flex justify-start mb-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">
          Our Features
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-[#1a1f4d]">
          Why Choose Us
        </h3>
      </div>
      <div className=" w-full container mx-auto flex justify-center max-sm:px-4 py-16">
        <div className="grid gap-10 lg:gap-24 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4">
          {CardData.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
