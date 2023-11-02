import * as z from 'zod';

export const formSchema = z.object({
  email: z.string().email(),
  first_name: z.string(),
  last_name: z.string(),
});
