import express from "express";
import cors from "cors";
import path from "path";

const app = express();

// Next.js frontend se request allow karna
app.use(
  cors({
    origin: "http://next.x-u.cc", // frontend URL
  })
);

// Static images serve karna
// Example final URL: https://next.x-u.cc/images/logo.png
app.use("/topchat/assets/images", express.static(path.join(__dirname, "images")));

app.listen(4000, () => console.log("Server running on port 4000"));
