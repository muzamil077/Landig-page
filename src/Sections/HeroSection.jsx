import Image from "next/image";
import { Button } from "@/components/ui/button";
import sidImage from "../images/bv.png";
import bgimage from "../images/bg-hero.png";
export default function HeroSection() {
  return (
    <div className=" h-auto lg:h-[90vh]  relative w-full ">
      <div className="absolute inset-0 opacity-5" />
      <Image
        src={bgimage}
        alt="Background"
        width={1000}
        height={1000}
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <main className="flex items-center h-auto lg:h-[80vh]">
        <section className="container  mx-auto w-full">
          <div className="absolute inset-0" />
          <div className="relative">
            <div className=" flex flex-col md:flex-row justify-between mt-20 items-center gap-5  w-full py-12 md:py-20">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium bg-muted">
                    OVER 20K USERS
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl max-w-[700px] font-bold tracking-tight text-[#1C264E]">
                  Find Your Perfect Match Today!
                </h1>
                <p className="text-lg text-muted-foreground max-w-[500px] mt-2">
                  Discover your ideal partner with our advanced matchmaking
                  algorithms. Join now and start your journey to love!
                </p>
                <div className="flex flex-wrap gap-4 mt-10">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold"
                  >
                    Get started
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className={
                      " text-orange-500 border-orange-500 px-8 py-3 rounded-full text-lg font-semibold"
                    }
                  >
                    See Pricing
                  </Button>
                </div>
              </div>
              <div className="relative   md:w-[500px]  md:h-[300px] lg:h-[500px]">
                <Image
                  src={sidImage}
                  alt="Happy couple"
                  width={500}
                  height={500}
                  className=" rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
