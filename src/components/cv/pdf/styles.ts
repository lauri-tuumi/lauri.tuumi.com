import { StyleSheet } from "@react-pdf/renderer";

const BLUE = "#1e3a8a";
const AMBER = "#f59e0b";
const DARK = "#0f172a";
const GRAY = "#64748b";
const LIGHT_GRAY = "#94a3b8";
const BORDER = "#e2e8f0";

export { BLUE, AMBER, DARK, GRAY, LIGHT_GRAY };

export const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9,
    color: DARK,
    paddingTop: 0,
    paddingBottom: 24,
    paddingHorizontal: 0,
  },
  // QR banner
  qrBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: BLUE,
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
    color: AMBER,
    marginBottom: 3,
  },
  qrNote: {
    fontSize: 8,
    color: "#cbd5e1",
  },
  // Header section
  headerSection: {
    backgroundColor: DARK,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 3,
    borderBottomColor: AMBER,
  },
  name: {
    fontSize: 26,
    fontFamily: "Helvetica-Bold",
    color: "#ffffff",
    marginBottom: 3,
  },
  nameAccent: {
    color: AMBER,
  },
  subtitle: {
    fontSize: 11,
    color: LIGHT_GRAY,
    marginBottom: 6,
  },
  contactRow: {
    flexDirection: "row",
    gap: 16,
    flexWrap: "wrap",
  },
  contactItem: {
    fontSize: 8,
    color: LIGHT_GRAY,
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
  logoBox: {
    width: 39,
    height: 39,
    borderRadius: 8,
    backgroundColor: "#1e293b",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  headerContent: {
    flex: 1,
  },
  // Section headings
  sectionHeading: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: BLUE,
    textTransform: "uppercase",
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
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
    color: DARK,
  },
  degreeSchool: {
    fontSize: 8,
    color: GRAY,
    marginBottom: 1,
  },
  degreeYears: {
    fontSize: 8,
    color: LIGHT_GRAY,
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
    color: AMBER,
  },
  skillDotFamiliar: {
    fontSize: 9,
    color: LIGHT_GRAY,
  },
  skillName: {
    fontSize: 8.5,
    color: DARK,
  },
  skillTierLabel: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: LIGHT_GRAY,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 4,
    marginTop: 2,
  },
  // Experience
  jobTitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: DARK,
    marginBottom: 1,
  },
  jobMeta: {
    fontSize: 8,
    color: GRAY,
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
    color: AMBER,
    width: 8,
  },
  bulletText: {
    fontSize: 8,
    color: DARK,
    flex: 1,
    lineHeight: 1.4,
  },
  jobBlock: {
    marginBottom: 10,
  },
  // References
  refName: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: DARK,
  },
  refTitle: {
    fontSize: 8,
    color: GRAY,
    marginBottom: 3,
  },
  refQuote: {
    fontSize: 7.5,
    color: GRAY,
    fontFamily: "Helvetica-Oblique",
    lineHeight: 1.5,
    marginBottom: 3,
  },
  refLink: {
    fontSize: 7.5,
    color: BLUE,
    textDecoration: "underline",
  },
  refBlock: {
    marginBottom: 10,
  },
});
