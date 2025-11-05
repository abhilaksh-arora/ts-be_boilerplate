type ConnectionConfig = {
  client: string;
  connection: {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
    ssl?: {
      rejectUnauthorized: boolean;
    };
  };
  migrations: {
    directory: string;
  };
};

export default ConnectionConfig;
