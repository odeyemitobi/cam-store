import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CustomButtonProps } from "@/types";

export const CustomButton: React.FC<CustomButtonProps> = ({
  text = "Shop Now",
  icon: Icon = AiOutlineShoppingCart,
  showIcon = true,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center font-medium text-sm justify-center gap-2 px-12 py-4 text-white bg-[#0A142F] rounded-full transition-colors ${className}`}
    >
      <span>{text}</span>
      {showIcon && Icon && <Icon size={20} />}
    </button>
  );
};
