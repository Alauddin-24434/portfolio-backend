import mongoose from "mongoose";
import { logger } from "./app/utils/Logger";
import app from "./app";
import { envVariable } from "./app/config";

// server connect 
async function starServer() {
  try {
    await mongoose.connect(envVariable.DB_URL as string);
    logger.info("Mongodb Connected successfully!");
    app.listen(envVariable.PORT, () => {
      logger.info(`🚀 Server is running on port ${envVariable.PORT}`);
    });
  } catch (error) {
    logger.error("❌ Failed to connect to MongoDB", error);
    process.exit(1);
  }
}

// start server call
starServer();
