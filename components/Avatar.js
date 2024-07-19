// components/Avatar.js

import React from "react";
import Image from "next/image";

export default function Avatar({ src, alt }) {
  const containerStyle =
    "relative overflow-hidden h-48 w-48 sm:h-64 sm:w-[20vw] mb-2 transition duration-300 rounded-full border-4 border-transparent hover:border-gray-300 hover:bg-opacity-50 hover:bg-gray-200";

  return (
    <div className={containerStyle}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </div>
  );
}
