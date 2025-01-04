"use client";

import { useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import frame from "../images/frame.png";
import vector from "../images/vector.png";

const testimonials = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam. Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam. Elit enim massa etiam. Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur.",
    author: "Anthony Bahringer",
    role: "Senior Research Manager",
    image: frame,
  },
  {
    id: 2,
    content:
      "Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam. Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam. Elit enim massa etiam. Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur.",
    author: "Anthony Bahringer",
    role: "Senior Research Manager",
    image: frame,
  },
  {
    id: 3,
    content:
      "Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam. Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam. Elit enim massa etiam. Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur.",
    author: "Anthony Bahringer",
    role: "Senior Research Manager",
    image: frame,
  },
];

export default function TestimonialsSection() {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -800 : 800;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 container  mx-auto px-4 sm:px-6">
      <div className="flex  justify-between items-center mb-8">
        <div>
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            SUCCESS STORIES
          </h2>
          <h3 className="mt-2 text-3xl font-bold text-[#1a1f4d] sm:text-4xl">
            Heartwarming Journeys
          </h3>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleScroll("left")}
            className="rounded-full w-10 h-10 border-gray-200"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleScroll("right")}
            className="rounded-full w-10 h-10 border-gray-200"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-none w-full snap-center min-w-[800px]"
          >
            <div className="grid grid-cols-2 bg-[#F97E27] rounded-3xl overflow-hidden">
              <Image
                src={vector}
                alt="Background"
                width={500}
                height={500}
                className="absolute inset-0 w-full h-full object-cover -z-10"
              />
              <div className="p-12">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-white text-white" />
                  ))}
                </div>
                <blockquote className="text-white text-lg leading-relaxed mb-8">
                  {testimonial.content}
                </blockquote>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-white/80 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="relative flex justify-end ">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.author}'s testimonial`}
                    width={500}
                    height={500}
                    className="object-cover h-[400px] "
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
