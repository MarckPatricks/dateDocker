const express = require("express");
const app = express();

app.use(express.static("Public"));
app.listen(3000, () => {
  console.log("Servidor conectandose al puerto", 3000);
});
