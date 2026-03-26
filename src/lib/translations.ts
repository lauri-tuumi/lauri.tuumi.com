import { z } from "zod";

const zNoteItem = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  body: z.union([z.string().min(10), z.array(z.string().min(1)).min(1)]),
  link: z.object({ href: z.url(), label: z.string().min(1) }).optional(),
});

const zUiEntry = z.object({
  subtitle: z.string().min(1),
  summary: z.array(z.string().min(10)).length(3),
  sections: z.object({
    education: z.string().min(1),
    skills: z.string().min(1),
    experience: z.string().min(1),
    references: z.string().min(1),
    referencesNoteTemplate: z.object({
      prefix: z.string(),
      conjunction: z.string().min(1),
      oxfordComma: z.boolean(),
      suffix: z.string().min(1),
    }),
  }),
  skillTiers: z.object({
    core: z.string().min(1),
    familiar: z.string().min(1),
  }),
  currentLabel: z.string().min(1),
  linkedin: z.string().min(1),
  toggleLabel: z.string().min(1),
  referenceVerification: z.object({
    pr: z.string().min(1),
    linkedin_post: z.string().min(1),
    howToVerifyLink: z.string().min(1),
    dialog: z.object({
      title: z.string().min(1),
      body: z.array(z.string().min(1)).length(3),
      close: z.string().min(1),
    }),
  }),
  notes: z.object({
    heading: z.string().min(1),
    items: z.array(zNoteItem).min(1),
  }),
});

const zUi = z.object({
  fi: zUiEntry,
  en: zUiEntry,
});

