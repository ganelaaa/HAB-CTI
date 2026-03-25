export default function QuickAccess() {
  return (
    <section style={{ padding: "3rem 2rem", backgroundColor: "#f9f9f9" }}>
      <div className="grid-container">
        {/* Section Header */}
        <p
          style={{
            color: "#1b4332",
            fontSize: "0.75rem",
            fontWeight: "bold",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            marginBottom: "0.25rem",
          }}
        >
          RESOURCE NAVIGATION
        </p>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "2rem",
          }}
        >
          Quick Access to Key Tools
        </h2>

        {/* Three Columns */}
        <div className="grid-row grid-gap">
          {/* Laws & Permits */}
          <div className="tablet:grid-col-4">
            <div
              className="usa-card"
              style={{ border: "1px solid #d0e8d8", borderRadius: "8px" }}
            >
              <div className="usa-card__container">
                <div className="usa-card__header">
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "#1b4332",
                    }}
                  >
                    ⚖️ Laws and Permits
                  </h3>
                </div>
                <div className="usa-card__body">
                  <ul
                    className="usa-list usa-list--unstyled"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    {[
                      "Research Requirements & Guidelines",
                      "Field Studies",
                      "External Resources",
                      "Getting an Approval",
                      "Regulatory Agencies",
                    ].map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="usa-link"
                          style={{
                            fontSize: "0.85rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                          }}
                        >
                          🔗 {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Literature */}
          <div className="tablet:grid-col-4">
            <div
              className="usa-card"
              style={{ border: "1px solid #d0e8d8", borderRadius: "8px" }}
            >
              <div className="usa-card__container">
                <div className="usa-card__header">
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "#1b4332",
                    }}
                  >
                    📚 Literature
                  </h3>
                </div>
                <div className="usa-card__body">
                  <ul
                    className="usa-list usa-list--unstyled"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    {[
                      "HABs 101",
                      "Literature Search",
                      "Consultants Database",
                      "Control Technologies",
                    ].map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="usa-link"
                          style={{
                            fontSize: "0.85rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                          }}
                        >
                          🔗 {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="tablet:grid-col-4">
            <div
              className="usa-card"
              style={{ border: "1px solid #d0e8d8", borderRadius: "8px" }}
            >
              <div className="usa-card__container">
                <div className="usa-card__header">
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "#1b4332",
                    }}
                  >
                    🧪 Products
                  </h3>
                </div>
                <div className="usa-card__body">
                  <ul
                    className="usa-list usa-list--unstyled"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    {[
                      "Registered Products",
                      "Control Technologies",
                      "Patent Submissions & Costs",
                    ].map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="usa-link"
                          style={{
                            fontSize: "0.85rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                          }}
                        >
                          🔗 {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
