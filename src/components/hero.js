export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: "url(/hero-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#1b4332",
        padding: "4rem 2rem",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(10, 40, 20, 0.7)",
        }}
      />

      <div
        className="grid-container"
        style={{ position: "relative", zIndex: 1 }}
      >
        <p
          style={{
            color: "#7fc9a0",
            fontSize: "0.85rem",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          WELCOME TO
        </p>
        <h1
          style={{
            color: "white",
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            fontWeight: "bold",
            margin: "0 auto 1rem",
            maxWidth: "700px",
          }}
        >
          US Harmful Algal Bloom - Control Technologies Incubator Clearinghouse
        </h1>
        <p
          style={{
            color: "#c5e8d5",
            fontSize: "1rem",
            maxWidth: "600px",
            margin: "0 auto 2rem",
          }}
        >
          A centralized HAB control regulations and permitting information to
          help users navigate algaecide use in marine and freshwater.
        </p>
        <a
          className="usa-button"
          style={{
            backgroundColor: "#2d6a4f",
            border: "2px solid #7fc9a0",
            color: "white",
            padding: "0.75rem 2rem",
          }}
        >
          WELCOME
        </a>
      </div>
    </section>
  );
}
