import { FaReddit } from 'react-icons/fa'; // Example of alternative import
import {
  FiLinkedin,
  FiGithub,
  FiYoutube,
  FiTwitter,
  FiInstagram,
  FiTwitch,
  FiFileText,
  FiStar
} from 'react-icons/fi';

export function getIconComponent(iconName) {
  switch (iconName) {
    case "linkedin":
      return <FiLinkedin size={24} />;
    case "github":
      return <FiGithub size={24} />;
    case "youtube":
      return <FiYoutube size={24} />;
    case "twitter":
      return <FiTwitter size={24} />;
    case "reddit":
      return <FaReddit size={24} />; // Use alternative icon
    case "instagram":
      return <FiInstagram size={24} />;
    case "twitch":
      return <FiTwitch size={24} />;
    case "medium":
      return <FiFileText size={24} />;
    case "patreon":
      return <FiStar size={24} />;
    default:
      return null; // Return null if no matching icon is found
  }
}
