const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 5555;

// Middleware to parse JSON bodies and cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Middleware to log incoming requests
app.use((req, _, next) => {
  console.log("--- Incoming Request ---");
  console.log("Method:", req.method);
  console.log("URL:", req.originalUrl);
  console.log("Headers:", req.headers);
  console.log("Params:", req.params);
  console.log("Query:", req.query);
  console.log("Body:", req.body);
  console.log("Cookies:", Object.keys(req.cookies).length > 0 ? req.cookies : {});
  console.log("------------------------");
  next();
});

// Sample route
app.all("*", (req, res) => {
  res.send("Request received and logged");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
