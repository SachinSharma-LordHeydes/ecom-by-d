import mongoose from "mongoose";

export async function dbConnect() {
  const BD_URI = process.env.BD_URI;
  try {
    if (!BD_URI) throw new Error("Data base url not found");
    const dbConnectionResponse = await mongoose.connect(BD_URI);
    if (!dbConnectionResponse)
      throw new Error("Unable to make an connection with database");
    console.log("Successfully made an connection with database")
  } catch (error: any) {
    console.log("Data base connection error", error);
  }
}
