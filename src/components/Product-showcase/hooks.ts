import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ProductShow } from "@/types";

export const useProductShowcaseAnimations = (products: ProductShow[]) => {
  const containerRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      const startPosition = products[index].animation;
      gsap.set(card, {
        opacity: 0,
        x: startPosition.x,
        y: startPosition.y,
        rotation: startPosition.rotation,
      });
    });

    cards.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        x: 0,
        y: 0,
        rotation: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none reverse",
        },
      });

      const texts = (card as HTMLElement).querySelectorAll(".animate-text");
      texts.forEach((text, i) => {
        gsap.from(text, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: 0.2 * i,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        });
      });

      const image = (card as HTMLElement).querySelector(".product-image");
      const startPosition = products[index].animation;
      gsap.from(image, {
        opacity: 0,
        scale: 0,
        rotation: startPosition.rotation * 2,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(image, {
        y: "random(-10, 10)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      const cartButton = (card as HTMLElement).querySelector(".cart-button");
      if (cartButton) {
        cartButton.addEventListener("mouseenter", () => {
          gsap.to(cartButton, {
            scale: 1.2,
            duration: 0.3,
            ease: "back.out",
          });
        });

        cartButton.addEventListener("mouseleave", () => {
          gsap.to(cartButton, {
            scale: 1,
            duration: 0.3,
            ease: "power2.inOut",
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.globalTimeline.clear();
    };
  }, [products]);

  return {
    containerRef,
    cardsRef,
  };
};

export const productData: ProductShow[] = [
  {
    category: "Camera",
    brand: "FUJIFILM",
    description: "Precision & quality.",
    bgColor: "bg-[#EFF0F7]",
    image: "/camera.svg",
    animation: { x: -200, y: -100, rotation: -45 },
  },
  {
    category: "Lense",
    brand: "CAMON",
    description: "Clarity & Focus.",
    bgColor: "bg-[#FFEDDA]",
    image: "/lense.svg",
    animation: { x: 0, y: 200, rotation: 15 },
  },
  {
    category: "Lightning",
    brand: "Studio Lighting",
    description: "Light up the shot",
    bgColor: "bg-[#F6EEF8]",
    image: "/lightning.svg",
    animation: { x: 200, y: -50, rotation: 45 },
  },
];
