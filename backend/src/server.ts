import { startServer } from "./app"; // Adjust path as needed

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});