import Image from "next/image";
import { CustomButton } from "@/components/Button/Blue-button";
import { useHeroAnimations } from "./hooks";

export default function Hero() {
  const {
    headingRef,
    paragraphRef,
    buttonRef,
    imageRef,
    containerRef
  } = useHeroAnimations();

  return (
    <div 
      ref={containerRef}
      className="flex lg:px-20 px-2 flex-col lg:flex-row items-center justify-between min-h-[calc(85vh-100px)] bg-[#E8E8E8] overflow-hidden"
    >
      <div className="lg:w-1/2 space-y-6 mb-8 lg:mb-0">
        <h1 
          ref={headingRef}
          className="text-6xl text-black font-bold"
        >
          Capture the World
        </h1>
        <p 
          ref={paragraphRef}
          className="text-base lg:text-2xl text-[#5E5E5E] font-medium"
        >
          Your one-stop shop for all photography needs
        </p>
        <div ref={buttonRef}>
          <CustomButton />
        </div>
      </div>

      <div 
        ref={imageRef}
        className="lg:w-1/2 relative"
      >
        <Image
          src={"/Hero.jpg"}
          alt="Photographer with Canon camera"
          width={800}
          height={800}
          className="lg:h-[45rem] xlg:h-[57rem] h-[30rem] w-[50rem] object-cover"
          priority
        />
      </div>
    </div>
  );
}