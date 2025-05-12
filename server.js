import { configDotenv } from "dotenv";
import app from "./app.js";

configDotenv({ path: "./.env" });

const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
  console.log(`Server is running on PORT ${PORT}`);
});
