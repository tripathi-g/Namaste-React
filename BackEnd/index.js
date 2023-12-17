const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.locals.target = "asdasd";
// Define the CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(
  "/swiggy-cors",
  createProxyMiddleware({
    target: "https://www.swiggy.com",
    changeOrigin: true,
    pathRewrite: {
      "^/swiggy-cors": "/", // rewrite path
    },
  })
);

app.get("/health", (req, res) => {
  res.send({ Status: "All Good" });
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
