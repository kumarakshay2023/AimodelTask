import { z } from "zod";

export const captionSchema = z.object({
  caption: z
    .string()
    .min(5, "Caption must be at least 5 characters")
    .max(500, "Caption too long"),
});

export function validateCaption() {
  return captionSchema.parse({ caption });
}
