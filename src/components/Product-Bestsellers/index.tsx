import React from "react";
import { CustomButton } from "@/components/Button/Blue-button";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Canon EOS 90D",
    price: 2499,
    originalPrice: 2999,
    discount: 25,
    image: "/Canon1.svg",
    description: "Lorem ipsum dolor sit amet consec...",
  },
  {
    id: 2,
    name: "Sony Alpha a7 IV",
    price: 2899,
    originalPrice: 3099,
    discount: 25,
    image: "/Sony.svg",
    description: "Lorem ipsum dolor sit amet consec...",
  },
  {
    id: 3,
    name: "Nikon Z7 II",
    price: 2899,
    originalPrice: 3099,
    discount: 25,
    image: "/Nikon.svg",
    description: "Lorem ipsum dolor sit amet consec...",
  },
  {
    id: 4,
    name: "Canon EOS 90D",
    price: 2499,
    originalPrice: 2799,
    discount: 25,
    image: "/Canon2.svg",
    description: "Lorem ipsum dolor sit amet consec...",
  },
];

const ProductBestsellers = () => {
  const handleAddToCart = (productId: number) => {
    console.log(`Added product ${productId} to cart`);
  };

  return (
    <div className="container mx-auto lg:px-20 px-2 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#E8E8E8] rounded-2xl p-4 shadow-sm"
          >
            <div className="relative mb-4">
              <div className="w-full rounded-full bg-gray-100 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-2 left-2">
                <button
                  className="text-gray-400 hover:text-gray-600"
                  title="Add to Wishlist"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-500">{product.description}</p>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-4 h-4 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500 font-bold">${product.price}</span>
                <span className="text-gray-400 line-through text-sm">
                  ${product.originalPrice}
                </span>
                <span className="text-orange-500 text-sm">
                  -{product.discount}%
                </span>
              </div>
              <CustomButton
                text="Add to cart"
                onClick={() => handleAddToCart(product.id)}
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductBestsellers;
