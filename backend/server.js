const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const chatRoute = require("./routes/chat");
app.use("/api", chatRoute);

const PORT = 5050; // Updated port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
