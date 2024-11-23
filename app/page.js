"use client";

import React, { useState } from "react";

const page = () => {
  const [style, setStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
    transition: "transform 0.1s ease-out", // Smooth transition for transform
  });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X position relative to element
    const y = e.clientY - rect.top; // Mouse Y position relative to element
    const centerX = rect.width / 2; // Center X of element
    const centerY = rect.height / 2; // Center Y of element

    // Calculate rotation based on mouse position
    const rotateX = ((y - centerY) / centerY) * 15; // Max tilt 15 degrees
    const rotateY = ((x - centerX) / centerX) * -15; // Max tilt -15 degrees

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: "transform 0.1s ease-out", // Smooth transition for transform
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
      transition: "transform 0.3s ease-out", // Smooth transition back to normal
    });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-amber-700">
        <h1
          className="text-9xl font-bold text-center text-white"
          style={style}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          Hover Me
          <br />
          and see magic
          <br />
          magic happen in <br />
          real life
        </h1>
      </div>
    </>
  );
};

export default page;
