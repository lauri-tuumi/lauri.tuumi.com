import { type Lang, getPdfFilename } from "@/lib/types";
import { theme } from "@/lib/theme";
import { ui } from "@/lib/translations";
import { contact, getEmail, skills, education, experience, references } from "@/data";
import { Header } from "./cv/Header";
import { EmailButton } from "./cv/EmailButton";
import { EducationSection } from "./cv/sections/EducationSection";
import { SkillsSection } from "./cv/sections/SkillsSection";
import { ProjectNotesSection } from "./cv/sections/ProjectNotesSection";
import { ExperienceSection } from "./cv/sections/ExperienceSection";
import { ReferencesSection } from "./cv/sections/ReferencesSection";

const CVPage = ({ lang }: { lang: Lang }) => {
  const t = ui[lang];
  const otherLang = lang === "en" ? "fi" : "en";

  return (
    <div style={{ minHeight: "100vh", background: theme.pageBg }}>
      <Header
        subtitle={t.subtitle}
        summary={t.summary}
        toggleLabel={t.toggleLabel}
        linkedinUrl={contact.linkedin}
        otherLangHref={otherLang === "en" ? "/" : `/${otherLang}`}
        emailSlot={<EmailButton email={getEmail()} labels={t.email} />}
        downloadPdfSlot={
          <a
            href={`/${getPdfFilename(lang)}`}
            download
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "transparent",
              color: "var(--cv-text-muted)",
              border: "1px solid var(--cv-border)",
              padding: "0.45rem 1rem",
              fontSize: "0.78rem",
              fontWeight: 700,
              textDecoration: "none",
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            &#x2193; CV PDF
          </a>
        }
      />

      <main
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "2.5rem 2rem",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2rem",
        }}
        className="cv-main-grid"
      >
        {/* Left column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <ExperienceSection
            items={experience[lang]}
            label={t.sections.experience}
            theme={theme}
          />
          {references[lang].length > 0 && (
            <ReferencesSection
              items={references[lang]}
              label={t.sections.references}
              noteTemplate={t.sections.referencesNoteTemplate}
              linkedinLabel={t.linkedin}
              verificationLabels={t.referenceVerification}
              theme={theme}
            />
          )}
        </div>

        {/* Right sidebar */}
        <aside style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <SkillsSection
            items={skills[lang]}
            label={t.sections.skills}
            theme={theme}
            tierLabels={t.skillTiers}
          />
          <EducationSection
            items={education[lang]}
            label={t.sections.education}
            theme={theme}
          />
        </aside>

        {/* This CV — last on mobile, right column on desktop */}
        <div className="this-cv-slot">
          <ProjectNotesSection
            heading={t.notes.heading}
            items={
              references[lang].length > 0
                ? t.notes.items
                : t.notes.items.filter((item) => item.id !== "trust-integrity")
            }
            theme={theme}
          />
        </div>
      </main>

      <style>{`
        @media (min-width: 768px) {
          .cv-main-grid {
            grid-template-columns: 1fr 210px !important;
          }
          .this-cv-slot {
            grid-column: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default CVPage;
