import { z } from "zod";
import { ZodSchema } from "zod";

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "first name must be atleat 2 charecters." }),
  lastName: z
    .string()
    .min(2, { message: "last name must be atleast 2 charecters" }),
  username: z
    .string()
    .min(2, { message: "username must be atleast 2 charecters." }),
});

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const results = schema.safeParse(data);
  if (!results.success) {
    const errors = results.error.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return results.data;
}

const validateFile = () => {
  const maxUploadSize = 1024 * 1024;
  const acceptedTypeFile = ["image/"];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, `File size must be less then 1 MB`)
    .refine((file) => {
      return (
        !file || acceptedTypeFile.some((type) => file.type.startsWith(type))
      );
    }, "File must be an image");
};

export const imageSchema = z.object({
  image: validateFile(),
});

export const propertySchema = z.object({
  name: z
    .string()
    .min(2, { message: "name must be atleast 2 charecters" })
    .max(100, { message: "name must be less then 100" }),
  tagline: z
    .string()
    .min(2, { message: "tagline must be atleast 2 charecters" })
    .max(100, { message: "tagline must be less then 100 charecters" }),
  price: z.coerce
    .number()
    .int()
    .min(0, { message: "price must be a positive number" }),
  category: z.string(),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    { message: "description must be 10 and 1000 words" }
  ),
  country: z.string(),
  guests: z.coerce.number().int().min(0, {
    message: "guest amount must be a positive number",
  }),
  bedrooms: z.coerce.number().int().min(0, {
    message: "bedrooms amount must be a positive number",
  }),
  beds: z.coerce.number().int().min(0, {
    message: "beds amount must be a positive number",
  }),
  baths: z.coerce.number().int().min(0, {
    message: "baths amount must be a positive number",
  }),
  amenities: z.string(),
});
