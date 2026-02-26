// src/server.ts
import dotenv from "dotenv";
import { createApp } from "./app";
import { pool } from "./config/db";

dotenv.config();

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

const app = createApp();

// src/server.ts
const startServer = async () => {
  try {
    pool
      .connect()
      .then(() => console.log("DB Connected"))
      .catch((err) => console.error("DB Error", err));

    app.listen(PORT, () => {
      console.log(`• Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server error:", error);
    process.exit(1);
  }
};

startServer();
