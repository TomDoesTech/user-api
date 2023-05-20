import { S } from "drizzle-orm/column.d-8b137277";
import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";

// Create user
const createUserBodySchema = z.object({
  email: z.string().email(),
  name: z.string(),
  applicationId: z.string().uuid(),
  password: z.string().min(6),
  initialUser: z.boolean().optional(),
});

export type CreateUserBody = z.infer<typeof createUserBodySchema>;

export const createUserJsonSchema = {
  body: zodToJsonSchema(createUserBodySchema, "createUserBodySchema"),
};

// Login
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  applicationId: z.string(),
});

export type LoginBody = z.infer<typeof loginSchema>;

export const loginJsonSchema = {
  body: zodToJsonSchema(loginSchema, "loginSchema"),
};

// Assign role to user
const assignRoleToUserBody = z.object({
  userId: z.string().uuid(),
  roleId: z.string().uuid(),
  // applicationId: z.string().uuid(),
});

export type AssignRoleToUserBody = z.infer<typeof assignRoleToUserBody>;

export const assignRoleTouserJsonSchema = {
  body: zodToJsonSchema(assignRoleToUserBody, "assignRoleToUserBody"),
};
