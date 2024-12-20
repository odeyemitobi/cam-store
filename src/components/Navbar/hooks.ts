"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export const useNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const searchBarRef = useRef(null);
  const cartRef = useRef<HTMLDivElement | null>(null);
  const userRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const drawerRef = useRef(null);

  const navItems = ["Home", "Shop", "Categories", "About Us", "Contact Us"];

  const initializeDesktopAnimations = () => {
    const desktopTimeline = gsap.timeline();

    desktopTimeline
      .from(logoRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .from(
        ".nav-link",
        {
          y: -50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        searchBarRef.current,
        {
          width: 0,
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
        },
        "-=0.3"
      )
      .from(
        [cartRef.current, userRef.current],
        {
          scale: 0,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );
  };

  const initializeMobileAnimations = () => {
    const mobileTimeline = gsap.timeline();

    mobileTimeline
      .from(".mobile-header", {
        y: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      })
      .from(
        ".mobile-search",
        {
          opacity: 0,
          y: 20,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2"
      );
  };

  const setupHoverAnimations = () => {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, {
          y: -2,
          duration: 0.2,
          ease: "power1.out",
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(link, {
          y: 0,
          duration: 0.2,
          ease: "power1.in",
        });
      });
    });

    const cartIcon = cartRef.current;
    if (cartIcon) {
      cartIcon.addEventListener("mouseenter", () => {
        gsap.to(cartIcon, {
          scale: 1.1,
          rotation: 10,
          duration: 0.3,
          ease: "power1.out",
        });
      });

      cartIcon.addEventListener("mouseleave", () => {
        gsap.to(cartIcon, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power1.in",
        });
      });
    }
  };

  const handleDrawerAnimation = () => {
    if (drawerRef.current) {
      gsap.set(drawerRef.current, {
        yPercent: 100,
      });

      const drawerAnimation = gsap.to(drawerRef.current, {
        yPercent: isDrawerOpen ? 0 : 100,
        duration: 0.5,
        ease: "power3.inOut",
        paused: true,
      });

      if (isDrawerOpen) {
        drawerAnimation.play();

        gsap.from(".drawer-item", {
          x: -30,
          opacity: 0,
          stagger: 0.05,
          duration: 0.4,
          delay: 0.2,
          ease: "power2.out",
        });
      } else {
        drawerAnimation.reverse();
      }
    }
  };

  useEffect(() => {
    initializeDesktopAnimations();
    initializeMobileAnimations();
    setupHoverAnimations();
  }, []);

  useEffect(() => {
    handleDrawerAnimation();
  }, [isDrawerOpen]);

  return {
    navItems,
    isDrawerOpen,
    setIsDrawerOpen,
    navbarRef,
    logoRef,
    linksRef,
    searchBarRef,
    cartRef,
    userRef,
    mobileMenuRef,
    drawerRef,
  };
};
