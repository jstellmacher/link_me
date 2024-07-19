import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaTwitter,
  FaReddit,
  FaInstagram,
  FaTwitch,
  FaMedium,
  FaPatreon,
} from "react-icons/fa";

// Define colors for each icon using SVG props
const iconMapping = {
  linkedin: <FaLinkedin size={64} color="#0A66C2" />,
  github: <FaGithub size={64} color="#181717" />,
  youtube: <FaYoutube size={64} color="#FF0000" />,
  twitter: <FaTwitter size={64} color="#1DA1F2" />,
  reddit: <FaReddit size={64} color="#FF4500" />,
  instagram: <FaInstagram size={64} color="#C13584" />,
  twitch: <FaTwitch size={64} color="#9146FF" />,
  medium: <FaMedium size={64} color="#00AB6C" />,
  patreon: <FaPatreon size={64} color="#F96854" />,
};

export default function LinkCard({ href, title, description, icon }) {
  // Do not render card if href is empty
  if (!href) return null;

  const cardStyle =
    "flex flex-col items-center justify-center w-full border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-105 bg-white mb-2 max-w-md sm:max-w-lg";
  const iconContainerStyle =
    "flex items-center justify-center h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32"; // Reduced container size
  const iconStyle = "h-4/5 w-4/5"; // Adjusted icon size
  const titleStyle =
    "font-semibold text-lg text-gray-900 text-center mt-2 mb-1"; // Reduced bottom margin
  const descriptionStyle = "text-sm text-gray-600 text-center mb-2"; // Adjusted bottom margin

  const IconComponent = iconMapping[icon] || (
    <img src={icon} alt="Icon" className={iconStyle} />
  );

  return (
    <a
      href={href}
      className={cardStyle}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={iconContainerStyle}>{IconComponent}</div>
      <div className={titleStyle}>{title}</div>
      <p className={descriptionStyle}>{description}</p>
    </a>
  );
}
