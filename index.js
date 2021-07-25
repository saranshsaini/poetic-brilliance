const poems = require("./data/poems.json");
const quotes = require("./data/quotes.json");

function getInspired(asJSON = false) {
  let randPoem = poems[Math.floor(Math.random() * poems.length)];
  delete randPoem["linecount"];

  if (!asJSON) {
    let poem = randPoem["lines"];
    poem.unshift(randPoem["title"], "");
    poem.push("", "~" + randPoem["author"]);
    randPoem = poem.join("\n");
  }
  return randPoem;
}

function getMotivated(asJSON = false) {
  let randQuote = quotes[Math.floor(Math.random() * quotes.length)];

  if (!asJSON) {
    let author = randQuote["author"] === null ? "" : "~" + randQuote["author"];
    randQuote = randQuote["text"] + "\n" + author;
  }
  return randQuote;
}

function inspireMe(asJSON = false) {
  console.log(getInspired(asJSON));
}

function motivateMe(asJSON = false) {
  console.log(getMotivated(asJSON));
}

module.exports = {
  getInspired,
  getMotivated,
  inspireMe,
  motivateMe,
};
