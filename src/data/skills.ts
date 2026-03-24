import { z } from "zod";
import { zSkill } from "@/lib/types";

const zSkills = z.object({
  fi: z.array(zSkill),
  en: z.array(zSkill),
});

export const skills = zSkills.parse({
  fi: [
    { name: "Next.js", level: 4 },
    { name: "Node.js / Express.js", level: 4 },
    { name: "Zod / TypeScript", level: 5 },
    { name: "SQL-tietokannat", level: 4 },
    { name: "CI/CD", level: 3 },
    { name: "AWS", level: 2 },
    { name: "C# (.NET Core)", level: 3 },
    { name: "Angular", level: 2 },
    { name: "Python", level: 2 },
    { name: "Java", level: 2 },
  ],
  en: [
    { name: "Next.js", level: 4 },
    { name: "Node.js / Express.js", level: 4 },
    { name: "Zod / TypeScript", level: 5 },
    { name: "SQL Databases", level: 4 },
    { name: "CI/CD", level: 3 },
    { name: "AWS", level: 2 },
    { name: "C# (.NET Core)", level: 3 },
    { name: "Angular", level: 2 },
    { name: "Python", level: 2 },
    { name: "Java", level: 2 },
  ],
});
