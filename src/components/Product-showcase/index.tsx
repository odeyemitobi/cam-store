"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ProductShowcase = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const products = [
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
      animation: { y: 200, rotation: 15 },
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

  useEffect(() => {
    // Register ScrollTrigger
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const cards = cardsRef.current;

    // Set initial states
    cards.forEach((card, index) => {
      const startPosition = products[index].animation;
      gsap.set(card, {
        opacity: 0,
        x: startPosition.x,
        y: startPosition.y,
        rotation: startPosition.rotation,
      });
    });

    // Animate each card
    cards.forEach((card, index) => {
      // Main card animation
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

      // Text animations
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

      // Image animation
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

      // Continuous floating animation for images
      gsap.to(image, {
        y: "random(-10, 10)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Cart button hover animation
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

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.globalTimeline.clear();
    };
  }, []);

  return (
    <div ref={containerRef} className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className={`${product.bgColor} rounded-lg p-8 relative min-h-[280px] transition-shadow hover:shadow-xl`}
          >
            <div className="space-y-2 pt-7">
              <p className="animate-text text-gray-600">{product.category}</p>
              <h3 className="animate-text text-2xl font-bold text-gray-900">
                {product.brand}
              </h3>
              <p className="animate-text text-gray-600">
                {product.description}
              </p>
            </div>

            <div className="absolute bottom-14 left-8 flex items-center gap-2">
              <div className="cart-button border rounded-full p-3 bg-[#0A142F] cursor-pointer">
                <AiOutlineShoppingCart size={22} color="white" />
              </div>
            </div>

            <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
              <Image
                src={product.image}
                alt={`${product.brand} ${product.category}`}
                width={0}
                height={0}
                className="product-image object-contain w-[8rem] lg:w-[12rem] xxl:w-[15rem] xlg:w-[19rem] h-[12rem]"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
