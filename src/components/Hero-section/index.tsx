import Image from "next/image";
import { CustomButton } from "@/components/Button/Blue-button";

export default function Hero() {
  return (
    <div className="flex lg:px-20 px-2 flex-col lg:flex-row items-center justify-between min-h-[calc(85vh-100px)] bg-[#E8E8E8]">
      <div className="lg:w-1/2 space-y-6 mb-8 lg:mb-0">
        <h1 className="text-5xl lg:text-6xl text-black font-bold">Capture the World</h1>
        <p className="text-xl lg:text-2xl text-[#5E5E5E] font-medium">
          Your one-stop shop for all photography needs
        </p>
        <CustomButton />
      </div>

      <div className="lg:w-1/2 relative">
        <Image
          src={"/Hero.jpg"}
          alt="Photographer with Canon camera"
          width={800}
          height={800}
          className="h-[45rem] w-[50rem] object-cover"
          priority
        />
      </div>
    </div>
  );
}
