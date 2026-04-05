import Link from "next/link";

const EnRedirectPage = () => (
  <main
    style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      padding: "2rem",
      background: "var(--cv-page-bg)",
      color: "var(--cv-text)",
    }}
  >
    <div
      style={{
        maxWidth: "32rem",
        border: "1px solid var(--cv-border)",
        borderTop: "3px solid var(--cv-primary)",
        background: "var(--cv-card-bg)",
        padding: "1.5rem",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
        English CV
      </h1>
      <p style={{ margin: "0.75rem 0 0", lineHeight: 1.6, color: "var(--cv-text-muted)" }}>
        This legacy link now points to the main English homepage.
      </p>
      <p style={{ margin: "0.75rem 0 0", lineHeight: 1.6, color: "var(--cv-text-muted)" }}>
        If you are not redirected automatically, continue to{" "}
        <Link href="/" style={{ color: "var(--cv-secondary)" }}>
          lauri.tuumi.com/
        </Link>
        .
      </p>
      <script
        dangerouslySetInnerHTML={{
          __html: 'window.location.replace("/")',
        }}
      />
    </div>
  </main>
);

export default EnRedirectPage;
