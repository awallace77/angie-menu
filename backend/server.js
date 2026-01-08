const express = require("express");
const cors = require("cors");
const menuRoutes = require("./menuRoutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allows React to talk to Node
app.use(express.json()); // Allows Node to read JSON from the request body

// Use your routes
app.use(menuRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
