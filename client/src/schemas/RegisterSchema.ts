import * as z from "zod";

export const RegisterSchema = z.object({
  fullName: z.string().trim().min(1, { message: "Pamiršote įvesti vardą" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Pamiršote įvesti el.pašto adresą" })
    .email({ message: "Neteisingas el. pašto adreso formatas" }),
  githubName: z
    .string()
    .trim()
    .min(1, { message: "Pamiršote įvesti GitHub naudotojo vardą" }),
});
