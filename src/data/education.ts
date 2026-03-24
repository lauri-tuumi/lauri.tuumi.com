import { z } from "zod";
import { zDegree } from "@/lib/types";

const zEducation = z.object({
  fi: z.array(zDegree),
  en: z.array(zDegree),
});

export const education = zEducation.parse({
  fi: [
    {
      degree: "Tietojenkäsittelyn Tradenomitutkinto",
      school: "Satakunnan Ammattikorkeakoulu",
      years: "2019 – 2023",
    },
    {
      degree: "Growth & AI Academy",
      school: "Saranen Consulting Oy",
      years: "06/2024 – 10/2024",
    },
    {
      degree: "Ylioppilastutkinto",
      school: "Tampereen Lyseon Lukio",
      years: "2014 – 2018",
    },
  ],
  en: [
    {
      degree: "Bachelor of Business Administration, Business IT",
      school: "Satakunta University of Applied Sciences",
      years: "2019 – 2023",
    },
    {
      degree: "Growth & AI Academy",
      school: "Saranen Consulting Oy",
      years: "06/2024 – 10/2024",
    },
    {
      degree: "Finnish Matriculation Examination",
      school: "Tampere Lyseo Upper Secondary School",
      years: "2014 – 2018",
    },
  ],
});
