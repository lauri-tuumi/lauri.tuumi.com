import { z } from "zod";

const zContact = z.object({
  emailUser: z.string().regex(/^[a-z0-9._%+-]+$/, "Invalid email username"),
  emailDomain: z
    .string()
    .regex(/^[a-z0-9.-]+\.[a-z]{2,}$/, "Invalid email domain"),
  linkedin: z
    .url()
    .refine((url) => url.includes("linkedin.com/in/"), {
      message: "Must be a LinkedIn profile URL",
    }),
});

export const contact = zContact.parse({
  emailUser: "lauri",
  emailDomain: "tuumi.com",
  linkedin: "https://www.linkedin.com/in/lauri-tuumi-4898601a3/",
});

export const getEmail = () => `${contact.emailUser}@${contact.emailDomain}`;
