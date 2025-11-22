import { useState } from "react";
import { Menu, X, Settings } from "lucide-react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 left-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pixel-border pixel-border-hover bg-primary p-3 transition-all"
        aria-label="Menu"
      >
        {isOpen ? (
          <X className="w-6 h-6" style={{ imageRendering: "pixelated" }} />
        ) : (
          <Menu className="w-6 h-6" style={{ imageRendering: "pixelated" }} />
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-16 left-0 pixel-border glass-panel p-6 min-w-[200px] animate-fade-in">
            <button
              onClick={() => {
                console.log("Settings clicked");
                setIsOpen(false);
              }}
              className="flex items-center gap-3 w-full text-left hover:text-primary transition-colors p-2"
            >
              <Settings className="w-5 h-5" />
              <span className="text-sm">Settings</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default HamburgerMenu;
