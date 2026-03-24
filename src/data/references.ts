import { z } from "zod";
import { zReference } from "@/lib/types";

const zReferences = z.object({
  fi: z.array(zReference),
  en: z.array(zReference),
});

export const references = zReferences.parse({
  fi: [
    // {
    //   firstName: "Ville",
    //   lastName: "Vainio",
    //   title: "Chief Cloud Developer",
    //   company: "Basware Oyj",
    //   linkedin: "https://www.linkedin.com/in/villevainio/",
    //   quote:
    //     "Lauri on yksi harkitsevimmista kehittäjistä, joiden kanssa olen työskennellyt. Hän nosti jatkuvasti tiimin laatutasoa – selkeillä arkkitehtuuripäätöksillä, rakentavilla koodikatselmuksilla ja pragmaattisella asenteella monimutkaisiin ongelmiin. Aito tiimin vahvistaja.",
    //   verification: {
    //     type: "pr",
    //     url: "https://github.com/placeholder/cv/pull/1",
    //   },
    // },
    // {
    //   firstName: "Mikko",
    //   lastName: "Koskela",
    //   title: "Lead Developer",
    //   company: "Teollisuuden Voima Oyj",
    //   linkedin: "https://www.linkedin.com/in/mikkokoskela/",
    //   quote:
    //     "Laurin kanssa työskentely oli erinomainen kokemus. Hän ymmärsi toimialavaatimuksemme nopeasti, toimitti siistiä ja ylläpidettävää koodia ja kommunikoi selkeästi sekä teknisten että ei-teknisten sidosryhmien kanssa. Suosittelen lämpimästi.",
    //   verification: {
    //     type: "pr",
    //     url: "https://github.com/placeholder/cv/pull/2",
    //   },
    // },
    // {
    //   firstName: "Janne",
    //   lastName: "Lehtimäki",
    //   title: "Toimitusjohtaja",
    //   company: "Leafill Solutions Oy",
    //   linkedin: "https://www.linkedin.com/in/jannelehtimaki/",
    //   quote:
    //     "Laurilla on harvinainen yhdistelmä syvää teknistä osaamista ja pragmaattista arviointikykyä. Hän piti monimutkaisuuden kurissa samalla kun toimitti ominaisuuksia, jotka todella vaikuttivat tulokseen. Yksi parhaimmista yhteistyökumppaneistani.",
    //   verification: {
    //     type: "linkedin_post",
    //     url: "https://www.linkedin.com/posts/placeholder-janne",
    //   },
    // },
    // {
    //   firstName: "Timo",
    //   lastName: "Ahvonen",
    //   title: "Transformation Officer",
    //   company: "Suomen Euromaster Oy",
    //   linkedin: "https://www.linkedin.com/in/ahvonen/",
    //   quote:
    //     "Lauri muutti tapamme lähestyä ohjelmistokehitystä. Hän toi rakennetta kaaokseen hidastamatta toimintaamme. Yhteistyö oli sujuvaa alusta loppuun, ja lopputulos ylitti odotukset.",
    //   verification: {
    //     type: "linkedin_post",
    //     url: "https://www.linkedin.com/posts/placeholder-timo",
    //   },
    // },
  ],
  en: [
    // {
    //   firstName: "Ville",
    //   lastName: "Vainio",
    //   title: "Chief Cloud Developer",
    //   company: "Basware Oyj",
    //   linkedin: "https://www.linkedin.com/in/villevainio/",
    //   quote:
    //     "Lauri is one of the most thoughtful engineers I've worked with. He consistently raised the team's quality bar — through clear architectural decisions, constructive code reviews, and a pragmatic attitude toward complex problems. A genuine team multiplier.",
    //   verification: {
    //     type: "pr",
    //     url: "https://github.com/placeholder/cv/pull/1",
    //   },
    // },
    // {
    //   firstName: "Mikko",
    //   lastName: "Koskela",
    //   title: "Lead Developer",
    //   company: "Teollisuuden Voima Oyj",
    //   linkedin: "https://www.linkedin.com/in/mikkokoskela/",
    //   quote:
    //     "Working with Lauri was an excellent experience. He quickly grasped our domain requirements, delivered clean and maintainable code, and communicated clearly with both technical and non-technical stakeholders. Highly recommended.",
    //   verification: {
    //     type: "pr",
    //     url: "https://github.com/placeholder/cv/pull/2",
    //   },
    // },
    // {
    //   firstName: "Janne",
    //   lastName: "Lehtimäki",
    //   title: "CEO",
    //   company: "Leafill Solutions Oy",
    //   linkedin: "https://www.linkedin.com/in/jannelehtimaki/",
    //   quote:
    //     "Lauri has a rare combination of deep technical skill and pragmatic judgment. He kept complexity in check while delivering features that actually moved the needle. One of the best collaborators I've had.",
    //   verification: {
    //     type: "linkedin_post",
    //     url: "https://www.linkedin.com/posts/placeholder-janne",
    //   },
    // },
    // {
    //   firstName: "Timo",
    //   lastName: "Ahvonen",
    //   title: "Transformation Officer",
    //   company: "Suomen Euromaster Oy",
    //   linkedin: "https://www.linkedin.com/in/ahvonen/",
    //   quote:
    //     "Lauri transformed how we approached software delivery. He brought structure where there was chaos, without slowing us down. The collaboration was smooth from start to finish, and the results exceeded expectations.",
    //   verification: {
    //     type: "linkedin_post",
    //     url: "https://www.linkedin.com/posts/placeholder-timo",
    //   },
    // },
  ],
});