export const ui = zUi.parse({
  fi: {
    subtitle: "Tekninen Johtaja",
    summary: [
      "Olen full stack -tekninen johtaja. Hallitsen toteutusten elinkaarta arkkitehtuurista ja API-suunnittelusta skaalautuviin käyttönottoihin ja kehitykseen.",
      "Keskityn tiimien tuottavuuteen ilman ylisuunnittelua: vahvat yhteiset käytänteet, sekä selkeät ja joustavat yhteiset toimintamallit. Teen harkittuja ratkaisuja siitä, milloin lisätä rakenetta ja milloin pysyä yksinkertaisessa.",
      "Olen kiinnostunut kehittäjäergonomiasta, periaatteellisesta arkkitehtuurista ja aidosti skaalautuvasta AI-avusteisesta kehityksestä.",
    ],
    sections: {
      education: "Koulutus",
      skills: "Taidot",
      experience: "Työkokemus",
      references: "Suosittelijat",
      referencesNoteTemplate: {
        prefix: "",
        conjunction: "ja",
        oxfordComma: false,
        suffix: "ovat julkisesti suositelleet minua. Iso kiitos heille siitä.",
      },
    },
    skillTiers: {
      core: "Ydinteknologiat",
      familiar: "Myös kokemusta",
    },
    currentLabel: "nykyinen",
    linkedin: "LinkedIn",
    toggleLabel: "Read in English",
    referenceVerification: {
      pr: "Katso GitHub PR →",
      linkedin_post: "Katso LinkedIn-julkaisu →",
      howToVerifyLink: "Miten vahvistaa →",
      dialog: {
        title: "Miten vahvistaminen toimii",
        body: [
          "Jokainen suosittelija on vahvistanut suosituksensa julkisesti — joko avaamalla pull requestin tämän CV:n GitHub-repositorioon tai julkaisemalla viestin LinkedInissä.",
          "GitHub PR on sidottu tekijän GitHub-identiteettiin ja näkyy pysyvästi repositorion historiassa. LinkedIn-julkaisu on sidottu heidän ammatilliseen profiiliinsa.",
          "Klikkaa minkä tahansa kortin linkkiä tarkastaaksesi lähteen suoraan.",
        ],
        close: "Sulje",
      },
    },
    notes: {
      heading: "Tämä CV",
      items: [
        {
          id: "source-code",
          title: "Lähdekoodi",
          body: "Olen julkaissut tämän CV:n lähdekoodin avoimesti — katso miten se on rakennettu.",
          link: { href: "https://github.com/lauri-tuumi/lauri.tuumi.com", label: "Katso GitHubissa →" },
        },
        {
          id: "trust-integrity",
          title: "Luottamus & Integriteetti",
          body: [
            "Olen tehnyt kaikista suosituksista julkisesti vahvistettavia — jokainen on linkitetty tekijän itsensä avaamaan GitHub PR:ään tai LinkedIn-julkaisuun.",
            "Luottamus ilman vahvistusta on pelkkä oletus; julkisesti tarkastettavat, identiteettiin sidotut väitteet ovat modernin digitaalisen infrastruktuurin perusta.",
          ],
        },
        {
          id: "static-site",
          title: "Staattinen Next.js-sivusto",
          body: [
            "Tämä sivusto rakentuu staatiseksi HTMLäksi — ei palvelinta, ei tietokantaa, ei backendiä hallinnoitavaksi tai suojattavaksi.",
            "CV:lle se on ilmeisin valinta: nopea, yksinkertainen, ja monimutkaisuus vastaa ongelmaa.",
          ],
        },
        {
          id: "pdf-export",
          title: "PDF-vienti",
          body: [
            "Sivusto muodostaa PDF:än jokaisen muutoksen yhteydessä, joten erillistä tiedostoa ei tarvitse ylläpitää. Tarvittaessa nappaan aina uusimman version tältä sivulta — ei monistettua tietoa, ei vanhetuneita tiedostoja.",
            "Luotu PDF on ATS-ystävällinen. Ihmislukijoita kannustetaan lukemaan täysi versio verkossa.",
          ],
        },
        {
          id: "contact-ux",
          title: "Yhteydenotto-UX",
          body: [
            "En käytä erillistä sähköpostiohjelmaa, joten pelkkä mailto:-linkki tarkoittaa osoitteen etsimistä ja manuaalista kopiointia. Tämä CV antaa käyttäjän valita kopioidakko sähköpostiosoite suoraan vai käyttää mailto-linkkiä.",
            "Pienet vuorovaikutukset kuten tämä heijastavat laajempaa kiinnostustani UX:ään: paras käyttöliittymä on sellainen, jota tuskin huomaa.",
          ],
        },
      ],
    },
  },
  en: {
    subtitle: "Technical Lead",
    summary: [
      "I'm a full stack tech lead. I own the full lifecycle of implementations — from architecture and API design to scalable deployment and ongoing development.",
      "I focus on keeping teams productive without over-engineering: establishing shared conventions, creating clear and adaptable patterns, and making deliberate calls about when to add structure and when to stay simple.",
      "I'm interested in developer ergonomics, principled architecture, and truly scalable AI-assisted development.",
    ],
    sections: {
      education: "Education",
      skills: "Skills",
      experience: "Work Experience",
      references: "References",
      referencesNoteTemplate: {
        prefix: "Thank you to",
        conjunction: "and",
        oxfordComma: true,
        suffix: "for vouching for me publicly.",
      },
    },
    skillTiers: {
      core: "Core stack",
      familiar: "Also worked with",
    },
    currentLabel: "present",
    linkedin: "LinkedIn",
    toggleLabel: "Lue suomeksi",
    referenceVerification: {
      pr: "View GitHub PR →",
      linkedin_post: "View LinkedIn Post →",
      howToVerifyLink: "How to verify →",
      dialog: {
        title: "How verification works",
        body: [
          "Each reference has verified their recommendation publicly — either by opening a pull request against this CV's GitHub repository, or on LinkedIn.",
          "A GitHub PR is tied to the author's GitHub identity and is permanently visible in the repository's history. A LinkedIn recommendation is tied to their professional profile.",
          "Click the link on any card to inspect the source directly.",
        ],
        close: "Close",
      },
    },
    notes: {
      heading: "This CV",
      items: [
        {
          id: "source-code",
          title: "Source Code",
          body: "I've open-sourced this CV — see how it's built.",
          link: { href: "https://github.com/lauri-tuumi/lauri.tuumi.com", label: "View on GitHub →" },
        },
        {
          id: "trust-integrity",
          title: "Trust & Integrity",
          body: [
            "I've made every recommendation on this CV publicly verifiable — each one is linked to a GitHub PR or LinkedIn recommendation authored by the person themselves.",
            "Trust without verification is just assumption; publicly auditable, identity-tied claims are the backbone of modern digital infrastructure.",
          ],
        },
        {
          id: "static-site",
          title: "Static Next.js Export",
          body: [
            "This project is exported as a fully static site. Deploying to Github Pages or Cloudflare Pages means no backend or database to manage and secure.",
            "For a CV, it's the obvious choice: fast, simple. The complexity matches the problem.",
          ],
        },
        {
          id: "pdf-export",
          title: "PDF Export",
          body: [
            "The site generates a PDF on every deploy, so there's no separate file to maintain. When applying, I grab the latest from the site — no version drift, no stale attachments.",
            "The exported PDF is ATS-friendly. Human readers are encouraged to view the full stylized version online.",
          ],
        },
        {
          id: "contact-ux",
          title: "Contact UX",
          body: [
            "I don't use a desktop email client, so a bare mailto: link would just mean hunting for the address to copy-paste it. I let the user choose how to handle the email — less friction, more results.",
            "Small interactions like this reflect a broader interest in UX: the best interface is one you barely notice.",
          ],
        },
      ],
    },
  },
});
