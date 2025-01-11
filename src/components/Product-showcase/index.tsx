"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CustomButton } from "@/components/Button/Blue-button";
import { useProductShowcaseAnimations, productData } from "./hooks";

const ProductShowcase = () => {
  const { containerRef, cardsRef } = useProductShowcaseAnimations(productData);

  return (
    <div ref={containerRef} className="container mx-auto lg:px-20 px-2 pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productData.map((product, index) => (
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
                className="product-image object-contain w-[8rem] lg:w-[10rem] xxl:w-[13rem] xlg:w-[19rem] h-[12rem]"
                priority={index === 0}
              />
            </div>
          </div>
        ))}

        <div className="py-5">
          <CustomButton text="Best Sellers" showIcon={false} />
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;