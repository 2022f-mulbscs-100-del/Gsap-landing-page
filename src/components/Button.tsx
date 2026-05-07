import React, { useRef } from "react";
import gsap from "gsap";

export default function FillButton() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const fillRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = buttonRef.current;
    const fill = fillRef.current;

    const rect = btn!.getBoundingClientRect()  ;
 if (!btn || !fill) return;
    // mouse position inside button
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // place circle at mouse position
    gsap.set(fill, {
      x,
      y,
      scale: 0,
    //   opacity: 0,
    });

    gsap.to(fill, {

    //   opacity: 1,
      scale: 20,
      duration: 0.6,
      ease: "power2.inOut",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(fillRef.current, {
      scale: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-pink-300 px-8 py-3 rounded-full border border-black text-black"
    >
      {/* Fill layer */}
      <span
        ref={fillRef}
        className="absolute  w-6 h-6 bg-black rounded-full scale-0"
        style={{
          transform: "translate(-50%, -50%)",
          transformOrigin: "center",
        }}
      />

      {/* Text */}
      {/* <span className="relative z-10 mix-blend-difference text-white">
        Explore UI
      </span> */}
    </button>
  );
}