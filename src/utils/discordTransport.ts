import Transport from "winston-transport";
import axios from "axios";

type LogLevel = "INFO" | "WARN" | "ERROR" | "CRITICAL";

interface DiscordEmbed {
  description: string;
  color: number;
  timestamp: string;
}

interface DiscordMessage {
  embeds: DiscordEmbed[];
}

class DiscordTransport extends Transport {
  webhookUrl: string;

  constructor(opts: Transport.TransportStreamOptions & { webhookUrl: string }) {
    super(opts);
    this.webhookUrl = opts.webhookUrl;
  }

  private getColor(level: string): number {
    const colors: Record<LogLevel, number> = {
      INFO: 3066993,
      WARN: 16753920,
      ERROR: 15158332,
      CRITICAL: 16711680,
    };
    return colors[level.toUpperCase() as LogLevel] ?? colors.INFO;
  }

  async log(
    info: Transport.TransportStreamOptions & {
      level: string;
      message: string;
      error?: Error;
      data?: any;
    },
    callback: () => void
  ) {
    setImmediate(() => {
      this.emit("logged", info);
    });

    // Combine message, error, and data into one JSON block
    const payloadData = {
      message: info.message,
      ...(info.data ? { data: info.data } : {}),
      ...(info.error ? { error: info.error.stack || info.error.message } : {}),
    };

    const payload: DiscordMessage = {
      embeds: [
        {
          description:
            "```json\n" + JSON.stringify(payloadData, null, 2) + "\n```",
          color: this.getColor(info.level),
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      if (false) await axios.post(this.webhookUrl, payload);
    } catch (err) {
      console.error("Failed to send log to Discord:", err);
    }

    callback();
  }
}

export default DiscordTransport;
