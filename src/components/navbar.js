export default function Navbar() {
  return (
    <header
      style={{ backgroundColor: "#1b4332" }}
      className="usa-header"
      role="banner"
    >
      <div className="usa-nav-container display-flex flex-align-center flex-justify padding-y-2">
        {/* LOGO */}
        <div className="usa-logo display-flex flex-align-center">
          <img
            src="/logo.png"
            alt="HAB-CTI Logo"
            style={{ width: "40px", marginRight: "10px" }}
          />
          <em
            className="usa-logo__text"
            style={{
              color: "white",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            US HAB-CTI
          </em>
        </div>

        {/* NAV LINKS */}
        <nav>
          <ul
            className="display-flex flex-row"
            style={{ listStyle: "none", margin: 0, padding: 0, gap: "1.5rem" }}
          >
            {["Home", "Laws", "Funding Resources", "HABs 101", "Help"].map(
              (link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                    }}
                  >
                    {link}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        {/* SEARCH */}
        <div
          className="display-flex flex-align-center"
          style={{ gap: "0.5rem" }}
        >
          <input
            className="usa-input"
            type="search"
            placeholder="Search..."
            style={{ margin: 0, width: "200px", height: "36px" }}
          />
          <button
            className="usa-button"
            style={{
              backgroundColor: "#0d2b1f",
              height: "36px",
              padding: "0 1rem",
              margin: 0,
            }}
          >
            Go
          </button>
        </div>
      </div>
    </header>
  );
}
