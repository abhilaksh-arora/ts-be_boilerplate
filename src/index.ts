import app from "./app";
import config from "config";
import logger from "./utils/logger";
import winstonLogger from "./utils/winstonLogger";
import gracefulShutdown from "http-graceful-shutdown";

const serverPort = config.get("PORT") || 2711;

// Start server
const server = app.listen(serverPort, () => {
  logger.info(
    `🚀 Server is up and running at http://localhost:${serverPort}. Access it to start using the application.`
  );
});

// Cleanup function for shutdown
const shutdownCleanup = async (signal?: string) => {
  logger.info(`Received ${signal}, shutting down...`);

  // Wait for logger to flush before exiting
  const loggerDone = new Promise<void>((resolve) => {
    winstonLogger.on("finish", resolve);
  });
  winstonLogger.end();

  return loggerDone;
};

// Attach graceful shutdown
gracefulShutdown(server, {
  onShutdown: shutdownCleanup,
  timeout: 5000,
});

// Catch unhandled rejections
process.on("unhandledRejection", (err: any) => {
  logger.error(`Unhandled Rejection: ${err}`);
  process.exit(1);
});
