import Image from "next/image";
import { Button } from "../Components/ui/button";
import imageOne from "../images/one.png";
import imageTwo from "../images/two.png";

export default function AboutSection() {
  return (
    <section className="relative  px-4 py-16 sm:px-6 lg:px-8">
      <div className="">
        <div className="flex container flex-col-reverse  justify-between mx-auto md:flex-row items-center gap-x-20">
          {/* Left side with overlapping images */}
          <div className=" h-auto lg:h-[60vh] flex gap-5 mb-12 lg:mb-0">
            <div className="flex lg:items-end ">
              <Image
                src={imageOne}
                alt="Happy couple"
                width={300}
                height={400}
                className=" w-[300px] h-[400px] rounded-lg object-cover  "
              />
            </div>
            <div className="  ">
              <Image
                src={imageTwo}
                alt="Romantic couple"
                width={300}
                height={400}
                className="w-[300px] h-[400px] rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Right side content */}
          <div className="  ">
            <div className="max-w-lg">
              <p className="text-base uppercase tracking-wider text-gray-500">
                About Us
              </p>
              <h2 className="mt-6 text-[40px] font-bold tracking-tight text-[#1C264E] sm:text-5xl">
                Join today and start your journey towards love
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Vaishakhi Matrimony, we connect hearts and minds through
                certified profiles and smart matching. Join us to start your
                journey toward true love.
              </p>
              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold"
                >
                  Get started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
