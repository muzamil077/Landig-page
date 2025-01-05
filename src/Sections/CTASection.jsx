import { Button } from "../Components/ui/button";
import Image from "next/image";
import CTAImage from "../images/CTAImage.png";

export default function CTASection() {
  return (
    <div className=" bg-[#FDF8F6] relative flex items-center justify-center p-4 pb-16">
      <div className="w-full container border border-gray-300 mx-auto  bg-white rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4">
          <p className="text-sm font-medium text-gray-600 tracking-wide uppercase">
            START NOW
          </p>
          <h2 className="text-[32px] md:text-[40px] font-bold leading-tight text-[#1C2A4E] max-w-[400px]">
            Ready to find your perfect match?
          </h2>
          <Button className="bg-[#F97316] hover:bg-[#F97316]/90 text-white rounded-full px-8 h-12 text-base font-medium">
            Signup now
          </Button>
        </div>

        <div className="">
          <Image
            src={CTAImage}
            alt="Background"
            height={500}
            width={500}
            className=" inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
