import { UserRole } from "@prisma/client";
import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Email must be a string!",
    })
    .email({
      message: "Email is required!",
    }),
  password: z.string().min(1, {
    message: "Password is required!",
  }),
  code: z.optional(
    z
      .string()
      .min(6, { message: "2FA Code must be 6 digits long!" })
      .max(6, { message: "2FA Code must be 6 digits only!" })
  ),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required!",
  }),
  email: z
    .string({
      invalid_type_error: "Invalid Email!",
    })
    .email({
      message: "Email is required!",
    }),
  password: z.string().min(6, {
    message: "Password must be atleast 6 characters long!",
  }),
});

export const ResetSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Invalid Email!",
    })
    .email({
      message: "Email is required!",
    }),
});

export const NewPasswordSchema = z.object({
  password: z
    .string({
      invalid_type_error: "Invalid Password!",
    })
    .min(6, {
      message: "Password must be atleast 6 characters long!",
    }),
  confirmPassword: z
    .string({
      invalid_type_error: "Invalid Password!",
    })
    .min(6, {
      message: "Password must be atleast 6 characters long!",
    }),
});

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      if (!data.newPassword && data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Password & New Password both required!",
      path: ["newPassword"],
    }
  );
