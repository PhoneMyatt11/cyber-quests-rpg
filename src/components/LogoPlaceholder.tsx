import logo from "../assets/logo.jpeg";

const LogoPlaceholder = () => {
  return (
    <div className="fixed top-4 right-4 z-40">
      <div className="pixel-border glass-panel w-16 h-16 flex items-center justify-center bg-accent/20">
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "4rem",
            height: "4rem",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: 6,
          }}
        />
      </div>
    </div>
  );
};

export default LogoPlaceholder;
