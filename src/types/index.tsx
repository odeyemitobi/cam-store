export interface CustomButtonProps {
  text?: string;
  icon?: React.ComponentType<{ size?: number }>;
  showIcon?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  description: string;
}

interface ProductAnimation {
  x: number;
  y: number;
  rotation: number;
}

export interface ProductShow {
  category: string;
  brand: string;
  description: string;
  bgColor: string;
  image: string;
  animation: ProductAnimation;
}

export interface AnimationRefs {
  headingRef: React.RefObject<HTMLHeadingElement | null>;
  paragraphRef: React.RefObject<HTMLParagraphElement | null>;
  buttonRef: React.RefObject<HTMLDivElement | null>;
  imageRef: React.RefObject<HTMLDivElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
}
