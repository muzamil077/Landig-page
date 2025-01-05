import { FeatureCard } from "../Components/ui/FeatureCard";
import { FolderSearch, MessageCircleHeart, UserPlus } from "lucide-react";
import React from "react";

const CardData = [
  {
    icon: <UserPlus />,
    title: "Create Profile",
    description:
      "Set up your profile with photos, preferences, and a brief intro.",
  },
  {
    icon: <FolderSearch />,
    title: "Browse Matches",
    description:
      "Find matches that fit your preferences with our search filters.",
  },
  {
    icon: <MessageCircleHeart />,
    title: "Connect & Chat",
    description:
      "Connect with interesting people through our secure messaging.",
  },
  {
    icon: <MessageCircleHeart />,
    title: "Find Love",
    description: "Build connections & discover your ideal match.",
  },
];

export default function ProcessSection() {
  return (
    <>
      <div className="container flex flex-col items-center justify-center mx-auto">
        <p className="text-base uppercase tracking-wider text-gray-500">
          Process
        </p>
        <h2 className="text-[40px] font-bold text-[#1C264E]">How it works</h2>
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
