const express = require("express");
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const bodyParser = require("body-parser");
const app = express();

const prisma = new PrismaClient();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/quotes", async (req, res) => {
  const quotes = await prisma.quote.findMany();
  res.json(quotes);
});

app.put("/quote", async (req, res) => {
  const { text, author } = req.body;
  const newQuote = await prisma.quote.create({
    data: { text, author },
  });
  res.json(newQuote);
});

app.delete("/quote", async (req, res) => {
  const { id } = req.query;
  await prisma.quote.delete({
    where: {
      id: id,
    },
  });
  res.json({
    success: true,
  });
});

app.listen(3000, () => {
  console.log("Listening");
});
