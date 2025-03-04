const express = require("express");
const path = require("path");
const app = express();
// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));
// Listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});