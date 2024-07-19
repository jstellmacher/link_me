import Avatar from "../components/Avatar";
import Grid from "../components/Grid";
import FooterCard from "../components/FooterCard";
import TreeIcons from "../components/TreeIcons";

// Styles
const containerStyle = `
  relative flex min-h-screen flex-col items-center justify-center p-6 
  bg-gradient-to-r from-green-400 via-green-500 to-green-600 overflow-hidden
`;
const heroSectionStyle = `
  relative z-10 flex flex-col items-center mb-4 text-center
`;
const titleContainerStyle = `
  relative p-4 rounded-lg 
  transition-all duration-300
  border border-transparent hover:border-4 hover:border-dark-green 
  bg-white bg-opacity-90 hover:bg-opacity-70 
  hover:shadow-lg transform hover:scale-105
`;
const titleStyle = `
  text-4xl font-extrabold text-gray-800 mt-2 mb-2 cursor-pointer 
  hover:text-blue-300
`;
const descriptionStyle = `
  text-lg text-gray-800 mt-4
`;

export default function Home() {
  const avatarSrc = "/images/thumbs_up_jai-removebg.png"; // Static path to avatar image
  const githubLink = "https://github.com/jstellmacher/link_me"; // Replace with your actual GitHub project link

  return (
    <main className={containerStyle}>
      {/* Background Icons */}
      <TreeIcons />

      {/* Hero Section */}
      <section className={heroSectionStyle}>
        <Avatar
          src={avatarSrc} // Static path to avatar image
          alt="Avatar" // Provide an alt text
        />
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <div className={titleContainerStyle}>
            <h1 className={titleStyle}>
              Welcome to My Link Me -- A Linktree clone
            </h1>
          </div>
        </a>
        <p className={descriptionStyle}></p>
      </section>

      {/* Links Grid */}
      <Grid />

      {/* Footer Section */}
      <FooterCard
        copyright="© 2024 Your Name"
        description="Your footer description goes here."
      />
    </main>
  );
}
