import React from "react";

interface HeroProps {
  pageName: string;
}

const Hero: React.FC<HeroProps> = ({ pageName }) => {
  return (
    <div
      style={{
        height: "25vh",
        backgroundImage: "url(/path/to/your/image.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
      }}
    >
      <h1>{pageName}</h1>
    </div>
  );
};

export default Hero;
