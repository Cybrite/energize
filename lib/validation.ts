import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(3).max(50),
  description: z.string().min(15).max(1000),
  category: z.string().min(3).max(20),
  link: z
    .string()
    .url()
    .refine(async (url) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        const contentType = res.headers.get("content-type");

        if (contentType?.startsWith("image/")) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    }),
  pitch: z.string().min(15),
});
