import { z } from "zod";
import { zJob } from "@/lib/types";

const zExperience = z.object({
  fi: z.array(zJob),
  en: z.array(zJob),
});

export const experience = zExperience.parse({
  fi: [
    {
      title: "Ohjelmistokehittäjä — Tekninen vastaava",
      company: "Teollisuuden Voima Oyj",
      period: "12/2024 – nykyinen",
      bullets: [
        "Arkkitehtuurisen suunnan johtaminen yli 10 hengen tiimissä – mahdollistavien mallien vakiinnuttaminen pakottavien sijaan, mikä vähentää perehdytyksen kitkaa ja pitää koodipohjan mukautuvana",
        "Full stack -kehitys Next.js-, Node.js- ja Express-teknologioilla",
        "Jaettujen TypeScript-abstraktioiden ja Zod-pohjaisten datasopimusten suunnittelu, jotka yhtenäistävät tiimikäytäntöjä rajoittamatta arkkitehtuurista joustavuutta",
      ],
    },
    {
      title: "Supply Chain AI Specialist",
      company: "Leafhill Solutions Oy",
      period: "06/2024 – 12/2024",
      bullets: [
        "Tutkimus tekoälyratkaisuista OCR:n ja tekoälyn käyttämiseksi strukturoimattomien dokumenttien (pakkauslistat, laskut jne.) muuntamiseen strukturoituun muotoon",
        "Sisäisen LMS-järjestelmän uudelleenrakenteen suunnittelu, mukaan lukien käyttöliittymäsuunnittelu",
        "ORM:n generoimien SQL-kyselyjen ja tietokantaindeksien optimointi, mikä johti 10x nopeampiin kyselyihin",
      ],
    },
    {
      title: "Software Engineer",
      company: "Dyme Solutions Oy",
      period: "05/2023 – 10/2023",
      bullets: [
        "DevOps: CI/CD-putken kehitys, kääntämis- ja testausautomaatio (Groovy) sekä Jenkins IaC Job DSL:llä",
        "Docker-ympäristön haavoittuvuusskannauksen integrointi (Jenkins, Trivy)",
        "AWS Lambda -palvelukomponentit (TypeScript, DynamoDB, SQS)",
      ],
    },
    {
      title: "Associate Cloud Developer",
      company: "Basware Oyj",
      period: "05/2022 – 10/2022",
      bullets: [
        "Python Flask -backend sovelluksen jatkokehittämistä AWS Lambdassa DynamoDB-integraatiolla",
        "React- ja Angular-käyttöliittymien suunnittelu ja ohjelmointi",
        "Yksikkötestit Pytest-kehyksellä, E2E-testit Cypress-alustalla",
      ],
    },
    {
      title: "IT Systems Support",
      company: "Suomen Euromaster Oy",
      period: "05/2021 – 05/2022",
      bullets: [
        "Ohjelmistorobotiikka (AutoHotkey) manuaalisen tietotyön poistamiseen — toistuvien työnkulkujen automatisointi myyntijärjestelmässä",
        "C# .NET Core -konsoliapplikaatio tarratulostuksen automatisointiin — kymmenet tunnit kuukausittaista Excel-työtä muuttui yhdeksi päivittäiseksi skripti-ajoksi",
        "Google Sheets -varastonhallintajärjestelmä Apps Scriptillä (JavaScript)",
      ],
    },
  ],
  en: [
    {
      title: "Software Developer — Technical Lead",
      company: "Teollisuuden Voima Oyj",
      period: "12/2024 – present",
      bullets: [
        "Led architectural direction for our 10+ person team, establishing enabling patterns over prescriptive ones — reducing onboarding friction while keeping the codebase adaptable",
        "Full stack development with Next.js, Node.js, and Express",
        "Designed shared TypeScript abstractions and Zod-based data contracts that standardise team practices without constraining architectural flexibility",
      ],
    },
    {
      title: "Supply Chain AI Specialist",
      company: "Leafhill Solutions Oy",
      period: "06/2024 – 12/2024",
      bullets: [
        "Research into AI solutions using OCR and AI to scan unstructured documents (packing lists, invoices, etc.) into structured data",
        "Planning a restructuring of the in-house LMS system, including UI design",
        "Optimising ORM-generated SQL and database indices, resulting in a 10x speedup in queries",
      ],
    },
    {
      title: "Software Engineer",
      company: "Dyme Solutions Oy",
      period: "05/2023 – 10/2023",
      bullets: [
        "DevOps: CI/CD pipeline development, build/test automation (Groovy), and Jenkins IaC with Job DSL",
        "Integration of vulnerability scanning for Docker environments (Jenkins, Trivy)",
        "AWS Lambda service components (TypeScript, DynamoDB, SQS)",
      ],
    },
    {
      title: "Associate Cloud Developer",
      company: "Basware Oyj",
      period: "05/2022 – 10/2022",
      bullets: [
        "Extending Python Flask backend on AWS Lambda with DynamoDB integration",
        "React and Angular UI design and programming",
        "Unit tests with Pytest, E2E tests with Cypress",
      ],
    },
    {
      title: "IT Systems Support",
      company: "Suomen Euromaster Oy",
      period: "05/2021 – 05/2022",
      bullets: [
        "Software robotics (AutoHotkey) to eliminate manual data entry — automating repetitive workflows across the sales system",
        "C# .NET Core console application that automated sticker printing for order fulfilment, reducing tens of hours of monthly Excel work to a single daily script run",
        "Google Sheets inventory management system with Apps Script (JavaScript)",
      ],
    },
  ],
});
