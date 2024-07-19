import React from "react";

// Define style constants
const footerCardStyle = `
  flex flex-col items-center w-full mt-8 mb-8 max-w-3xl
  bg-gradient-to-r from-green-400 to-green-600
  border border-transparent rounded-2xl shadow-md backdrop-blur-md
`;

const separatorStyle = `
  w-full
`;

const separatorLineStyle = `
  border-t border-gray-300 mb-4
`;

const contentStyle = `
  p-4 text-white
`;

const headingStyle = `
  text-xl font-semibold text-center mb-4
`;

const descriptionStyle = `
  text-center
`;

export default function FooterCard({ copyright, description }) {
  return (
    <div className={footerCardStyle}>
      <div className={separatorStyle}>
        <hr className={separatorLineStyle} />
      </div>
      <div className={contentStyle}>
        <h2 className={headingStyle}>
          {copyright}
        </h2>
        <p className={descriptionStyle}>
          {description}
        </p>
      </div>
    </div>
  );
}
