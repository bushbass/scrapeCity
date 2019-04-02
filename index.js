import express from "express";
import { getTwitterCount, getInstagramCount } from "./lib/scraper";

const app = express();
app.get("/", (req, res) => res.send("try /scrape"));

app.get("/scrape", async (req, res, next) => {
  console.log("scraping!!!");
  const [iCount, tCount] = await Promise.all([
    getTwitterCount(),
    getInstagramCount()
  ]);
  console.log(iCount, tCount);
  res.json({ iCount, tCount });
});

app.listen(2093, () => console.log("example app running on port 2093"));
