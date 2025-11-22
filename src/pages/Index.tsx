import { useNavigate } from "react-router-dom";
import HamburgerMenu from "@/components/HamburgerMenu";
import LogoPlaceholder from "@/components/LogoPlaceholder";
import backgroundImage from "@/assets/backgrounds/fantasy-landscape.jpeg";

const Index = () => {
  const navigate = useNavigate();

  const startGame = () => {
    console.log("Starting game...");
    navigate("/game");
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

      {/* Navigation elements */}
      <HamburgerMenu />
      <LogoPlaceholder />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* Game Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 text-shadow-pixel text-primary animate-fade-in">
            CyberQuest
          </h1>

          {/* Subtitle/Motto */}
          <p className="text-xs md:text-sm lg:text-base text-foreground leading-snug animate-fade-in" style={{ animationDelay: "0.2s", maxWidth: 480, margin: "0 auto", marginBottom: "1.75rem" }}>
            Discover cybersecurity through an epic fantasy adventure. Learn to spot threats, make smart choices, and protect the realm.
          </p>

          {/* Start Game Button */}
          <button
            onClick={startGame}
            className="pixel-border pixel-border-hover bg-primary text-primary-foreground px-8 py-4 text-lg md:text-xl font-bold animate-fade-in hover:brightness-110 transition-all"
            style={{ animationDelay: "0.4s" }}
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
