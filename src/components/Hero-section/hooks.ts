import { useEffect, useRef } from "react";
import gsap from "gsap";


export const useHeroAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeAnimations = () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      );

      tl.fromTo(headingRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      );

      tl.fromTo(paragraphRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2 }
      );

      tl.fromTo(buttonRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.5"
      );

      tl.fromTo(imageRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        "-=1"
      );
    };

    const handleParallax = (e: MouseEvent) => {
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

    initializeAnimations();

    window.addEventListener("mousemove", handleParallax);

    return () => {
      window.removeEventListener("mousemove", handleParallax);
    };
  }, []);

  return {
    containerRef,
    headingRef,
    paragraphRef,
    buttonRef,
    imageRef,
  };
};