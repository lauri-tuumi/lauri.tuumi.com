import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  Link,
} from "@react-pdf/renderer";
import type { Lang } from "@/lib/types";
import { skills, education, experience } from "@/data";
import { ui } from "@/lib/translations";
import { styles } from "./styles";

export const CvPdfDocument = ({
  lang,
  qrDataUrl,
  siteUrl,
  pfpSrc,
  publicDir,
}: {
  lang: Lang;
  qrDataUrl: string;
  siteUrl: string;
  pfpSrc: string;
  publicDir: string;
}) => {
  const t = ui[lang];
  const edu = education[lang];
  const sk = skills[lang];
  const exp = experience[lang];
  const coreSkills = sk.filter((s) => s.level >= 4);
  const familiarSkills = sk.filter((s) => s.level < 4);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.headerSection}>
          <View style={styles.headerInner}>
            <View style={styles.headerContent}>
              <Text style={styles.name}>
                <Text>Lauri </Text>
                <Text style={styles.nameAccent}>Tuumi</Text>
              </Text>
              <Text style={styles.subtitle}>{t.subtitle}</Text>
            </View>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image src={pfpSrc} style={styles.pfpImage} />
          </View>
        </View>

        {/* QR Banner */}
        <View style={styles.qrBanner}>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image src={qrDataUrl} style={styles.qrImage} />
          <View style={styles.qrTextBlock}>
            <Text style={styles.qrHeadline}>{t.pdf.qrHeadline}</Text>
            <Link src={siteUrl} style={styles.qrUrl}>{siteUrl.replace("https://", "")}</Link>
            <Text style={styles.qrNote}>
              {t.pdf.qrNote}
            </Text>
          </View>
        </View>

        {/* Body */}
        <View style={styles.body}>
          {/* Left column — Experience */}
          <View style={styles.leftCol}>
            <View style={styles.section}>
              <Text style={styles.sectionHeading}>{t.sections.experience}</Text>
              {exp.map((job, i) => (
                <View key={i} style={styles.jobCard}>
                  <Text style={styles.jobTitle}>{job.title}</Text>
                  <Text style={styles.jobMeta}>
                    {job.company} · {job.period}
                  </Text>
                  {job.bullets.map((b, j) => (
                    <View key={j} style={styles.bullet}>
                      <Text style={styles.bulletDash}>–</Text>
                      <Text style={styles.bulletText}>{b}</Text>
                    </View>
                  ))}
                </View>
              ))}
            </View>
          </View>

          {/* Right column — Education + Projects + Skills */}
          <View style={styles.rightCol}>
            {/* Education */}
            <View style={styles.section}>
              <Text style={styles.sectionHeading}>{t.sections.education}</Text>
              {edu.map((d, i) => (
                <View key={i}>
                  <Text style={styles.degreeTitle}>{d.degree}</Text>
                  <Text style={styles.degreeSchool}>{d.school}</Text>
                  <Text style={styles.degreeYears}>{d.years}</Text>
                </View>
              ))}
            </View>

            {/* Projects */}
            <View style={styles.section}>
              <Text style={styles.sectionHeading}>{t.sections.projects}</Text>
              {t.projects.items.map((project) => (
                <View key={project.id} style={styles.projectCard}>
                  <View style={styles.projectHeader}>
                    {project.logo && (
                      // eslint-disable-next-line jsx-a11y/alt-text
                      <Image
                        src={`${publicDir}${project.logo.pdfSrc}`}
                        style={styles.projectLogo}
                      />
                    )}
                    <Text style={styles.projectTitle}>
                      {project.logo ? project.title.replace(" ", "\n") : project.title}
                    </Text>
                  </View>
                  {(Array.isArray(project.body) ? project.body : [project.body]).map((body, i) => (
                    <Text key={i} style={styles.projectBody}>{body}</Text>
                  ))}
                  {project.link && (
                    <Link src={project.link.href} style={styles.projectLink}>
                      {project.link.label}
                    </Link>
                  )}
                </View>
              ))}
            </View>

            {/* Skills */}
            <View style={styles.section}>
              <Text style={styles.sectionHeading}>{t.sections.skills}</Text>
              <Text style={styles.skillTierLabel}>{t.skillTiers.core}</Text>
              {coreSkills.map((s, i) => (
                <View key={i} style={styles.skillRow}>
                  <Text style={styles.skillDot}>*</Text>
                  <Text style={styles.skillName}>{s.name}</Text>
                </View>
              ))}
              <Text style={[styles.skillTierLabel, { marginTop: 6 }]}>
                {t.skillTiers.familiar}
              </Text>
              {familiarSkills.map((s, i) => (
                <View key={i} style={styles.skillRow}>
                  <Text style={styles.skillDotFamiliar}>-</Text>
                  <Text style={styles.skillName}>{s.name}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
