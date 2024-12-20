import Image from "next/image";
import { CustomButton } from "@/components/Button/Blue-button";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Initial animation timeline
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Container fade in
    tl.fromTo(containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );

    // Heading animation
    tl.fromTo(headingRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );

    // Paragraph animation
    tl.fromTo(paragraphRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.2 }
    );

    // Button animation
    tl.fromTo(buttonRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.5"
    );

    // Image animation
    tl.fromTo(imageRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 },
      "-=1"
    );

    // Image parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(imageRef.current, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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