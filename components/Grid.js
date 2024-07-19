import { useEffect, useState } from "react";
import LinkCard from "./LinkCard";

// Styles
const containerStyle = `
  relative z-10 w-full max-w-3xl mx-auto
`;
const glassPanelStyle = `
  bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-lg shadow-md shadow-gray-700
`;
const gridStyle = `
  grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
`;

export default function Grid() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    async function fetchLinks() {
      try {
        const response = await fetch('/links.json');
        const data = await response.json();
        console.log("Fetched links:", data); // Debugging line
        setLinks(data);
      } catch (error) {
        console.error("Error fetching links:", error);
      }
    }

    fetchLinks();
  }, []);

  return (
    <section className={containerStyle}>
      <div className={glassPanelStyle}>
        <div className={gridStyle}>
          {links.length > 0 ? (
            links.map((link) => (
              <LinkCard
                key={link.href}
                href={link.href}
                title={link.title}
                description={link.description}
                icon={link.icon}
              />
            ))
          ) : (
            <p className="text-center text-gray-600">No links available</p>
          )}
        </div>
      </div>
    </section>
  );
}
