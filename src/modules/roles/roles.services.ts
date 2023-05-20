import { InferModel, and, eq } from "drizzle-orm";
import { db } from "../../db";
import { roles } from "../../db/schema";

export async function createRole(data: InferModel<typeof roles, "insert">) {
  const result = await db.insert(roles).values(data).returning();

  return result[0];
}

export async function getRoleByName({
  name,
  applicationId,
}: {
  name: string;
  applicationId: string;
}) {
  const result = await db
    // SELECT *
    .select()
    // FROM roles
    .from(roles)
    // WHERE name = ? AND applicationId ?
    .where(and(eq(roles.name, name), eq(roles.applicationId, applicationId)))
    .limit(1);

  return result[0];
}
