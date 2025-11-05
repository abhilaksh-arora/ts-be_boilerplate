import { DateTime } from "luxon";
import winston from "winston";
import WinstonDailyRotateFile from "winston-daily-rotate-file";
import DiscordTransport from "./discordTransport";
const serviceName: string = "ts-be_boilerplate";
const winstonTransportConfig = {
  consoleConfig: {
    level: "debug",
    handleExceptions: true,
  },
  fileRotateConfig: {
    level: "info",
    filename: `${serviceName}-%DATE%.log`,
    datePattern: "YYYY-MM-DD",
    dirname: `/var/log/ts-be_boilerplate/${process.env.NODE_ENV}/${serviceName}`,
    maxSize: "20m",
    maxFiles: 14,
    handleExceptions: true,
  },
};

const exactLevelFilter = (level: string) => {
  return winston.format((info) => {
    return info.level === level ? info : false;
  })();
};

const timestampFormat = winston.format((info, opts: any) => {
  if (opts.zone) {
    info.timestamp = DateTime.now().setZone(opts.zone).toISO();
  }
  return info;
});
const logLineFormat = winston.format.printf(
  (info) => `${info.timestamp} \
["-"] \
[${info.label}] \
${info.level.toUpperCase()}: ${info.message}`
);
const format = winston.format.combine(
  winston.format.label({ label: serviceName }),
  timestampFormat({ zone: "Asia/Kolkata" }),
  logLineFormat
);
const winstonTransports = [];
if (["stage", "beta", "production"].includes(process.env.NODE_ENV || "")) {
  winstonTransports.push(
    new WinstonDailyRotateFile(winstonTransportConfig.fileRotateConfig)
  );
} else {
  winstonTransports.push(
    new winston.transports.Console(winstonTransportConfig.consoleConfig)
  );
}

// Error level webhook
if (process.env.DISCORD_WEBHOOK_URL) {
  winstonTransports.push(
    new DiscordTransport({
      webhookUrl: process.env.DISCORD_WEBHOOK_URL,
      level: "error",
      format: exactLevelFilter("error"),
    })
  );
}

// Info level webhook
if (process.env.DISCORD_INFO_WEBHOOK_URL) {
  winstonTransports.push(
    new DiscordTransport({
      webhookUrl: process.env.DISCORD_INFO_WEBHOOK_URL,
      level: "info",
      format: exactLevelFilter("info"),
    })
  );
}

const winstonLogger = winston.createLogger({
  levels: winston.config.syslog.levels,
  transports: winstonTransports,
  format,
  exitOnError: false,
});
export default winstonLogger;
