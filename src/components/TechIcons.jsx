import React from "react";

const icons = [
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg",
  },
  {
    name: "Express",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg",
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
  },
  {
    name: "Node.js",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "Java",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  },
];

const TechIcons = () => (
  <span className="flex items-center gap-3">
    {icons.map(({ name, src }) => (
      <img
        key={name}
        src={src}
        alt={name}
        title={name}
        className="w-6 h-6 transition-transform duration-200 hover:scale-110 hover:brightness-125"
        loading="lazy"
      />
    ))}
  </span>
);

export default TechIcons;
