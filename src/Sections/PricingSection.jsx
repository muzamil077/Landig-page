"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import bgimage from "../images/bg-hero.png";
import Image from "next/image";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Starter",
      price: 80,
      description: "Lorem ipsum dolor sit amet dolor siti conse ctetur adipi.",
      features: [
        "3 months Duration",
        "213 Messages",
        "Live Chats",
        "2 Profile Views",
        "Up to 3 team members",
      ],
    },
    {
      name: "Basic",
      price: 150,
      description: "Lorem ipsum dolor sit amet dolor siti conse ctetur adip.",
      features: [
        "3 months Duration",
        "213 Messages",
        "Live Chats",
        "2 Profile Views",
        "Up to 3 team members",
      ],
    },
    {
      name: "Premium",
      price: 180,
      description: "Lorem ipsum dolor sit amet dolor siti conse ctetur adip.",
      features: [
        "3 months Duration",
        "213 Messages",
        "Live Chats",
        "2 Profile Views",
        "Up to 3 team members",
      ],
    },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" />
      <Image
        src={bgimage}
        alt="Background"
        height={500}
        width={500}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className=" mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">
            MEMBERSHIP PLANS
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#1a1f4d]">
            Unlock Your Love Journey
          </h3>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center gap-2 mb-12">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
              ${
                billingCycle === "monthly"
                  ? "bg-[#ff6b2b] text-white"
                  : "text-gray-600 border border-[#ff6b2b] text-[#ff6b2b]"
              }`}
          >
            Monthly plan
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
              ${
                billingCycle === "annual"
                  ? "bg-[#ff6b2b] text-white"
                  : "text-gray-600 border border-[#ff6b2b] text-[#ff6b2b]"
              }`}
          >
            Annual plan
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8  container mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`rounded-3xl  p-8 ${
                index === 1 ? "bg-[#1C264E] text-white" : "bg-white shadow-lg"
              }`}
            >
              <h4 className="text-[28px]  font-bold mb-4">{plan.name}</h4>
              <div className="flex items-baseline mb-4">
                <span className="text-2xl">₹</span>
                <span className="text-[56px] font-bold">{plan.price}</span>
                <span className="ml-2 text-sm opacity-80">/month</span>
              </div>
              <p
                className={`text-[18px] font-normal max-w-96 mb-8   ${
                  index === 1 ? "text-gray-300" : "text-gray-500"
                }`}
              >
                {plan.description}
              </p>
              <div
                className={`  h-0.5 max-w-96 ${
                  index === 1 ? "bg-gray-300" : "bg-gray-500"
                }`}
              ></div>

              <div className="space-y-8 mb-8 mt-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center  gap-5">
                    <Check
                      className={`w-5 h-5  rounded-full ${
                        index === 1
                          ? "text-orange-400 bg-white"
                          : "text-[#ff6b2b] bg-[#FEF2E9]"
                      }`}
                    />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button
                className={`w-full py-6 rounded-full text-base font-medium ${
                  index === 1
                    ? "bg-white text-[#1a1f4d] hover:bg-gray-100"
                    : "bg-[#ff6b2b] text-white hover:bg-[#ff5b1b]"
                }`}
              >
                Get started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
