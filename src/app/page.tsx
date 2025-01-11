"use client";

import React from "react";
import Hero from "@/components/Hero-section";
import ProductShowcase from "./../components/Product-showcase";
import ProductBestsellers from "./../components/Product-Bestsellers";

export default function Page() {
  return (
    <div className="w-full bg-[#FCFCFC]">
      <div className="bg-[#E8E8E8] pt-24 lg:pt-0">
        <Hero />
      </div>
      <div>
        <ProductShowcase />
      </div>
      <div>
        <ProductBestsellers />
      </div>
    </div>
  );
}
