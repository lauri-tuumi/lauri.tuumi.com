import { StyleSheet } from "@react-pdf/renderer";
import { colors } from "@/lib/colors";

const NAVY = "#1e3a8a";
const TEXT = "#0f172a";
const TEXT_MUTED = "#64748b";

export const GOLD = colors.primary;

export const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9,
    color: TEXT,
    backgroundColor: "#ffffff",
    paddingTop: 0,
    paddingBottom: 24,
    paddingHorizontal: 0,
  },
  // QR banner
  qrBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: NAVY,
    paddingHorizontal: 28,
    paddingVertical: 14,
    marginBottom: 0,
  },
  qrImage: {
    width: 72,
    height: 72,
  },
  qrTextBlock: {
    flex: 1,
  },
  qrHeadline: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#ffffff",
    marginBottom: 4,
  },
  qrUrl: {
    fontSize: 9,
    color: colors.primary,
    marginBottom: 3,
  },
  qrNote: {
    fontSize: 8,
    color: "#cbd5e1",
  },
  // Header section
  headerSection: {
    backgroundColor: TEXT,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 3,
    borderBottomColor: colors.primary,
  },
  name: {
    fontSize: 26,
    fontFamily: "Space Grotesk",
    fontWeight: 700,
    color: "#ffffff",
    marginBottom: 3,
  },
  nameAccent: {
    color: colors.primary,
  },
  subtitle: {
    fontSize: 11,
    color: "#94a3b8",
    marginBottom: 6,
  },
  // Body
  body: {
    flexDirection: "row",
    paddingHorizontal: 28,
    paddingTop: 18,
    gap: 20,
  },
  leftCol: {
    width: "67%",
  },
  rightCol: {
    width: "30%",
  },
  headerInner: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 14,
  },
  pfpImage: {
    width: 60,
    height: 60,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: colors.primary,
    flexShrink: 0,
    objectFit: "cover",
  },
  headerContent: {
    flex: 1,
  },
  // Section headings
  sectionHeading: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: NAVY,
    textTransform: "uppercase",
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
    paddingBottom: 4,
    marginBottom: 8,
  },
  section: {
    marginBottom: 16,
  },
  // Education
  degreeTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: TEXT,
  },
  degreeSchool: {
    fontSize: 8,
    color: TEXT_MUTED,
    marginBottom: 1,
  },
  degreeYears: {
    fontSize: 8,
    color: TEXT_MUTED,
    marginBottom: 6,
  },
  // Skills
  skillRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 3,
  },
  skillDot: {
    fontSize: 9,
    color: colors.primary,
  },
  skillDotFamiliar: {
    fontSize: 9,
    color: TEXT_MUTED,
  },
  skillName: {
    fontSize: 8.5,
    color: TEXT,
  },
  skillTierLabel: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: TEXT_MUTED,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 4,
    marginTop: 2,
  },
  // Experience
  jobCard: {
    borderLeftWidth: 2,
    borderLeftColor: colors.primary,
    paddingLeft: 8,
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: TEXT,
    marginBottom: 1,
  },
  jobMeta: {
    fontSize: 8,
    color: TEXT_MUTED,
    marginBottom: 4,
  },
  bullet: {
    flexDirection: "row",
    gap: 4,
    marginBottom: 2,
    marginLeft: 4,
  },
  bulletDash: {
    fontSize: 8,
    color: colors.primary,
    width: 8,
  },
  bulletText: {
    fontSize: 8,
    color: TEXT,
    flex: 1,
    lineHeight: 1.4,
  },
  // References
  refName: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: TEXT,
  },
  refTitle: {
    fontSize: 8,
    color: TEXT_MUTED,
    marginBottom: 3,
  },
  refQuote: {
    fontSize: 7.5,
    color: TEXT_MUTED,
    fontFamily: "Helvetica-Oblique",
    lineHeight: 1.5,
    marginBottom: 3,
  },
  refLink: {
    fontSize: 7.5,
    color: NAVY,
    textDecoration: "underline",
  },
  refBlock: {
    marginBottom: 10,
  },
});
