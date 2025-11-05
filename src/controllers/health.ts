import { controllerWrapper } from "../lib/controllerWrapper";
import { getHealthMessage } from "../services/health";

export const healthCheck = controllerWrapper(async (_req, res) => {
  const message = await getHealthMessage();

  res.success({
    message,
  });
});
