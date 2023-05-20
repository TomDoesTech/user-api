import { FastifyReply, FastifyRequest } from "fastify";
import { CreateRoleBody } from "./role.schemas";
import { createRole } from "./roles.services";

export async function createRoleHandler(
  request: FastifyRequest<{
    Body: CreateRoleBody;
  }>,
  reply: FastifyReply
) {
  const user = request.user;
  const applicationId = user.applicationId;
  const { name, permissions } = request.body;

  const role = await createRole({
    name,
    permissions,
    applicationId,
  });

  return role;
}
