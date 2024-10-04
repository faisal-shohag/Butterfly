import { z }  from 'zod'

export const updateProfileSchema = z.object({
    name: z.string().min(1,  "Cannot be empty")
})

export const signInSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
})



export const signUpSchema = signInSchema.extend({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be at most 50 characters"),
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be at most 20 characters")
      .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores")
      .refine((val) => !val.includes(" "), "Username cannot contain spaces"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });



  export const bookSchema = z.object({
    title: z.string().min(1, "Title is required"),
    author: z.string().min(1, "Author is required"),
    isbn: z.string().optional(),
    publishedYear: z.string().optional(),
    publisher: z.string().optional(),
    cover: z.string().url("Invalid URL").optional(),
    description: z.string().optional(),
    genre: z.string().min(1, "Genre is required"),
    lookingForTitle: z.string().optional(),
    lookingForAuthor: z.string().optional(),
    lookingForCover: z.string().url("Invalid URL").optional(),
    lookingForGenre: z.string().optional(),
    lookingForDescription: z.string().optional(),
  });


  export const usernameSchema = z.object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters long" })
      .max(20, { message: "Username must not exceed 20 characters" })
      .regex(/^[a-zA-Z0-9_]+$/, {
        message: "Username can only contain letters, numbers, and underscores",
      }),
  })
  