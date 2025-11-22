import { useNavigate } from "react-router-dom";
import HamburgerMenu from "@/components/HamburgerMenu";
import LogoPlaceholder from "@/components/LogoPlaceholder";
import backgroundImage from "@/assets/backgrounds/fantasy-landscape.jpeg";

const Index = () => {
  const navigate = useNavigate();

  const startGame = () => {
    console.log("Starting game...");
    // Navigate to game screen (to be implemented)
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
          <div className="pixel-border glass-panel p-6 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-sm md:text-base lg:text-lg text-foreground leading-relaxed">
              Embark on an epic journey through a world where magic meets technology.
              <br />
              Solve puzzles, defeat cyber threats, and save the realm!
            </p>
          </div>

          {/* Start Game Button */}
          <button
            onClick={startGame}
            className="pixel-border pixel-border-hover bg-primary text-primary-foreground px-8 py-4 text-lg md:text-xl font-bold animate-fade-in hover:brightness-110 transition-all"
            style={{ animationDelay: "0.4s" }}
          >
            Start Game
          </button>

          {/* Decorative elements */}
          <div className="mt-8 flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <span className="text-2xl">⚔️</span>
            <span className="text-2xl">🛡️</span>
            <span className="text-2xl">🔮</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
