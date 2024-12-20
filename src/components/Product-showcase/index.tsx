import React from "react";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductShowcase = () => {
  const products = [
    {
      category: "Camera",
      brand: "FUJIFILM",
      description: "Precision & quality.",
      bgColor: "bg-[#EFF0F7]",
      image: "/camera.svg",
    },
    {
      category: "Lense",
      brand: "CAMON",
      description: "Clarity & Focus.",
      bgColor: "bg-[#FFEDDA]",
      image: "/lense.svg",
    },
    {
      category: "Lightning",
      brand: "Studio Lighting",
      description: "Light up the shot",
      bgColor: "bg-[#F6EEF8]",
      image: "/lightning.svg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className={`${product.bgColor} rounded-lg p-8 relative min-h-[280px] transition-transform`}
          >
            <div className="space-y-2 pt-7">
              <p className="text-gray-600">{product.category}</p>
              <h3 className="text-2xl font-bold text-gray-900">
                {product.brand}
              </h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="absolute bottom-14 left-8 flex items-center gap-2">
              <div className="border rounded-full p-3 bg-[#0A142F]">
                <AiOutlineShoppingCart size={22} color="white" />
              </div>
            </div>

            <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
              <Image
                src={product.image}
                alt={`${product.brand} ${product.category}`}
                width={0}
                height={0}
                className="object-contain w-[12rem] xxl:w-[15rem] xlg:w-[19rem] h-[12rem]"
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
